'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  Phone,
  MapPin,
  Users,
  Truck,
  Shield,
  Clock,
  HelpCircle,
  Mail,
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [serveOpen, setServeOpen] = useState(false);

  const transportLinks = [
    { href: '/door-to-door-shipping', label: 'Door-to-door Car Shipping' },
    { href: '/open-auto-transport', label: 'Open Car Hauler' },
    { href: '/enclosed-auto-transport', label: 'Enclosed Car Hauler' },
    { href: '/expedited-auto-shipping', label: 'Expedited Car Shipping' },
    { href: '/classic-car-auto-shipping', label: 'Classic Car Shipping' },
  ];

  const serveLinks = [
    { href: '/seasonal-auto-relocation', label: 'Car Relocation Services' },
    { href: '/best-car-dealerships', label: 'Car Dealerships' },
  ];

  return (
    <>
      {/* Mobile Nav */}
      <nav className="lg:hidden bg-navy text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logo.webp"
                alt="BMD Freight logo"
                width={180}
                height={55}
                className="h-16 w-auto"
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/car-shipping-calculator"
                className="flex flex-col items-center text-xs bg-accent hover:bg-accent-hover rounded-lg px-3 py-2 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                <span>Cost</span>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="bg-navy-light border-t border-slate-700">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link
                href="/track-your-shipment"
                className="block py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <MapPin className="w-5 h-5 inline mr-2" />
                Track Your Shipment
              </Link>

              <div>
                <button
                  onClick={() => setTransportOpen(!transportOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                >
                  <span><Truck className="w-5 h-5 inline mr-2" />Transport Options</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${transportOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {transportOpen && (
                  <div className="ml-4 space-y-1">
                    {transportLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors text-slate-300"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setServeOpen(!serveOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                >
                  <span><Users className="w-5 h-5 inline mr-2" />Who We Serve</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${serveOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {serveOpen && (
                  <div className="ml-4 space-y-1">
                    {serveLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors text-slate-300"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/states"
                className="block py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <MapPin className="w-5 h-5 inline mr-2" />
                States
              </Link>

              <Link
                href="/about-us"
                className="block py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <Shield className="w-5 h-5 inline mr-2" />
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="block py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <Clock className="w-5 h-5 inline mr-2" />
                How it works
              </Link>
              <Link
                href="/faq"
                className="block py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <HelpCircle className="w-5 h-5 inline mr-2" />
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden lg:block bg-navy text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Left nav items */}
            <div className="flex items-center gap-1">
              <Link
                href="/track-your-shipment"
                className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm"
              >
                Track Your Shipment
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm">
                  Transport Options
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {transportLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm">
                  Who We Serve
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {serveLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Center logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image
                src="/img/bmd.webp"
                alt="BMD Freight"
                width={200}
                height={70}
                className="h-[72px] w-auto"
                priority
              />
            </Link>

            {/* Right nav items */}
            <div className="flex items-center gap-1">
              <Link
                href="/states"
                className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm"
              >
                States
              </Link>
              <Link
                href="/about-us"
                className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/car-shipping-calculator"
                className="flex items-center gap-2 ml-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-md"
              >
                <span>Cost Calculator</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
