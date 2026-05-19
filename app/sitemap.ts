import { MetadataRoute } from 'next';
import { statesData } from '@/lib/states-data';
import { getAllPosts } from '@/lib/blog-data';

const BASE_URL = 'https://bmdfreight.com';

const staticRoutes = [
  '',
  '/about-us',
  '/contact',
  '/faq',
  '/how-it-works',
  '/car-shipping-calculator',
  '/track-your-shipment',
  '/states',
  '/best-car-dealerships',
  '/door-to-door-shipping',
  '/open-auto-transport',
  '/enclosed-auto-transport',
  '/expedited-auto-shipping',
  '/classic-car-auto-shipping',
  '/seasonal-auto-relocation',
  '/privacy-policy',
  '/terms-and-conditions',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const stateEntries: MetadataRoute.Sitemap = Object.keys(statesData).map((slug) => ({
    url: `${BASE_URL}/states/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const blogPosts = getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...stateEntries, ...blogEntries];
}
