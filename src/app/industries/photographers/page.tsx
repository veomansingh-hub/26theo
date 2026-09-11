import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Photographer Website Design UK | Creative Web Design | TheoMedia',
  description: 'Bespoke portfolio website design for photographers, directors, and creatives in the UK & Ireland.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/photographers',
  }
};

export default function PhotographerIndustryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Photographer Website Design',
    description: 'Bespoke portfolio website design for photographers, directors, and creatives in the UK & Ireland.',
    provider: {
      '@type': 'Organization',
      name: 'TheoMedia',
      url: 'https://www.theomedia.co.uk'
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Ireland' }
    ]
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
            CREATIVES & DIRECTORS
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Photographer Website Design
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Minimalist, typography-led digital portfolios that put your imagery first without compromising technical performance or mobile rendering.
          </p>
        </FadeIn>
      </div>
    </main>
  );
}
