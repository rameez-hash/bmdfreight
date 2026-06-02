import { Metadata } from 'next';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { Sun, Snowflake, MapPin, Truck, Calendar, BadgeCheck, Route, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seasonal Car Relocation | Snowbird Auto Transport | BMD Freight',
  description: 'BMD Freight specializes in seasonal car relocation for snowbirds and seasonal movers. Ship your car to Florida, Arizona, or any seasonal destination. Free quote today.',
};

const features = [
  { icon: Sun, title: 'Southbound Snowbird Transport', text: 'Every fall, thousands of snowbirds head to Florida, Arizona, Texas, and the Carolinas. We ship your vehicle door-to-door so you can fly down and have your car waiting when you arrive.' },
  { icon: Snowflake, title: 'Return Transport in Spring', text: 'When warm weather calls you back north, we handle the return trip with the same reliability. Book your return shipment at the same time as your outbound trip and lock in your rate.' },
  { icon: MapPin, title: 'True Door-to-Door Convenience', text: 'No driving to a terminal. We pick up from your winter home or primary residence and deliver directly to your destination — whether that is a condo, retirement community, or private address.' },
  { icon: Truck, title: 'Round-Trip Pricing & Priority Scheduling', text: 'Customers who book both legs of their seasonal move in advance receive preferred scheduling and reduced rates. We hold your spring return slot so you are never scrambling for a carrier.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Seasonal Car Relocation',
  description: 'Snowbird auto transport for seasonal movers. Ship your car to Florida, Arizona, or any seasonal destination.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'BMD Freight',
    url: 'https://bmdfreight.com',
    telephone: '+1-872-204-2373',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Seasonal Car Relocation',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function SeasonalRelocationPage() {
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
                Seasonal Car Relocation — Ship Your Car, Fly in Comfort
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Skip the long drive. BMD Freight ships your vehicle to your seasonal destination so you arrive relaxed and your car is already there waiting. Get a free quote today.
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
            Everything You Need for a Stress-Free Seasonal Move
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            From southbound fall trips to spring returns up north, BMD Freight handles both legs of your seasonal relocation with the same reliability every time.
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
            Who Uses Seasonal Car Relocation?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Seasonal car relocation is most popular among retirees and snowbirds who spend winters in Florida, Arizona, Texas, or the Carolinas and summers in the Northeast, Midwest, or Pacific Northwest. Instead of making a long, tiring drive twice a year, they fly and have their vehicle shipped ahead or delivered upon arrival.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            It is also a smart solution for families with vacation properties, college students returning home for the summer, and anyone whose lifestyle puts them in two different places throughout the year. If you depend on your car at both locations, shipping it is far more practical than renting one end or making the drive yourself.
          </p>
          <p className="text-slate-600 leading-relaxed">
            BMD Freight has been handling seasonal routes for years. We know the corridors, the peak booking windows, and the timing that works best for our seasonal customers. Book your fall southbound trip and spring return together and we will hold both dates, lock in your rate, and make sure your vehicle is exactly where you need it — every single year.
          </p>
        </div>
      </section>
    </>
  );
}
