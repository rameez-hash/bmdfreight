import { Metadata } from 'next';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { Truck, MapPin, Clock, Shield, ChevronRight, Car, Home, Calendar, BadgeCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Door-to-Door Car Shipping | BMD Freight',
  description: 'BMD Freight offers true door-to-door car shipping across all 50 states. We pick up from your address and deliver straight to your destination. Get a free quote today.',
};

const features = [
  { icon: Home, title: 'True Door-to-Door Service', text: 'Your assigned carrier drives to your exact pickup address and delivers to your destination — as close as physically and legally possible. No trips to a terminal, ever.' },
  { icon: Calendar, title: 'You Choose the Pickup Date', text: 'Pick the date that works for your schedule. Our team confirms availability and coordinates with your carrier so the handoff happens on your timeline, not ours.' },
  { icon: Shield, title: 'Insured from Pickup to Drop-Off', text: 'Every door-to-door shipment is covered by the carrier\'s cargo insurance throughout transit. A pre- and post-delivery inspection ensures full accountability.' },
  { icon: Car, title: 'Any Vehicle, Any Condition', text: 'We ship everyday sedans, pickup trucks, SUVs, minivans, and inoperable vehicles. If it has four wheels, we can move it — with the right equipment for the job.' },
];

export default function DoorToDoorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/state/door.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Door-to-Door Car Shipping — No Terminals, No Hassle
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                We come to you. Your car is picked up at your home, office, or any address you choose, and delivered directly to your destination door. Get your free quote now and book in minutes.
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
            Why Door-to-Door Is the Smartest Way to Ship Your Car
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Most people don\'t realize how much time and money they save by choosing direct pickup over terminal delivery. Here\'s what makes it the better option.
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
            What Happens After You Book
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Once you confirm your door-to-door shipment with BMD Freight, our dispatch team immediately begins matching your vehicle to a qualified carrier on your route. You\'ll receive a confirmation with your carrier\'s name, contact number, and a pickup window within 24–48 hours.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            On pickup day, your driver will call at least one hour before arrival. Together, you\'ll complete a detailed vehicle inspection — documenting mileage, fuel level, and any pre-existing marks — and both parties sign the Bill of Lading. Your car is then secured on the transport and on its way.
          </p>
          <p className="text-slate-600 leading-relaxed">
            At delivery, your driver will give you at least 24 hours notice before arriving. You inspect the vehicle against the original report, and if everything checks out, you complete your payment. It\'s that simple. No surprises, no games — just your car at your door, exactly as it left.
          </p>
        </div>
      </section>
    </>
  );
}
