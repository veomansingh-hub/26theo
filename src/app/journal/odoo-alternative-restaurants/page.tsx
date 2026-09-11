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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Odoo Website Alternative for Restaurants',
    description: 'Comparing Odoo website builder with custom bespoke web design for restaurants. How to choose the right digital architecture for hospitality.',
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
            Odoo Website Alternative for Restaurants
          </h1>
          <p className="text-lg md:text-xl text-charcoal font-sans max-w-2xl leading-relaxed mb-12">
            Odoo offers a powerful all-in-one ERP, but is its integrated website builder the right choice for a premium restaurant?
          </p>
          <div className="prose prose-lg text-charcoal max-w-none">
             <p><strong>Note:</strong> TheoMedia is an independent studio. We do not replace Odoo&apos;s backend ERP (accounting, HR, inventory). We provide a premium alternative for the public-facing website and guest experience.</p>
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">The All-in-One Approach</h2>
            <p>Odoo is a phenomenal tool for back-of-house operations. Connecting inventory, POS, and HR into one system is highly efficient. Naturally, many restaurants consider using Odoo&apos;s built-in website builder because it links directly to these backend systems.</p>
            
            <h2 className="text-2xl font-display uppercase mt-12 mb-6">The Bespoke Public Experience</h2>
            <p>However, an all-in-one ERP website builder rarely delivers the premium, highly-branded editorial experience required for high-end hospitality. Restaurants often find themselves compromising on brand identity, mobile performance, and guest journey flexibility to fit within the ERP&apos;s frontend constraints.</p>
            <p>At TheoMedia, we advocate for a best-in-class architecture: use robust systems like Odoo or specialised POS for operations, but engineer a <strong>custom front-end website</strong> to handle the brand experience. We can integrate custom enquiry forms, reservations, and menus via APIs while ensuring the diner&apos;s first impression is flawless, cinematic, and distinct.</p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
