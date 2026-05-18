import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { statesData } from '@/lib/states-data';
import { MapPin, Route, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return Object.keys(statesData).map((slug) => ({ state: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const info = statesData[state];
  if (!info) return { title: 'State Not Found' };
  return {
    title: `${info.name} Car Shipping`,
    description: info.description,
  };
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params;
  const info = statesData[state];
  if (!info) return notFound();

  return (
    <>
      <section className="relative min-h-[500px] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${info.bannerImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                {info.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                {info.description}
              </p>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-600 font-medium">4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-600 font-medium">A+ BBB Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-600 font-medium">Excellent Trustpilot</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-accent" />
                Major Cities We Serve
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {info.majorCities.map((city) => (
                  <div key={city} className="bg-slate-50 rounded-lg px-4 py-3 text-slate-700 font-medium border border-slate-100">
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Route className="w-6 h-6 text-accent" />
                Popular Routes
              </h2>
              <div className="space-y-3">
                {info.popularRoutes.map((route, i) => (
                  <div key={i} className="bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700 font-medium">{route.from}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700 font-medium">{route.to}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Compact */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-12">
            How BMD Freight&apos;s {info.name} Auto Transport Services Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <Image src={info.step1.image} alt="Step 1" fill className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mb-3">1</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{info.step1.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{info.step1.text}</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <Image src={info.step2.image} alt="Step 2" fill className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mb-3">2</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{info.step2.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{info.step2.text}</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <Image src={info.step3.image} alt="Step 3" fill className="object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mb-3">3</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{info.step3.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{info.step3.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-4">
            Ready to Ship Your Car To or From {info.name}?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Get your free, instant quote in seconds. BMD Freight connects you with licensed, insured carriers for safe, reliable auto transport to and from {info.name}.
          </p>
          <Link href="/car-shipping-calculator" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
            Get Free Quote <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
