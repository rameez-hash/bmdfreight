'use client';

import Image from 'next/image';
import { X, ArrowLeft, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 text-center">
          <Image src="/img/logo.webp" alt="BMD Freight" width={80} height={80} className="mx-auto mb-6" />

          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <X size={40} className="text-red-400" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
          <p className="text-slate-300 mb-6">
            Your payment was cancelled. No charges were made to your account.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => window.history.back()}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={18} /> Try Again
            </button>

            <Link
              href="/"
              className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center justify-center gap-2 block"
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Need help? Contact us at info@bmdfreight.com
          </p>
        </div>
      </div>
    </div>
  );
}
