import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Hotel Website Design UK | Hospitality Web Design | TheoMedia',
  description: 'Premium bespoke hotel website design for the UK & Ireland. We build immersive hospitality experiences that drive direct room bookings.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/hotels',
  }
};

export default function HotelIndustryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hotel Website Design',
    description: 'Premium bespoke hotel website design for the UK & Ireland. We build immersive hospitality experiences that drive direct room bookings.',
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
            HOSPITALITY & HOTELS
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Hotel Website Design
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Increase direct bookings and lower OTA commissions with a premium, high-converting bespoke hotel website.
          </p>
          <div className="prose prose-lg text-charcoal max-w-none">
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">Visual Storytelling</h2>
            <p>A hotel website must convey the atmosphere before a guest ever arrives. We engineer cinematic, performance-optimized websites that showcase rooms, dining, and facilities using high-resolution assets without compromising load speed.</p>
            
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">Direct Booking Architecture</h2>
            <p>Every element is designed to drive direct conversion. We seamlessly integrate with your property management system (PMS) or booking engine, ensuring the user journey from discovery to checkout is frictionless.</p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
