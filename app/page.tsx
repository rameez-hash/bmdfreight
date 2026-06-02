import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { Star, Shield, Truck, Clock, Phone, MapPin, ChevronRight, Quote, Car, Route, Package, BadgeCheck, HeadphonesIcon, Gauge, Wallet, CalendarCheck, ThumbsUp, Users, Sparkles, Zap, Award, Calculator, DollarSign, ClipboardCheck, MessageCircle, PhoneCall, Search, Eye, PhoneForwarded, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: "BMD Freight | #1 Trusted Car Shipping Company in America",
  description:
    "Ship your car anywhere in the USA with BMD Freight. Get an instant locked-in quote, door-to-door pickup & delivery, and fully insured transport. Book online in minutes.",
};

const solutions = [
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    text: 'Every carrier in our network is DOT-licensed and fully insured. Your vehicle is protected from the moment it leaves your driveway to the minute it arrives.',
  },
  {
    icon: Route,
    title: 'True Door-to-Door Delivery',
    text: 'No terminals, no detours. We pick up from your home, office, or dealership and deliver directly to your chosen destination anywhere in the USA.',
  },
  {
    icon: ThumbsUp,
    title: 'Trusted by 15,000+ Customers',
    text: 'Families, dealerships, military members, and businesses across America choose BMD Freight for fast, reliable, and damage-free vehicle transport.',
  },
];

const reasons = [
  { num: '1', title: 'Get a Free Instant Quote', text: 'Enter your pickup and delivery zip codes along with vehicle details. Our system gives you a real, locked-in price in under 60 seconds, no phone calls needed.', icon: Wallet },
  { num: '2', title: 'Confirm & Schedule Pickup', text: 'Choose your preferred pickup date and book online in minutes. Our dispatch team matches your vehicle with the right carrier and keeps you in the loop from day one.', icon: CalendarCheck },
  { num: '3', title: 'Safe Delivery at Your Door', text: 'Your vehicle is inspected before loading, tracked throughout transit, and delivered right to your address. You inspect it on arrival and pay only when satisfied.', icon: Sparkles },
];

const howSteps = [
  {
    step: '1',
    title: 'Request Your Free Quote Online',
    text: 'No brokers, no phone tag. Get a real, instant price for your car shipment in under a minute using our online calculator.',
    items: [
      { icon: Calculator, title: 'Instant Online Calculator', text: 'Enter your pickup zip, destination zip, and vehicle details. Our system generates a real-time quote with no hidden charges, no sign-up required.' },
      { icon: DollarSign, title: 'Your Price is Guaranteed', text: 'Once you receive your quote and confirm your booking, that price is locked in. We never add surprise fees or change your rate after booking.' },
      { icon: ClipboardCheck, title: 'Book in Minutes, Not Hours', text: 'Confirm your shipment online anytime, 24/7. Prefer to talk to someone? Our transport specialists are just a call away to walk you through the process.' },
    ],
    image: '/img/homev2/step-1.webp',
  },
  {
    step: '2',
    title: 'We Handle All the Logistics for You',
    text: 'Once your order is placed, our dispatch team takes over completely. We find the right carrier, confirm your pickup window, and keep you updated every step of the way.',
    items: [
      { icon: MessageCircle, title: 'Real-Time Status Updates', text: 'You\'ll receive regular updates by phone or email, including your carrier\'s name, contact number, expected pickup date, and estimated delivery window.' },
      { icon: PhoneCall, title: 'Driver Calls Before Arrival', text: 'Your assigned driver calls at least one hour before pickup so you know exactly when to expect them. No waiting around, no guessing.' },
      { icon: Search, title: 'Pre-Pickup Vehicle Inspection', text: 'Before loading your car, the driver completes a thorough Bill of Lading inspection, documenting every existing mark or scratch so your vehicle is fully protected.' },
    ],
    image: '/img/homev2/step-2.webp',
    reverse: true,
  },
  {
    step: '3',
    title: 'Delivered Safely Right to Your Door',
    text: 'Your vehicle is actively tracked throughout transit and delivered directly to your address. You inspect it on arrival and only pay when everything checks out.',
    items: [
      { icon: Eye, title: 'Live Tracking & Constant Visibility', text: 'Our team monitors every active shipment from origin to destination. You\'re never left wondering where your car is or when it will arrive.' },
      { icon: PhoneForwarded, title: '24-Hour Delivery Notice', text: 'Your carrier contacts you at least 24 hours before delivery to confirm timing and ensure you or your representative is available to receive the vehicle.' },
      { icon: CreditCard, title: 'Inspect First, Then Pay', text: 'Upon arrival, do a full walkaround with your driver against the original inspection report. If everything matches, you complete payment. If not, any issues are documented on the spot.' },
    ],
    image: '/img/homev2/step-3.webp',
  },
];

const reviews = [
  { title: "Flawless Transport, 5 Stars", text: "Shipped my Mustang from Texas to California and it arrived without a single scratch. The driver kept in touch throughout the whole trip. BMD Freight exceeded every expectation.", name: "Michael Thompson", source: "google" },
  { title: "Incredible Customer Service", text: "As a first-time car shipper, I had a million questions. Every single one was answered quickly and honestly. Shipped from New York to Florida — total peace of mind.", name: "Jennifer Martinez", source: "google" },
  { title: "2 Days Early, Zero Damage", text: "I was skeptical about shipping my car cross-country but BMD Freight proved me wrong. Seattle to Miami in perfect condition and delivered ahead of schedule.", name: "David Anderson", source: "google" },
  { title: "Our Dealership's Go-To Shipper", text: "We've used BMD Freight over a dozen times for dealership inventory. Chicago to Phoenix, Houston to Denver — always professional, always on time. Highly recommended.", name: "Robert Johnson", source: "google" },
  { title: "Best Pricing, Best Service", text: "Got quotes from 4 companies. BMD Freight gave the best price AND the best experience. My BMW arrived from LA to Boston in 5 days, cleaner than I left it.", name: "Sarah Williams", source: "google" },
  { title: "Treated My Classic Car Like Gold", text: "I don't trust just anyone with my '69 Corvette. BMD Freight's enclosed transport team was professional, careful, and communicative. Detroit to Miami without a worry.", name: "James Wilson", source: "google" },
  { title: "Military Move Made Easy", text: "PCS from Fort Campbell to San Diego. BMD Freight worked around my schedule and gave a military discount. The whole process was smooth from start to finish.", name: "Sergeant Marcus Lee", source: "google" },
  { title: "Saved Me Time and Money", text: "Bought a car at auction in Atlanta and needed it in Seattle. BMD Freight had it picked up within 2 days and delivered in perfect condition. Simple, fast, affordable.", name: "Amanda Cruz", source: "google" },
];

const ways = [
  { icon: Zap, title: 'Instant Quote, Zero Waiting', text: 'Get a real locked-in price in under 60 seconds with our online calculator. No phone calls, no email chains — just a transparent quote you can book immediately.' },
  { icon: Shield, title: 'Vetted, Insured Carriers Only', text: 'We work exclusively with DOT-licensed, fully insured carriers. Every driver is background-checked and every vehicle is covered from pickup to delivery.' },
  { icon: HeadphonesIcon, title: 'Live Support From Real People', text: 'Our transport specialists are available 7 days a week to answer questions, give status updates, and handle any issues that arise. You always reach a real person, never a bot.' },
  { icon: Award, title: '5-Star Reputation Nationwide', text: 'Over 15,000 successful shipments and thousands of 5-star reviews from customers across America. Our on-time delivery rate speaks louder than any promise we could make.' },
  { icon: Truck, title: 'Open & Enclosed Options Available', text: 'Need affordable transport for an everyday car? Go open. Shipping a luxury, exotic, or classic vehicle? Go enclosed. We offer both with the same level of care and communication.' },
];

const faqs = [
  { q: 'How long does car shipping take with BMD Freight?', a: 'Transit times vary by distance. Short routes (under 500 miles) typically take 1–3 days. Mid-range routes take 3–5 days. Cross-country shipments average 7–10 days. Carrier pickup usually occurs within 1–5 business days of booking.' },
  { q: 'How much does it cost to ship a car?', a: 'Car shipping costs depend on your pickup and delivery locations, vehicle type, season, transport method (open vs. enclosed), and carrier availability. Enter your details into our instant quote tool to get an exact price — no phone call needed.' },
  { q: 'Is my vehicle insured during transport?', a: 'Yes. Every carrier in our network is required to maintain active cargo insurance. Your vehicle is covered throughout the entire transport from pickup to delivery. A Bill of Lading inspection is completed before loading and again at delivery to document condition.' },
  { q: 'What is the difference between open and enclosed transport?', a: 'Open transport uses an exposed multi-car trailer and is the most affordable option. Enclosed transport uses a fully enclosed trailer that protects your vehicle from weather, dust, and debris — ideal for luxury, classic, or high-value vehicles.' },
  { q: 'How do I prepare my car for shipping?', a: 'Wash your car and take photos before pickup. Remove all personal items from the interior. Leave roughly ¼ tank of fuel. Disable any alarms and note any existing damage. Make sure the car is operable (if applicable) and accessible for the driver.' },
  { q: 'Do I need to be present at pickup and delivery?', a: 'You or an authorized representative should be present at both pickup and delivery to sign the Bill of Lading and inspect the vehicle. If you cannot be there, let us know in advance and we can make alternate arrangements.' },
  { q: 'Can I ship personal belongings inside my car?', a: 'Most carriers allow up to 100 lbs of personal items in the trunk only. These items are not covered by the carrier\'s insurance, and excess weight may add to your shipping cost. Contact us if you have specific questions about items you want to include.' },
  { q: 'Does BMD Freight offer discounts?', a: 'Yes. We offer special pricing for active military members, veterans, students, multi-vehicle shipments, and repeat customers. Mention your eligibility when requesting a quote and we\'ll apply the appropriate discount.' },
  { q: 'What if my car is not running or inoperable?', a: 'We ship inoperable vehicles using specialized equipment including winches and flatbed carriers. There is typically a small additional fee for inoperable vehicles. Just indicate this when requesting your quote so we can arrange the right equipment.' },
  { q: 'How do I track my vehicle during transport?', a: 'Once your shipment is assigned to a carrier, you\'ll receive the driver\'s contact information and estimated delivery window. You can reach your driver directly or contact our customer support team at any time for real-time status updates.' },
  { q: 'When do I pay for car shipping?', a: 'BMD Freight typically requires a small deposit at booking to secure your carrier. The remaining balance is paid directly to the driver upon delivery after you inspect your vehicle and confirm its condition.' },
  { q: 'What happens if my car is damaged during transport?', a: 'If any new damage is discovered at delivery, it must be noted on the Bill of Lading in the presence of the driver. This documentation initiates a formal insurance claim. Do not sign a clean Bill of Lading if damage exists — this protects your right to file a claim.' },
];

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'BMD Freight',
      url: 'https://bmdfreight.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://bmdfreight.com/car-shipping-calculator',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'BMD Freight',
        image: 'https://bmdfreight.com/img/bmd.webp',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4444 Main St',
          addressLocality: 'Skokie',
          addressRegion: 'IL',
          postalCode: '60076',
          addressCountry: 'US',
        },
        telephone: '+1-872-204-2373',
        priceRange: '$$',
      },
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '15000',
    },
    ...reviews.slice(0, 3).map((review) => ({
      '@type': 'Review',
      itemReviewed: { '@type': 'LocalBusiness', name: 'BMD Freight' },
      author: { '@type': 'Person', name: review.name },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: review.text,
      name: review.title,
    })),
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* Hero */}
      <section
        className="relative min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/homev2/banner.webp)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Ship Your Car Anywhere in America — Fast, Safe & Insured
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                BMD Freight makes car shipping simple. Get a locked-in quote in seconds, schedule your pickup, and we&apos;ll handle everything else. Door-to-door delivery, fully insured carriers, and real-time updates until your vehicle arrives safely.
              </p>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffac33]/20 flex items-center justify-center">
                  <s.icon className="w-8 h-8 text-[#ffac33]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Reasons */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-12">
            Ship Your Car in 3 Easy Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r) => (
              <div key={r.num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffac33]/20 flex items-center justify-center">
                  <r.icon className="w-8 h-8 text-[#ffac33]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{r.title}</h3>
                <p className="text-slate-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Car Shipping Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-4">
            Exactly How We Ship Your Car — From Quote to Delivery
          </h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
            Every step is designed to keep you informed and in control. No guessing, no phone tag — just a smooth, transparent process from start to finish.
          </p>
          {howSteps.map((s) => (
            <div key={s.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 last:mb-0 ${s.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={s.reverse ? 'lg:order-2' : ''}>
                <div className="text-[#ffac33] font-bold text-sm uppercase tracking-wider mb-3">Step {s.step}</div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 leading-tight">{s.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{s.text}</p>
                <div className="space-y-5">
                  {s.items.map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#ffac33]/15 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#ffac33]" strokeWidth={2} />
                      </div>
                      <div className="pt-0.5">
                        <h4 className="font-bold text-slate-800 mb-1 text-sm">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={s.reverse ? 'lg:order-1' : ''}>
                <Image src={s.image} alt={`Step ${s.step}`} width={600} height={450} className="w-full h-auto rounded-2xl shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews - Full Width Sliding */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800">
            What Real Customers Say About BMD Freight
          </h2>
        </div>
        
        {/* Row 1 - Slides Left */}
        <div className="relative mb-6">
          <div className="flex animate-marquee-left">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={`row1-${i}`} className="flex-shrink-0 w-[300px] md:w-[350px] mx-3">
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Quote className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">{r.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{r.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Rated: 5.0</p>
                      <p className="text-sm font-medium text-slate-700">{r.name}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Slides Right */}
        <div className="relative">
          <div className="flex animate-marquee-right">
            {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((r, i) => (
              <div key={`row2-${i}`} className="flex-shrink-0 w-[300px] md:w-[350px] mx-3">
                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Quote className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">{r.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{r.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Rated: 5.0</p>
                      <p className="text-sm font-medium text-slate-700">{r.name}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Ways */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-navy rounded-2xl p-8 lg:p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">5 Reasons Customers Choose BMD Freight Over the Competition</h2>
              <p className="text-slate-300 leading-relaxed">
                Over 15,000 vehicles shipped. A 4.9-star average rating. Customers from every state who come back year after year. Here is exactly what sets us apart.
              </p>
            </div>
            {ways.map((w) => (
              <div key={w.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <w.icon className="w-10 h-10 text-[#ffac33]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{w.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Text Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                A Locked-In Quote in Under 60 Seconds — No Phone Call Required
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Other companies give you a ballpark and then call you back three times. BMD Freight gives you a real, guaranteed price the moment you enter your details. No sign-up. No hidden fees added later. The price you see is the price you pay.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you are shipping across one state or coast to coast, every quote includes door-to-door pickup and delivery, full carrier insurance, and dedicated support from booking to drop-off.
              </p>
            </div>
            <Image src="/img/homev2/cars/1.webp" alt="BMD Freight car shipping truck on highway" width={600} height={400} className="w-full h-auto rounded-2xl shadow-xl border border-slate-100" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Image src="/img/homev2/cars/2.webp" alt="Enclosed car transport trailer with luxury vehicles" width={600} height={400} className="w-full h-auto rounded-2xl shadow-xl border border-slate-100 lg:order-1" />
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Open, Enclosed, or Expedited — We Have the Right Option for You
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Not every vehicle needs the same service. Our calculator gives you instant quotes for open transport, enclosed carriers, and expedited shipping. Prices factor in your vehicle size, shipping distance, carrier availability, season, and route demand. You always see the real cost upfront — then choose what works best for your car and your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Calc */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              What Determines the Cost of Shipping Your Car?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Four key factors drive every quote. Understanding them helps you choose the right service and get the best possible rate.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { num: '01', icon: Car, title: 'Vehicle Size, Type & Weight', desc: 'Larger and heavier vehicles like trucks and SUVs require more space and fuel, which increases shipping cost.' },
              { num: '02', icon: MapPin, title: 'Distance & Route', desc: 'Longer distances cost more overall, but the per-mile rate often decreases. Rural or remote routes may add extra fees.' },
              { num: '03', icon: Truck, title: 'Open vs. Enclosed Carrier', desc: 'Open transport is the most affordable option. Enclosed trailers provide maximum protection at a premium price.' },
              { num: '04', icon: Gauge, title: 'Vehicle Condition', desc: 'Operable vehicles roll on and off easily. Inoperable cars need special equipment like winches, adding to the cost.' },
            ].map((f, i) => (
              <div key={i} className="flex gap-6 items-start mb-10 last:mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center self-stretch pt-1">
                  <div className="w-12 h-12 rounded-full bg-[#ffac33] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#ffac33]/20">
                    <span className="text-slate-900 font-extrabold text-lg">{f.num}</span>
                  </div>
                  {i < 3 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#ffac33]/60 to-transparent mt-3" />
                  )}
                </div>
                {/* Card */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <f.icon className="w-6 h-6 text-[#ffac33]" strokeWidth={2} />
                    <h3 className="font-bold text-white text-lg">{f.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-[#ffac33] hover:bg-[#e6952e] text-slate-900 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              View All FAQs <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Slider */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <Image src="/img/homev2/why/1.webp" alt="Licensed and insured car carriers loading vehicles" width={600} height={400} className="w-full h-auto rounded-2xl shadow-xl border border-white/10" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Every Carrier Is DOT-Licensed, Background-Checked & Fully Insured</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We do not hand your car to just anyone. Every carrier in our network passes a rigorous vetting process — DOT licensing, active cargo insurance verification, and a track record of on-time, damage-free deliveries.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Families, military members, dealerships, and businesses across all 50 states trust BMD Freight because we take the responsibility seriously. Your car is not cargo to us — it is someone&apos;s daily driver, prized possession, or business asset.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <Image src="/img/homev2/why/2.webp" alt="Enclosed car carrier protecting luxury vehicles" width={600} height={400} className="w-full h-auto rounded-2xl shadow-xl border border-white/10" />
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Enclosed Transport for Vehicles That Cannot Afford Any Risk</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Fully enclosed trailers. Hydraulic lift gates. Soft tie-downs. Zero exposure to weather or road debris. If you are shipping a luxury car, classic, exotic, or any vehicle where condition is everything — enclosed transport is the only answer.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our enclosed carriers are operated by drivers with proven experience handling high-value vehicles. Every shipment includes a detailed pre- and post-delivery inspection, full cargo insurance, and direct driver communication throughout transit.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Image src="/img/homev2/why/3.webp" alt="Car dealership inventory transport and logistics" width={600} height={400} className="w-full h-auto rounded-2xl shadow-xl border border-white/10" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Dealership Transport That Moves as Fast as Your Business Does</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Inventory sitting on a hauler is inventory not on your lot. BMD Freight offers dedicated dealership transport with priority dispatch, volume pricing, auction pickup, and a dedicated account manager who knows your operation.
              </p>
              <p className="text-slate-300 leading-relaxed">
                From single auction wins to multi-vehicle fleet transfers, we handle the logistics end-to-end. Independent dealers, franchise groups, and auction services across the country rely on us to keep their pipelines moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Real answers to the questions customers ask before they book. No fluff, no runaround.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl border border-slate-100">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-slate-800">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-accent transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Get Your Car Moving Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Instant locked-in quote. Door-to-door delivery. Fully insured carriers. Book online in minutes — no phone call required.
          </p>
          <Link
            href="/car-shipping-calculator"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
          >
            Get Free Quote <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
