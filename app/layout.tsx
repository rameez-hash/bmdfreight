import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BMD Freight | Auto Transport Service Provider You Can Trust',
    template: '%s | BMD Freight',
  },
  description:
    'Need to ship a car? BMD Freight makes it simple with instant quotes, transparent pricing, and licensed, insured carriers.',
  keywords: [
    'car shipping',
    'auto transport',
    'vehicle shipping',
    'door to door car shipping',
    'open car transport',
    'enclosed car transport',
  ],
  metadataBase: new URL('https://bmdfreight.com'),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className="antialiased">
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
