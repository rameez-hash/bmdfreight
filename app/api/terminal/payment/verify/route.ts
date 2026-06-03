import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { paymentIntentId, uniqueId } = await request.json();

    const paymentIntent = await getStripe().paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      await prisma.paymentLink.update({
        where: { uniqueId },
        data: { status: 'paid' },
      });

      return NextResponse.json({ success: true, status: 'paid' });
    }

    return NextResponse.json({ success: false, status: paymentIntent.status });
  } catch (error) {
    console.error('Verify payment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
