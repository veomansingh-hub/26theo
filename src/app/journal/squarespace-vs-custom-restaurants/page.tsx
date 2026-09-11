import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Squarespace vs Custom Website for Restaurants | TheoMedia',
  description: 'An honest comparison of Squarespace and custom bespoke websites for restaurants in the UK. When to use a builder and when to hire a web designer.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom-restaurants',
  }
};

export default function SquarespaceVsCustomRestaurantsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Squarespace vs Custom Website for Restaurants',
    description: 'An honest comparison of Squarespace and custom bespoke websites for restaurants in the UK. When to use a builder and when to hire a web designer.',
    author: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk'
    },
    publisher: {
      '@type': 'Organization',
      name: 'TheoMedia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.theomedia.co.uk/apple-touch-icon.png'
      }
    }
  };

  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="text-[10px] md:text-xs tracking-[0.3em] text-near-black/50 uppercase font-medium mb-6">
            JOURNAL · COMPARISON
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Squarespace vs Custom Website for Restaurants
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Should you build your restaurant website on Squarespace or commission a bespoke digital experience? A transparent look at costs, control, and capabilities.
          </p>
          <div className="prose prose-lg text-charcoal max-w-none">
            <p><strong>Note:</strong> TheoMedia is an independent design studio and is not affiliated with Squarespace.</p>
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">When Squarespace is the Right Choice</h2>
            <p>If you are launching a pop-up, a food truck, or a very early-stage cafe with a minimal budget, Squarespace is an excellent tool. It allows you to launch quickly with a low upfront cost. The templates are clean, and for simple text menus and a basic contact form, it often does the job perfectly.</p>
            
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">The Case for Custom Engineering</h2>
            <p>As a restaurant grows, generic templates often become restrictive. A custom website engineered by a professional studio provides:</p>
            <ul>
              <li><strong>Absolute Design Freedom:</strong> Your website matches your physical dining room perfectly, without template constraints.</li>
              <li><strong>Performance & Speed:</strong> Custom websites are incredibly fast, critical for diners viewing menus on 4G connections.</li>
              <li><strong>Complex Integrations:</strong> Deep, seamless integration with reservation systems (SevenRooms, OpenTable), bespoke private dining enquiry forms, and custom analytics.</li>
              <li><strong>Ownership:</strong> You own the code. You are not locked into a proprietary platform&apos;s ecosystem or rising subscription fees.</li>
            </ul>
            <p>If your restaurant is an established brand or an ambitious new opening where the digital experience must match the quality of the food, <a href="/industries/restaurants" className="underline">bespoke restaurant web design</a> is the commercial standard.</p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
