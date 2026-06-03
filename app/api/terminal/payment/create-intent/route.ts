import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { uniqueId } = await request.json();

    const link = await prisma.paymentLink.findUnique({
      where: { uniqueId },
    });

    if (!link) {
      return NextResponse.json(
        { error: 'Payment link not found' },
        { status: 404 }
      );
    }

    if (link.status === 'paid') {
      return NextResponse.json(
        { error: 'Payment already completed' },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(parseFloat(link.amount.toString()) * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: link.currency.toLowerCase(),
      metadata: {
        paymentLinkId: link.id,
        uniqueId: link.uniqueId,
        clientEmail: link.clientEmail,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await prisma.paymentLink.update({
      where: { id: link.id },
      data: { stripeId: paymentIntent.id },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: link.amount,
      currency: link.currency,
    });
  } catch (error) {
    console.error('Create payment intent error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
