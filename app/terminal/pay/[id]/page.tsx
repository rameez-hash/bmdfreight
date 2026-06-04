'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Check, Lock, CreditCard, User, Mail, Calendar, ShieldCheck, Loader2 } from 'lucide-react';
import { formatUsd } from '@/lib/payment-link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const stripeAppearance = {
  theme: 'stripe' as const,
  variables: {
    colorPrimary: '#1e3a5f',
    colorBackground: '#ffffff',
    colorText: '#0f172a',
    colorDanger: '#dc2626',
    fontFamily: 'system-ui, sans-serif',
    borderRadius: '10px',
    spacingUnit: '4px',
  },
  rules: {
    '.Input': {
      border: '1px solid #e2e8f0',
      boxShadow: 'none',
      padding: '12px',
    },
    '.Input:focus': {
      border: '1px solid #1e3a5f',
      boxShadow: '0 0 0 3px rgba(30, 58, 95, 0.12)',
    },
    '.Label': {
      fontWeight: '500',
      marginBottom: '8px',
    },
  },
};

interface PaymentLink {
  id: string;
  uniqueId: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  description: string | null;
  status: string;
  createdAt: string;
}

function PaymentForm({ link }: { link: PaymentLink; clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage('');

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/terminal/success?id=${link.uniqueId}`,
      },
    });

    if (error) {
      setMessage(error.message || 'Payment failed. Please check your card details and try again.');
    }
    setLoading(false);
  };

  const formattedDate = new Date(link.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Order Summary */}
      <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Order Summary
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="min-w-0 flex-1">
            <p className="text-slate-900 font-semibold text-base sm:text-lg break-words">
              {link.description || 'Freight Service Payment'}
            </p>
            <p className="text-slate-500 text-sm mt-1">BMD Freight Services</p>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-[#1e3a5f] shrink-0">
            {formatUsd(link.amount)}
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-200">
          <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_5rem_1fr] gap-x-3 gap-y-1 items-start text-sm">
            <User size={16} className="text-slate-400 mt-0.5" />
            <span className="text-slate-500 sm:col-start-2">Bill To</span>
            <span className="text-slate-900 font-medium col-start-2 sm:col-start-3 break-words">{link.clientName}</span>
          </div>
          <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_5rem_1fr] gap-x-3 gap-y-1 items-start text-sm">
            <Mail size={16} className="text-slate-400 mt-0.5" />
            <span className="text-slate-500 sm:col-start-2">Email</span>
            <span className="text-slate-900 font-medium col-start-2 sm:col-start-3 break-all">{link.clientEmail}</span>
          </div>
          <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_5rem_1fr] gap-x-3 gap-y-1 items-start text-sm">
            <Calendar size={16} className="text-slate-400 mt-0.5" />
            <span className="text-slate-500 sm:col-start-2">Date</span>
            <span className="text-slate-900 font-medium col-start-2 sm:col-start-3">{formattedDate}</span>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard size={18} className="text-[#1e3a5f] shrink-0" />
          <h2 className="text-sm font-semibold text-slate-900">Payment Method</h2>
        </div>

        <div className="w-full min-w-0 overflow-x-auto">
          <PaymentElement
            options={{
              layout: {
                type: 'tabs',
                defaultCollapsed: false,
              },
            }}
          />
        </div>
      </div>

      {message && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full min-h-[48px] py-3.5 sm:py-4 px-4 bg-[#1e3a5f] hover:bg-[#152a45] active:scale-[0.99] disabled:bg-slate-400 disabled:cursor-not-allowed text-white text-sm sm:text-base font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1e3a5f]/20"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing Payment...
          </>
        ) : (
          <>
            <Lock size={18} />
            Pay {formatUsd(link.amount)} Securely
          </>
        )}
      </button>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs text-slate-500 text-center px-2">
        <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
        <span>256-bit SSL encryption · Powered by Stripe</span>
      </div>
    </form>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 flex flex-col">
      <div className="flex-1 w-full max-w-lg lg:max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col justify-center">
        <div className="text-center mb-4 sm:mb-6">
          <Image
            src="/img/logo.webp"
            alt="BMD Freight"
            width={56}
            height={56}
            className="mx-auto mb-2 sm:mb-3 bg-white rounded-xl p-1.5 shadow-sm w-14 h-14 sm:w-16 sm:h-16"
          />
          <h1 className="text-lg sm:text-xl font-bold text-slate-900">BMD Freight</h1>
          <p className="text-slate-500 text-xs sm:text-sm">Secure Payment Checkout</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6 md:p-8 w-full">
          {children}
        </div>
        <p className="text-center text-xs text-slate-400 mt-4 sm:mt-6 px-2">
          Questions? Contact us at{' '}
          <a href="mailto:support@bmdfreight.com" className="underline hover:text-slate-600">
            support@bmdfreight.com
          </a>
        </p>
      </div>
    </div>
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
        if (!res.ok) throw new Error('This payment link is invalid or has expired.');
        const data = await res.json();
        setLink(data.link);

        if (data.link.status === 'paid') {
          setError('already_paid');
          setLoading(false);
          return;
        }

        const intentRes = await fetch('/api/terminal/payment/create-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ uniqueId: id }),
        });

        if (!intentRes.ok) throw new Error('Unable to start payment. Please try again later.');
        const intentData = await intentRes.json();
        setClientSecret(intentData.clientSecret);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchLink();
  }, [id]);

  if (loading) {
    return (
      <PageShell>
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <Loader2 size={36} className="text-[#1e3a5f] animate-spin" />
          <p className="text-slate-600 font-medium">Preparing your checkout...</p>
          <p className="text-slate-400 text-sm">Please wait a moment</p>
        </div>
      </PageShell>
    );
  }

  if (error === 'already_paid' || link?.status === 'paid') {
    return (
      <PageShell>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Already Paid</h2>
          <p className="text-slate-500 text-sm">
            This payment has already been completed. Thank you!
          </p>
        </div>
      </PageShell>
    );
  }

  if (error || !link) {
    return (
      <PageShell>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl font-bold">!</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Payment Unavailable</h2>
          <p className="text-slate-500 text-sm">{error || 'Payment link not found.'}</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6 pb-4 border-b border-slate-100">
        <div className="min-w-0">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Complete Payment</h2>
          <p className="text-slate-500 text-xs sm:text-sm">Review details and pay below</p>
        </div>
        <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200 shrink-0">
          Pending
        </span>
      </div>

      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: stripeAppearance,
          }}
        >
          <PaymentForm link={link} clientSecret={clientSecret} />
        </Elements>
      )}
    </PageShell>
  );
}
