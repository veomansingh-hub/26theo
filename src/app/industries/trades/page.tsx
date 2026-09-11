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
