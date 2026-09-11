import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Healthcare Clinic Website Design UK | Private Clinic Web Design | TheoMedia',
  description: 'Bespoke web design for private healthcare clinics, dentists, and aesthetics practices in the UK & Ireland. HIPAA/GDPR compliant booking architectures.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/healthcare',
  }
};

export default function HealthcareIndustryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Clinic Website Design',
    description: 'Bespoke web design for private healthcare clinics, dentists, and aesthetics practices in the UK & Ireland.',
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
            PRIVATE HEALTHCARE & CLINICS
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Healthcare Clinic Website Design
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Trust-first digital experiences for private clinics. We engineer secure consultation flows and authoritative clinical design.
          </p>
        </FadeIn>
      </div>
    </main>
  );
}
