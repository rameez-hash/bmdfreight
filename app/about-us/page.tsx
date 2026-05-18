import { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Clock, Users, Award, Phone, MapPin, Mail, Star, TrendingUp, Headphones, CheckCircle, Truck, Car, Route, BadgeCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About BMD Freight | America\'s Trusted Auto Transport Company',
  description: 'BMD Freight has shipped 15,000+ vehicles across all 50 states. Learn who we are, what we stand for, and why thousands of Americans trust us with their cars.',
};

const stats = [
  { num: '15,000+', label: 'Vehicles Shipped' },
  { num: '98.7%', label: 'On-Time Delivery Rate' },
  { num: '4.9/5', label: 'Average Customer Rating' },
  { num: 'All 50', label: 'States Covered' },
];

const whyItems = [
  { icon: Shield, title: 'DOT-Licensed & Fully Insured', text: 'Every carrier we work with is DOT-licensed, fully insured, and background-checked. Your vehicle isn\'t just shipped — it\'s protected at every stage of the journey.' },
  { icon: Clock, title: 'Consistent On-Time Delivery', text: 'We maintain a 98.7% on-time delivery rate by carefully matching your shipment to reliable, experienced carriers who know their routes and meet their windows.' },
  { icon: Users, title: 'People-First Customer Service', text: 'Every customer gets a dedicated point of contact. Whether you have a question before booking or need an update mid-transit, a real person is always available to help.' },
  { icon: Award, title: 'Thousands of 5-Star Reviews', text: 'Our reputation is built on results. Thousands of verified reviews from families, dealerships, military members, and businesses consistently rate us at 4.9 out of 5.' },
  { icon: TrendingUp, title: 'Upfront, Transparent Pricing', text: 'The price we quote is the price you pay. No fuel surcharges added at pickup. No rate changes after booking. No hidden fees. Ever.' },
  { icon: Headphones, title: 'Support 7 Days a Week', text: 'Our logistics and customer support team is available Monday through Sunday, early morning through late evening. You\'ll never be left without answers when you need them most.' },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative py-24 bg-navy">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/about-banner.webp')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About BMD Freight</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We&apos;ve shipped over 15,000 vehicles across all 50 states. Here&apos;s who we are and why customers keep coming back.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">{s.num}</div>
                <div className="text-slate-600 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-4">
            What Makes BMD Freight Different
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Thousands of companies will promise you reliability. Here is exactly how we back it up — six specific ways we earn and keep your trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6">
            Built on Reliability, Driven by Trust
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            BMD Freight was founded with one goal: make car shipping simple, honest, and stress-free. We saw an industry full of brokers who made big promises and disappeared after collecting a deposit. We decided to do it differently — with transparent pricing, real communication, and carriers we actually stand behind.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Today, we operate a nationwide network of fully vetted, DOT-licensed, and insured transport carriers. Whether you&apos;re shipping a daily driver from one state to the next or moving a rare classic across the country, our team manages every detail — from dispatch to delivery — so you never have to wonder what&apos;s happening with your car.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our customers include first-time shippers who&apos;ve never done this before, military families navigating a PCS move, dealerships shipping auction inventory, and collectors who need white-glove enclosed transport. No matter the situation, we show up prepared and we deliver on our word.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We don&apos;t measure success by the number of cars we ship. We measure it by the customers who come back, who refer their friends and family, and who trust us with their vehicles again and again. That repeat trust is what we work for every single day.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Ship? Talk to Our Team Today</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10">
            Call us, email us, or get an instant quote online. We are available 7 days a week and always happy to help you figure out the best option for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:872-204-2373" className="flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              <Phone className="w-6 h-6" /> (872) 204-2373
            </a>
            <a href="mailto:info@bmdfreight.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              <Mail className="w-6 h-6" /> info@bmdfreight.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
