import { Metadata } from 'next';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { Shield, Truck, Star, Clock, ChevronRight, Car, Package, BadgeCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enclosed Auto Transport | Premium Protection for Luxury & Classic Cars',
  description: 'BMD Freight offers fully enclosed vehicle transport for luxury, exotic, and classic cars. Hydraulic lift gates, soft tie-downs, and complete cargo insurance. Get a free quote.',
};

const features = [
  { icon: Package, title: 'Total Weather & Road Protection', text: 'Enclosed trailers completely shield your vehicle from rain, snow, road debris, UV exposure, and dust. Not a single element touches your car from the moment it\'s loaded until delivery.' },
  { icon: Car, title: 'Hydraulic Lifts & Soft Tie-Downs', text: 'Loading is done with hydraulic lift gates, eliminating ground clearance issues. Soft straps cradle the vehicle without any contact with the wheels, axles, or undercarriage.' },
  { icon: Sparkles, title: 'Purpose-Built for High-Value Vehicles', text: 'Enclosed transport is the standard choice for luxury cars, exotics, classic collectors, show cars, and any vehicle where appearance and condition cannot be compromised.' },
  { icon: BadgeCheck, title: 'White-Glove Handling, Every Step', text: 'Your vehicle receives one-on-one attention from an experienced driver who specializes in premium transport. Every detail is documented before loading and verified at delivery.' },
];

export default function EnclosedTransportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/state/door.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Enclosed Auto Transport — Maximum Protection for Vehicles That Demand It
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                When your vehicle is worth protecting, don\'t settle for open transport. Fully enclosed trailers, hydraulic lifts, and white-glove handling — get your free quote today.
              </p>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-4">
            Why Enclosed Transport Is Worth It
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Open transport is fine for everyday vehicles. But when your car is irreplaceable, enclosed is the only option that gives you complete peace of mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6">
            Who Uses Enclosed Auto Transport?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Enclosed transport is chosen by customers who can\'t afford risk. That includes collectors shipping a 1967 Shelby GT500, dealerships moving a brand-new Porsche 911 from auction, and enthusiasts transporting a recently restored classic that took years and thousands of dollars to build.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            It\'s also the right call for lease vehicles with a strict return condition, vehicles with a low ride height that can\'t safely roll onto a standard trailer, and any car with custom paint, body kits, or aftermarket modifications that add significant value or could be damaged during open transport.
          </p>
          <p className="text-slate-600 leading-relaxed">
            At BMD Freight, our enclosed carriers are driven by professionals who specialize in this type of transport. Every shipment includes comprehensive cargo insurance, a detailed Bill of Lading inspection, and direct communication with your driver throughout. Your car is irreplaceable — we treat it that way.
          </p>
        </div>
      </section>
    </>
  );
}
