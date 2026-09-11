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
