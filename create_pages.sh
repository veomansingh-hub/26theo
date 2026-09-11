#!/bin/bash
mkdir -p src/app/web-design-ireland
cat << 'PAGE' > src/app/web-design-ireland/page.tsx
import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Web Design Ireland | Bespoke Websites & Digital Products | TheoMedia',
  description: 'TheoMedia provides custom web design and digital product engineering for ambitious businesses across Ireland. Stand out with a premium bespoke website.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/web-design-ireland',
  }
};

export default function WebDesignIrelandPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="text-[10px] md:text-xs tracking-[0.3em] text-near-black/50 uppercase font-medium mb-6">
            IRELAND
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Independent Web Design Studio <br/> for Ireland
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            We partner with ambitious Irish brands to engineer distinctive bespoke websites, custom ecommerce experiences, and digital products that drive commercial growth.
          </p>
          <div className="prose prose-lg text-charcoal max-w-none">
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">Bespoke Website Development</h2>
            <p>From our studio to businesses across Dublin and the Republic of Ireland, we deliver complete digital architectures. We do not use generic templates. Every website is custom-engineered to solve specific business problems, whether that involves complex booking journeys, luxury ecommerce, or bespoke web applications.</p>
            
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">Commercial Architecture</h2>
            <p>A beautiful website is only the beginning. Our engineering focuses on three fundamentals: getting found, getting customers, and running better. We integrate deeply with platforms like Stripe, OpenTable, and custom APIs to ensure your digital presence is a true business asset.</p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
PAGE

mkdir -p src/app/industries/restaurants
cat << 'PAGE' > src/app/industries/restaurants/page.tsx
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
PAGE

mkdir -p src/app/journal/squarespace-vs-custom-restaurants
cat << 'PAGE' > src/app/journal/squarespace-vs-custom-restaurants/page.tsx
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
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
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
              <li><strong>Ownership:</strong> You own the code. You are not locked into a proprietary platform's ecosystem or rising subscription fees.</li>
            </ul>
            <p>If your restaurant is an established brand or an ambitious new opening where the digital experience must match the quality of the food, <a href="/industries/restaurants" className="underline">bespoke restaurant web design</a> is the commercial standard.</p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
PAGE

mkdir -p src/app/journal/odoo-alternative-restaurants
cat << 'PAGE' > src/app/journal/odoo-alternative-restaurants/page.tsx
import { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Odoo Alternative for Restaurants | Custom Website vs Odoo | TheoMedia',
  description: 'Comparing Odoo website builder with custom bespoke web design for restaurants. How to choose the right digital architecture for hospitality.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/journal/odoo-alternative-restaurants',
  }
};

export default function OdooAlternativeRestaurantsPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="text-[10px] md:text-xs tracking-[0.3em] text-near-black/50 uppercase font-medium mb-6">
            JOURNAL · COMPARISON
          </div>
          <h1 className="text-4xl md:text-6xl font-display text-near-black mb-8 uppercase leading-tight">
            Odoo Website Alternative for Restaurants
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Odoo offers a powerful all-in-one ERP, but is its integrated website builder the right choice for a premium restaurant?
          </p>
          <div className="prose prose-lg text-charcoal max-w-none">
             <p><strong>Note:</strong> TheoMedia is an independent studio. We do not replace Odoo's backend ERP (accounting, HR, inventory). We provide a premium alternative for the public-facing website and guest experience.</p>
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">The All-in-One Approach</h2>
            <p>Odoo is a phenomenal tool for back-of-house operations. Connecting inventory, POS, and HR into one system is highly efficient. Naturally, many restaurants consider using Odoo's built-in website builder because it links directly to these backend systems.</p>
            
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">The Bespoke Public Experience</h2>
            <p>However, an all-in-one ERP website builder rarely delivers the premium, highly-branded editorial experience required for high-end hospitality. Restaurants often find themselves compromising on brand identity, mobile performance, and guest journey flexibility to fit within the ERP's frontend constraints.</p>
            <p>At TheoMedia, we advocate for a best-in-class architecture: use robust systems like Odoo or specialised POS for operations, but engineer a <strong>custom front-end website</strong> to handle the brand experience. We can integrate custom enquiry forms, reservations, and menus via APIs while ensuring the diner's first impression is flawless, cinematic, and distinct.</p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
PAGE

