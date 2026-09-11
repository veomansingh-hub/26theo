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
