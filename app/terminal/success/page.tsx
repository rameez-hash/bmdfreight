'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Check, Download, Home } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!id) return;

      // Get payment intent from URL if present
      const paymentIntentId = searchParams.get('payment_intent');

      if (paymentIntentId) {
        try {
          await fetch('/api/terminal/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paymentIntentId, uniqueId: id }),
          });
          setVerified(true);
        } catch {
          console.error('Verification failed');
        }
      }
      setLoading(false);
    };

    verifyPayment();
  }, [id, searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white">Verifying payment...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 text-center">
          <Image src="/img/logo.webp" alt="BMD Freight" width={80} height={80} className="mx-auto mb-6" />

          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-400" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-slate-300 mb-6">
            Thank you for your payment. Your transaction has been completed successfully.
          </p>

          <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-slate-400">Reference ID</span>
              <span className="text-white font-mono text-sm">{id?.substring(0, 12)}...</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-400">Status</span>
              <span className="text-green-400">Paid</span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
              <Download size={18} /> Download Receipt
            </button>

            <Link
              href="/"
              className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center justify-center gap-2 block"
            >
              <Home size={18} /> Back to Home
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            A confirmation email has been sent to you.
          </p>
        </div>
      </div>
    </div>
  );
}
