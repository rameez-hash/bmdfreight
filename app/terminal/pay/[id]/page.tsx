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
      padding: '14px',
    },
    '.Input:focus': {
      border: '1px solid #1e3a5f',
      boxShadow: '0 0 0 3px rgba(30, 58, 95, 0.12)',
    },
    '.Label': {
      fontWeight: '500',
      marginBottom: '8px',
    },
    '.Tab': {
      border: '1px solid #e2e8f0',
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

function OrderSummary({ link }: { link: PaymentLink }) {
  const formattedDate = new Date(link.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="h-full">
      <div className="bg-[#1e3a5f] rounded-2xl p-6 sm:p-8 text-white mb-4 lg:mb-0">
        <p className="text-blue-200 text-sm font-medium mb-1">Amount Due</p>
        <p className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {formatUsd(link.amount)}
        </p>
        <p className="text-blue-100 text-base sm:text-lg font-medium break-words">
          {link.description || 'Freight Service Payment'}
        </p>
        <p className="text-blue-200/80 text-sm mt-1">BMD Freight Services</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Payment Details
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
              <User size={16} className="text-slate-500" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 mb-0.5">Bill To</p>
              <p className="text-slate-900 font-medium break-words">{link.clientName}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
              <Mail size={16} className="text-slate-500" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 mb-0.5">Email</p>
              <p className="text-slate-900 font-medium break-all">{link.clientEmail}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
              <Calendar size={16} className="text-slate-500" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 mb-0.5">Invoice Date</p>
              <p className="text-slate-900 font-medium">{formattedDate}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
          <span>Secured by 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 flex-1">
        <div className="flex items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <CreditCard size={20} className="text-[#1e3a5f]" />
            <h2 className="text-lg font-bold text-slate-900">Pay Securely</h2>
          </div>
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200 shrink-0">
            Pending
          </span>
        </div>

        <div className="w-full">
          <PaymentElement
            options={{
              layout: {
                type: 'tabs',
                defaultCollapsed: false,
              },
            }}
          />
        </div>

        {message && (
          <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || loading}
          className="mt-6 w-full min-h-[52px] py-4 px-6 bg-[#1e3a5f] hover:bg-[#152a45] active:scale-[0.99] disabled:bg-slate-400 disabled:cursor-not-allowed text-white text-base font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1e3a5f]/25"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Processing Payment...
            </>
          ) : (
            <>
              <Lock size={18} />
              Pay {formatUsd(link.amount)}
            </>
          )}
        </button>

        <p className="mt-4 text-center text-xs text-slate-400">
          Powered by Stripe · Your card details are never stored on our servers
        </p>
      </div>
    </form>
  );
}

function SiteHeader() {
  return (
    <header className="w-full bg-[#1e3a5f] border-b border-white/10">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src="/img/logo.webp"
            alt="BMD Freight"
            width={44}
            height={44}
            className="bg-white rounded-lg p-1 shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-white font-bold text-base sm:text-lg truncate">BMD Freight</h1>
            <p className="text-blue-200 text-xs sm:text-sm truncate">Secure Payment Checkout</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-blue-200 text-xs shrink-0">
          <Lock size={14} />
          <span>Secure Checkout</span>
        </div>
      </div>
    </header>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-slate-100 flex flex-col">
      <SiteHeader />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {children}
      </main>
      <footer className="w-full border-t border-slate-200 bg-white py-4 px-4">
        <p className="text-center text-xs text-slate-500 max-w-6xl mx-auto">
          Questions? Contact{' '}
          <a href="mailto:info@bmdfreight.com" className="text-[#1e3a5f] underline hover:no-underline">
            info@bmdfreight.com
          </a>
        </p>
      </footer>
    </div>
  );
}

function StatusCard({
  icon,
  title,
  message,
  variant,
}: {
  icon: React.ReactNode;
  title: string;
  message: string;
  variant: 'success' | 'error';
}) {
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 text-center shadow-sm">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
          variant === 'success' ? 'bg-emerald-100' : 'bg-red-100'
        }`}
      >
        {icon}
      </div>
      <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-slate-500 text-sm">{message}</p>
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
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 size={40} className="text-[#1e3a5f] animate-spin" />
          <p className="text-slate-700 font-medium text-lg">Preparing your checkout...</p>
          <p className="text-slate-400 text-sm">Please wait a moment</p>
        </div>
      </PageShell>
    );
  }

  if (error === 'already_paid' || link?.status === 'paid') {
    return (
      <PageShell>
        <StatusCard
          variant="success"
          icon={<Check size={32} className="text-emerald-600" />}
          title="Already Paid"
          message="This payment has already been completed. Thank you!"
        />
      </PageShell>
    );
  }

  if (error || !link) {
    return (
      <PageShell>
        <StatusCard
          variant="error"
          icon={<span className="text-red-500 text-2xl font-bold">!</span>}
          title="Payment Unavailable"
          message={error || 'Payment link not found.'}
        />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start w-full">
        <div className="w-full lg:sticky lg:top-6">
          <OrderSummary link={link} />
        </div>

        <div className="w-full min-w-0">
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
        </div>
      </div>
    </PageShell>
  );
}
