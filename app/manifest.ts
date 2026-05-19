import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BMD Freight - Auto Transport Service Provider',
    short_name: 'BMD Freight',
    description: 'Ship your car anywhere in the USA with BMD Freight. Get an instant locked-in quote, door-to-door pickup & delivery, and fully insured transport.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#ffac33',
    icons: [
      {
        src: '/fav/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/fav/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
