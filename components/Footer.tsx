import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Upper Footer */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="BMD Freight footer logo"
                width={260}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Image
                  src="/img/reviews/logos/google.svg"
                  alt="Google Reviews"
                  width={80}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Image
                  src="/img/reviews/logos/trustpilot.svg"
                  alt="Trustpilot"
                  width={100}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Image
                  src="/img/reviews/logos/bbb.svg"
                  alt="BBB"
                  width={40}
                  height={30}
                  className="h-6 w-auto"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581013590213"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bmdfreightofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-slate-300 hover:text-white transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">Who We Serve</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/best-car-dealerships" className="text-slate-300 hover:text-white transition-colors">
                  Best Car Dealerships
                </Link>
              </li>
              <li>
                <Link href="/seasonal-auto-relocation" className="text-slate-300 hover:text-white transition-colors">
                  Car Relocation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Transport Options */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">Transport Options</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/door-to-door-shipping" className="text-slate-300 hover:text-white transition-colors">
                  Door-to-door Car Shipping
                </Link>
              </li>
              <li>
                <Link href="/open-auto-transport" className="text-slate-300 hover:text-white transition-colors">
                  Open Car Hauler
                </Link>
              </li>
              <li>
                <Link href="/enclosed-auto-transport" className="text-slate-300 hover:text-white transition-colors">
                  Enclosed Car Hauler
                </Link>
              </li>
              <li>
                <Link href="/expedited-auto-shipping" className="text-slate-300 hover:text-white transition-colors">
                  Expedited Car Shipping
                </Link>
              </li>
              <li>
                <Link href="/classic-car-auto-shipping" className="text-slate-300 hover:text-white transition-colors">
                  Classic Car Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* BMD Freight Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">BMD Freight</h3>
            <div className="space-y-3 text-slate-300">
              <p>4444 Main St, Skokie IL 60076</p>
              <p>
                <a href="tel:872-204-2373" className="hover:text-white transition-colors">
                  (872) 204-2373
                </a>
              </p>
              <p>
                <a href="mailto:info@bmdfreight.com" className="hover:text-white transition-colors">
                  info@bmdfreight.com
                </a>
              </p>
            </div>
            <div className="mt-6">
              <Image
                src="/img/fmcsa-logo-f.webp"
                alt="FMCSA Logo"
                width={80}
                height={40}
                className="h-10 w-auto mb-3"
              />
              <p className="text-sm text-slate-400">
                Federal Motor Carrier Safety Administration MC #: 1762553
              </p>
              <p className="text-sm text-slate-400">U.S.DOT #: 4467164</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-slate-400 text-sm">
            BMD Freight 2026. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
