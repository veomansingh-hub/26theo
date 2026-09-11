import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Restaurant Website Design UK | Bespoke Hospitality Web Design | TheoMedia',
  description: 'Custom restaurant website design for the UK and Ireland. We engineer bespoke booking experiences, digital menus, and hospitality web applications.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/industries/restaurants',
  }
};

export default function RestaurantIndustryPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="text-[10px] md:text-xs tracking-[0.3em] text-near-black/50 uppercase font-medium mb-6">
            HOSPITALITY & DINING
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Restaurant Website Design
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Turn visitors into diners. We build bespoke restaurant websites focused on frictionless reservations, private dining enquiries, and immersive digital menus.
          </p>
          <div className="prose prose-lg text-charcoal max-w-none">
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">Beyond the Basic Template</h2>
            <p>Restaurants often rely on slow, generic templates that fail to capture the atmosphere of the dining room. We engineer bespoke websites that load instantly on mobile, integrate flawlessly with OpenTable, SevenRooms, or Resy, and present your menus with editorial clarity.</p>
            
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">Direct Enquiries & Private Dining</h2>
            <p>High-value bookings require a premium digital journey. We build custom enquiry flows for private dining, events, and group bookings, routing leads directly into your operational workflow.</p>
            
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">Related Reading</h2>
            <ul>
              <li><a href="/journal/squarespace-vs-custom-restaurants" className="underline hover:text-stone">Squarespace vs Custom Website for Restaurants</a></li>
              <li><a href="/journal/odoo-alternative-restaurants" className="underline hover:text-stone">Odoo Alternative for Restaurants</a></li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
