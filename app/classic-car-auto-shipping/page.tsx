import { Metadata } from 'next';
import Image from 'next/image';
import QuoteForm from '@/components/QuoteForm';
import { Shield, Truck, Star, Award, Package, Car, BadgeCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Classic Car Shipping | Enclosed Transport for Vintage & Collector Vehicles | BMD Freight',
  description: 'BMD Freight specializes in classic, vintage, and collector car transport. Fully enclosed trailers, hydraulic lift gates, soft straps, and verified high-value insurance. Free quote.',
};

const features = [
  { icon: Package, title: 'Enclosed Transport as Standard', text: 'No exceptions. Every classic car shipment travels in a fully enclosed trailer — protected from rain, road grit, UV damage, and anything else the journey throws at it.' },
  { icon: Car, title: 'Hydraulic Lift Gates Only', text: 'Your classic never rolls up a steep ramp. Hydraulic lift gates raise and lower your vehicle smoothly, eliminating the risk of scraping a low-clearance chassis or custom bodywork.' },
  { icon: Sparkles, title: 'Carriers with Proven Classic Car Experience', text: 'We only assign shipments to drivers with a verified track record handling collector, antique, and rare vehicles. Your car is not a test run for anyone.' },
  { icon: BadgeCheck, title: 'Insurance Matched to Your Car\'s Value', text: 'Standard cargo insurance isn\'t always enough for a classic. We verify that the carrier holds adequate coverage for your vehicle\'s agreed or appraised value before dispatch.' },
];

export default function ClassicCarShippingPage() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/state/door.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Classic &amp; Vintage Car Shipping — Handled With the Care It Deserves
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Your classic isn\'t just a car. It\'s decades of history, craftsmanship, and personal value. We transport it with enclosed carriers, expert drivers, and verified insurance. Get your free quote today.
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
            Everything Your Classic Car Needs in Transit
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Classic vehicles require a completely different level of care than everyday transport. Here\'s exactly what BMD Freight provides on every classic car shipment.
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
            Why Classic Cars Need Specialized Transport
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            A 1969 Camaro Z/28 with original paint. A 1955 Mercedes 300SL Gullwing. A numbers-matching 1970 Plymouth Hemi 'Cuda. These aren\'t just cars — they\'re irreplaceable pieces of history that carry financial and emotional value no standard transport process can adequately protect.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Classic vehicles have vulnerabilities that modern cars simply don\'t. Original lacquer finishes chip differently. Chrome trim scratches at the slightest contact. Low ride heights mean standard loading ramps are a serious risk. And mechanical systems that haven\'t been driven in months can react poorly to improper tie-down pressure. Every one of these details matters to us.
          </p>
          <p className="text-slate-600 leading-relaxed">
            BMD Freight handles classic car shipments exclusively with enclosed carriers, soft strap systems, hydraulic lift loading, and experienced drivers who have moved collector vehicles before. We also verify insurance coverage against your car\'s actual or appraised value — not just a standard cargo minimum. Your classic deserves the right hands. We\'re them.
          </p>
        </div>
      </section>
    </>
  );
}
