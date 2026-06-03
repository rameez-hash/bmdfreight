'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Check, Lock, CreditCard } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface PaymentLink {
  id: string;
  uniqueId: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  currency: string;
  description: string | null;
  status: string;
  createdAt: string;
}

function PaymentForm({ link, clientSecret }: { link: PaymentLink; clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/terminal/success?id=${link.uniqueId}`,
      },
    });

    if (error) {
      setMessage(error.message || 'Payment failed');
    }
    setLoading(false);
  };

  const currencySymbol = link.currency === 'USD' ? '$' : link.currency === 'EUR' ? '€' : '£';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-blue-400 mb-2">
            {currencySymbol}{link.amount.toFixed(2)}
          </div>
          <p className="text-slate-300">{link.description || 'Freight Service Payment'}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between py-2 border-b border-white/10">
            <span className="text-slate-400">Client</span>
            <span className="text-white">{link.clientName}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/10">
            <span className="text-slate-400">Email</span>
            <span className="text-white">{link.clientEmail}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-slate-400">Date</span>
            <span className="text-white">{new Date(link.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <PaymentElement className="mb-6" />

        {message && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <CreditCard size={20} />
          {loading ? 'Processing...' : `Pay ${currencySymbol}${link.amount.toFixed(2)}`}
        </button>

        <div className="mt-4 text-center text-sm text-slate-400 flex items-center justify-center gap-2">
          <Lock size={14} /> Secure SSL Encrypted Checkout
        </div>
      </div>
    </form>
  );
}

export default function PayPage() {
  const { id } = useParams();
  const [link, setLink] = useState<PaymentLink | null>(null);
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const res = await fetch(`/api/terminal/pay/${id}`);
        if (!res.ok) throw new Error('Link not found');
        const data = await res.json();
        setLink(data.link);

        if (data.link.status === 'paid') {
          setError('Payment already completed');
          setLoading(false);
          return;
        }

        // Create payment intent
        const intentRes = await fetch('/api/terminal/payment/create-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uniqueId: id }),
        });

        if (!intentRes.ok) throw new Error('Failed to initialize payment');
        const intentData = await intentRes.json();
        setClientSecret(intentData.clientSecret);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchLink();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error || !link) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 max-w-md">
            <div className="text-red-400 text-xl mb-4">⚠</div>
            <h2 className="text-xl font-bold text-white mb-2">Error</h2>
            <p className="text-slate-300">{error || 'Payment link not found'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (link.status === 'paid') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 max-w-md">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Payment Complete</h2>
            <p className="text-slate-300">Thank you for your business!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Image src="/img/logo.webp" alt="BMD Freight" width={80} height={80} className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white">Payment Details</h1>
          <div className="inline-block mt-2 px-4 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
            Pending Payment
          </div>
        </div>

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm link={link} clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    </div>
  );
}
