'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { statesData, stateSlugs } from '@/lib/states-data';
import { Search, MapPin, ChevronRight, Star } from 'lucide-react';

export default function StatesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return stateSlugs;
    
    return stateSlugs.filter((slug) => {
      const state = statesData[slug as keyof typeof statesData];
      return (
        state.name.toLowerCase().includes(query) ||
        slug.toLowerCase().includes(query) ||
        state.majorCities.some(city => city.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Car Shipping in All 50 States
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              BMD Freight provides reliable auto transport services to and from every state in America. Find your state below.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search by state name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:bg-white/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
                >
                  ×
                </button>
              )}
            </div>

            {filteredStates.length > 0 && searchQuery && (
              <p className="text-slate-400 mt-3 text-sm">
                Found {filteredStates.length} state{filteredStates.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Bar */}
      <section className="py-8 bg-white border-b border-slate-100">
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

      {/* States Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {filteredStates.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No states found matching &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-accent hover:text-accent-hover font-medium"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStates.map((slug) => {
                const state = statesData[slug as keyof typeof statesData];
                return (
                  <Link
                    key={slug}
                    href={`/states/${slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={state.bannerImage}
                        alt={state.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-xl font-bold text-white">{state.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-600 text-sm line-clamp-2 mb-3">{state.description}</p>
                      <div className="flex items-center gap-1 text-accent text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>{state.majorCities.length} major cities</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-8">
            Popular State-to-State Routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { from: 'California', to: 'Texas' },
              { from: 'New York', to: 'Florida' },
              { from: 'Illinois', to: 'Arizona' },
              { from: 'Washington', to: 'California' },
              { from: 'Texas', to: 'Florida' },
              { from: 'Ohio', to: 'California' },
              { from: 'Georgia', to: 'New York' },
              { from: 'Virginia', to: 'California' },
            ].map((route, i) => (
              <Link
                key={i}
                href="/car-shipping-calculator"
                className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-accent hover:bg-accent/5 transition-colors"
              >
                <span className="text-slate-700 text-sm font-medium">{route.from} to {route.to}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Need to Ship Your Car?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get an instant quote for any state-to-state auto transport. Licensed, insured, and reliable service nationwide.
          </p>
          <Link
            href="/car-shipping-calculator"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Get Free Quote <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
