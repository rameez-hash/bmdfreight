import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Free Car Shipping Calculator | Get an Instant Quote | BMD Freight',
  description: 'Get a real, locked-in car shipping price in under 60 seconds. Enter your route and vehicle info — no sign-up, no hidden fees, no phone call required.',
};

export default function CalculatorPage() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/img/homev2/banner.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Get Your Instant Car Shipping Quote — Locked In, No Hidden Fees
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Enter your pickup location, destination, and vehicle details. BMD Freight gives you a real, guaranteed price in seconds — no phone call, no sign-up, no obligation.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/people/BMD-Freight/61581013590213/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Image src="/img/homev2/fb.png" alt="Facebook" width={24} height={24} className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/bmdfreightofficial" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Image src="/img/homev2/ig.png" alt="Instagram" width={24} height={24} className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
