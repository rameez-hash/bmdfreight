import { Metadata } from 'next';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { Zap, Clock, Truck, Shield, Rocket, Timer, Gauge, BadgeCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expedited Auto Shipping | Priority Car Transport | BMD Freight',
  description: 'Need your car shipped urgently? BMD Freight offers expedited auto transport with priority dispatch, dedicated carriers, and the fastest available delivery. Get a quote now.',
};

const features = [
  { icon: Rocket, title: 'First-In-Line Dispatch', text: 'Your vehicle jumps to the front of the dispatch queue. Our team works the phones and network to find the fastest available carrier on your specific route — often within hours.' },
  { icon: Timer, title: 'Optimized for Speed', text: 'Expedited shipments are matched to carriers already running your route with minimal stops. We cut down transit time without cutting corners on safety or handling.' },
  { icon: Gauge, title: 'Carriers Who Know Urgent Jobs', text: 'We work with experienced drivers who understand what time-sensitive means. They communicate proactively, move efficiently, and treat your shipment with urgency.' },
  { icon: BadgeCheck, title: 'Same Protection, Faster Timeline', text: 'Speed never comes at the cost of safety. Every expedited shipment includes full cargo insurance, a complete Bill of Lading inspection, and professional carrier handling.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Expedited Auto Shipping',
  description: 'Priority dispatch and fastest available delivery for urgent car shipments.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'BMD Freight',
    url: 'https://bmdfreight.com',
    telephone: '+1-872-204-2373',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Expedited Auto Shipping',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function ExpeditedShippingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/state/door.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Expedited Auto Shipping — When You Can&apos;t Wait
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Priority dispatch. Dedicated carriers. Fastest available delivery. When you need your car moved now, BMD Freight\'s expedited service gets it done.
              </p>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-4">
            Built for When Time Is Not on Your Side
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Last-minute job relocation. An auction vehicle with a tight delivery window. A family emergency. Whatever the reason, expedited shipping gives you speed without sacrificing safety.
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

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6">
            How Expedited Shipping Works at BMD Freight
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The moment you book an expedited shipment, your order goes to the top of our dispatch priority list. Our logistics team starts contacting qualified carriers on your route immediately, with a focus on finding the fastest available pickup — sometimes the same day, often within 24 hours.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Unlike standard bookings, expedited shipments are matched to carriers already running your corridor with minimal detours. We optimize for direct routing and reduced transit time at every stage. You\'ll receive carrier information and a pickup window as soon as a driver is confirmed.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We\'re straightforward about one thing: we can\'t control weather or road conditions. But we control everything else — the dispatch speed, the carrier selection, the communication, and the follow-through. If you need your vehicle moved urgently, call us directly or get a quote online and we\'ll make it happen as fast as humanly possible.
          </p>
        </div>
      </section>
    </>
  );
}
