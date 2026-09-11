import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.theomedia.co.uk';

  const publicRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/work', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/websites', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ecommerce', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/web-applications', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/business-software', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/web-design-ireland', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries/restaurants', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries/hotels', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/photographers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/trades', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/healthcare', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/journal/squarespace-vs-custom', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/journal/squarespace-vs-custom-restaurants', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/journal/odoo-alternative-restaurants', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/studio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
