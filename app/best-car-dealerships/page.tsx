import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Store, Truck, BarChart3, Users, ChevronRight, Zap, Building2, Car, BadgeCheck, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Dealership Transport Services | BMD Freight',
  description: 'BMD Freight moves dealership inventory fast and reliably. Bulk transport, auction pickups, dealer-to-dealer shipping, and dedicated account support across all 50 states.',
};

const features = [
  { icon: Truck, title: 'High-Volume Inventory Transport', text: 'Move one vehicle or an entire lot. BMD Freight handles bulk shipments between auction houses, storage facilities, dealer groups, and customer delivery addresses with consistent reliability.' },
  { icon: BarChart3, title: 'Streamlined Dealer Logistics', text: 'No more juggling multiple brokers or chasing carriers. We manage your transport pipeline end-to-end — scheduling, dispatch, carrier coordination, and delivery confirmation all in one place.' },
  { icon: Zap, title: 'Priority Auction Pickup', text: 'Won a vehicle at Manheim, ADESA, or another auction? We coordinate same-week pickup so your inventory reaches the lot quickly, before carrying costs add up.' },
  { icon: Users, title: 'Dedicated Account Manager', text: 'Every dealership partner gets a dedicated point of contact who knows your operation, your volume expectations, and your preferred carriers. No re-explaining your needs every time you call.' },
];

export default function DealershipsPage() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/state/door.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Dealership Vehicle Transport That Keeps Your Lot Moving
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Auction runs, lot transfers, dealer-to-dealer moves, and customer deliveries — BMD Freight handles your inventory logistics so you can focus on selling cars.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Get a Dealer Rate Quote</h3>
              <p className="text-slate-600 mb-6">
                Dealerships and high-volume shippers qualify for volume pricing and dedicated scheduling. Contact our dealer team for a custom logistics plan.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Our Dealer Team <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-4">
            Built for Dealerships That Move a Lot of Cars
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Whether you run one location or a multi-state dealer group, BMD Freight scales with your volume and delivers consistent results every time.
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
            Why Dealerships Choose BMD Freight
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Inventory that sits costs money. Every day a vehicle is not on your lot is a day it is not being sold. BMD Freight was built around speed and reliability — which is exactly what dealerships need from a transport partner. We pick up fast, communicate clearly, and deliver on schedule.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our dealer accounts benefit from priority carrier assignment, which means your vehicles are not waiting behind individual shipments in the queue. Whether you are running a single auction purchase or coordinating a fleet transfer across multiple states, our logistics team handles the complexity so your staff does not have to.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We work with independent dealers, franchise groups, auto auctions, and fleet companies across the country. If your business moves cars regularly, contact our dealer team today and let us build a transport program that fits your volume, routes, and budget.
          </p>
        </div>
      </section>
    </>
  );
}
