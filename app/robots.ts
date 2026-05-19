import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/img/homepage/'],
    },
    sitemap: 'https://bmdfreight.com/sitemap.xml',
    host: 'https://bmdfreight.com',
  };
}
