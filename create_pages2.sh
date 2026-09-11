#!/bin/bash
mkdir -p src/app/industries/hotels
cat << 'PAGE' > src/app/industries/hotels/page.tsx
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
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
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
PAGE

mkdir -p src/app/industries/photographers
cat << 'PAGE' > src/app/industries/photographers/page.tsx
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
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
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
PAGE

mkdir -p src/app/industries/trades
cat << 'PAGE' > src/app/industries/trades/page.tsx
import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Trades Website Design UK | Construction Web Design | TheoMedia',
  description: 'Custom website design for builders, roofers, and construction companies in the UK & Ireland. We build commercial assets that generate high-value enquiries.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/trades',
  }
};

export default function TradesIndustryPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="text-[10px] md:text-xs tracking-[0.3em] text-near-black/50 uppercase font-medium mb-6">
            CONSTRUCTION & TRADES
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Trades & Construction Website Design
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Establish authority and capture high-value commercial and residential enquiries with a professional, bespoke web presence.
          </p>
        </FadeIn>
      </div>
    </main>
  );
}
PAGE

mkdir -p src/app/industries/healthcare
cat << 'PAGE' > src/app/industries/healthcare/page.tsx
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
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
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
PAGE

mkdir -p src/app/journal/squarespace-vs-custom
cat << 'PAGE' > src/app/journal/squarespace-vs-custom/page.tsx
import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Squarespace vs Custom Website | Should I Hire a Web Designer? | TheoMedia',
  description: 'An independent comparison of DIY website builders like Squarespace vs commissioning a custom website from a professional web design studio.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/squarespace-vs-custom',
  }
};

export default function SquarespaceVsCustomPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="text-[10px] md:text-xs tracking-[0.3em] text-near-black/50 uppercase font-medium mb-6">
            JOURNAL · COMPARISON
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Squarespace vs Custom Website
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Comparing the speed and cost of DIY platforms against the technical ownership and bespoke design of custom engineering.
          </p>
        </FadeIn>
      </div>
    </main>
  );
}
PAGE

