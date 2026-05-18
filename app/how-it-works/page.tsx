import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { ChevronRight, Shield, Clock, Headphones, BadgeCheck, Car, Truck, Package, Phone, Calculator, ClipboardCheck, MapPin, Eye, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Car Shipping Works | Step-by-Step Guide | BMD Freight',
  description: 'Learn exactly how BMD Freight car shipping works — from instant quote to door-to-door delivery. Five simple steps, fully insured, no hidden fees.',
};

const steps = [
  {
    num: '01',
    title: 'Get an Instant, Locked-In Quote',
    text: 'Enter your pickup zip, destination zip, vehicle details, and preferred dates into our online calculator. You get a real price in under 60 seconds — no sign-up, no phone call, no hidden fees. That price is guaranteed when you book.',
    icon: Calculator,
  },
  {
    num: '02',
    title: 'Confirm Your Booking Online',
    text: 'Review your quote, select your pickup date, and confirm your shipment online in minutes. Prefer to talk? Our transport specialists are available 7 days a week to walk you through the process and answer every question.',
    icon: ClipboardCheck,
  },
  {
    num: '03',
    title: 'We Dispatch Your Carrier',
    text: 'Once booked, our logistics team matches your vehicle to a qualified, DOT-licensed carrier on your route. You receive your carrier\'s name, contact number, and confirmed pickup window — typically within 24–48 hours of booking.',
    icon: MapPin,
  },
  {
    num: '04',
    title: 'Pickup & Pre-Transport Inspection',
    text: 'Your driver calls at least one hour before arriving. At pickup, both you and the driver complete a detailed Bill of Lading inspection — documenting mileage, fuel level, and every existing mark. Both parties sign before the vehicle is loaded.',
    icon: Eye,
  },
  {
    num: '05',
    title: 'Delivery, Final Check & Payment',
    text: 'Your driver calls 24 hours before arrival. At delivery, you do a full walkaround against the original inspection report. If everything checks out, you complete payment on the spot. If any new damage exists, it is noted and a claim is filed immediately.',
    icon: CreditCard,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/img/homev2/banner.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                How BMD Freight Car Shipping Works — 5 Simple Steps
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                From your first quote to final delivery, we handle every detail. No middlemen, no surprises — just your car delivered safely to your door.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Shield className="w-5 h-5 text-[#ffac33]" />
                  <span className="text-sm">DOT-Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-[#ffac33]" />
                  <span className="text-sm">98.7% On-Time Rate</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Headphones className="w-5 h-5 text-[#ffac33]" />
                  <span className="text-sm">7-Day Live Support</span>
                </div>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-4">
            Every Step of Your Car Shipment, Explained
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
            We believe you should know exactly what happens with your vehicle at every stage. No guessing, no vague promises.
          </p>
          <div className="space-y-10 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffac33]/15 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#ffac33]" strokeWidth={2} />
                </div>
                <div className="pt-1">
                  <div className="text-[#ffac33] font-bold text-xs uppercase tracking-widest mb-1">Step {step.num}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Ship Your Car?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a real, locked-in quote in under 60 seconds. No phone call needed — book entirely online.
          </p>
          <Link href="/car-shipping-calculator" className="inline-flex items-center gap-2 bg-white text-accent hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
            Get Free Quote <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
