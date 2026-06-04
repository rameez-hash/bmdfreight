import { getStripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

function mapStripeToLinkStatus(
  stripeStatus: string,
  hasPaymentError: boolean
): string {
  if (stripeStatus === 'succeeded') return 'paid';
  if (stripeStatus === 'canceled') return 'cancelled';
  if (hasPaymentError) return 'failed';
  return 'pending';
}

export async function syncPendingPaymentsFromStripe(): Promise<number> {
  const pendingLinks = await prisma.paymentLink.findMany({
    where: {
      status: 'pending',
      stripeId: { not: null },
    },
  });

  if (pendingLinks.length === 0) return 0;

  const stripe = getStripe();
  let updated = 0;

  for (const link of pendingLinks) {
    if (!link.stripeId) continue;

    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(link.stripeId);
      const newStatus = mapStripeToLinkStatus(
        paymentIntent.status,
        Boolean(paymentIntent.last_payment_error)
      );

      if (newStatus !== link.status) {
        await prisma.paymentLink.update({
          where: { id: link.id },
          data: { status: newStatus },
        });
        updated++;
      }
    } catch (error) {
      console.error(`Stripe sync failed for link ${link.uniqueId}:`, error);
    }
  }

  return updated;
}
