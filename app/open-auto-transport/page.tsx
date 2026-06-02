import { Metadata } from 'next';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { Truck, DollarSign, Shield, Clock, ChevronRight, Car, Users, BadgeCheck, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open Auto Transport | Affordable Nationwide Car Shipping | BMD Freight',
  description: 'Ship your car on an open carrier for the best price. BMD Freight\'s open auto transport is fast, insured, and available nationwide. Get your instant free quote today.',
};

const features = [
  { icon: DollarSign, title: 'The Most Cost-Effective Option', text: 'Open transport consistently offers the lowest shipping rates. By carrying up to 10 vehicles per load, costs are shared, giving you professional transport at the best possible price.' },
  { icon: Users, title: 'The Industry Standard — For Good Reason', text: 'This is how car manufacturers deliver new vehicles to dealerships. It\'s trusted, proven, and used for millions of shipments every year across the United States.' },
  { icon: BadgeCheck, title: 'Fully Insured Every Mile', text: 'Every open transport shipment is covered by the carrier\'s active cargo insurance from pickup through delivery. A Bill of Lading inspection protects you on both ends.' },
  { icon: Calendar, title: 'Faster Pickup Windows', text: 'Open carriers are far more plentiful on every route. That means shorter wait times, more scheduling flexibility, and quicker dispatch than enclosed transport options.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Open Auto Transport',
  description: 'Ship your car on an open carrier for the best price. Fast, insured, and available nationwide.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'BMD Freight',
    url: 'https://bmdfreight.com',
    telephone: '+1-872-204-2373',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Open Auto Transport',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function OpenTransportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/state/door.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Open Auto Transport — Reliable, Affordable, and Nationwide
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                The most popular way to ship a car in America. Fast carrier availability, full insurance coverage, and the lowest prices in the industry. Get your free quote now.
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
            Why Most Customers Choose Open Transport
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            For the vast majority of vehicles, open transport delivers the right balance of price, speed, and protection. Here\'s why it\'s the go-to choice.
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
            Is Open Transport Safe for Your Car?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The short answer: yes. Open transport is the exact same method car manufacturers use to ship brand-new vehicles from factories to dealerships. These carriers are engineered specifically for vehicle transport, with secure loading systems and experienced drivers who do this every single day.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Your vehicle is exposed to the open air during transit, which means it may collect road dust or require a quick wash upon arrival. However, actual damage from weather or debris is extremely rare. Every shipment includes cargo insurance and a full pre- and post-delivery inspection to document condition at both ends.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you\'re shipping an everyday car, a recently purchased vehicle, or anything that isn\'t a high-value collector item, open transport is the smart, cost-effective choice. Get your free quote with BMD Freight and have your car on the road within days.
          </p>
        </div>
      </section>
    </>
  );
}
