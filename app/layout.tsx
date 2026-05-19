import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffac33',
};

export const metadata: Metadata = {
  title: {
    default: 'BMD Freight | #1 Trusted Car Shipping Company in America',
    template: '%s | BMD Freight',
  },
  description:
    'Ship your car anywhere in the USA with BMD Freight. Get an instant locked-in quote, door-to-door pickup & delivery, and fully insured transport. Book online in minutes.',
  keywords: [
    'car shipping',
    'auto transport',
    'vehicle shipping',
    'door to door car shipping',
    'open car transport',
    'enclosed car transport',
    'car shipping company',
    'ship a car',
    'vehicle transport',
    'car transport service',
    'nationwide car shipping',
    'auto transport company',
    'car hauling',
    'classic car shipping',
    'military car shipping',
    'dealership transport',
  ],
  metadataBase: new URL('https://bmdfreight.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BMD Freight',
    url: 'https://bmdfreight.com',
    title: 'BMD Freight | #1 Trusted Car Shipping Company in America',
    description: 'Ship your car anywhere in the USA with BMD Freight. Get an instant locked-in quote, door-to-door pickup & delivery, and fully insured transport.',
    images: [
      {
        url: 'https://bmdfreight.com/img/homev2/banner.webp',
        width: 1200,
        height: 630,
        alt: 'BMD Freight Car Shipping - Door-to-Door Auto Transport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMD Freight | #1 Trusted Car Shipping Company in America',
    description: 'Ship your car anywhere in the USA with BMD Freight. Get an instant locked-in quote, door-to-door pickup & delivery, and fully insured transport.',
    images: ['https://bmdfreight.com/img/homev2/banner.webp'],
  },
  icons: {
    icon: [
      { url: '/fav/favicon.ico', sizes: 'any' },
      { url: '/fav/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/fav/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/fav/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/fav/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BMD Freight',
  description: 'Nationwide auto transport and car shipping services. Door-to-door delivery, fully insured carriers, instant online quotes.',
  url: 'https://bmdfreight.com',
  telephone: '+1-872-204-2373',
  email: 'info@bmdfreight.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4444 Main St',
    addressLocality: 'Skokie',
    addressRegion: 'IL',
    postalCode: '60076',
    addressCountry: 'US',
  },
  image: 'https://bmdfreight.com/img/bmd.webp',
  logo: 'https://bmdfreight.com/img/logo.webp',
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  sameAs: [
    'https://www.facebook.com/people/BMD-Freight/61581013590213/',
    'https://www.instagram.com/bmdfreightofficial',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '15000',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
