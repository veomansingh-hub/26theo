import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

const pillars = [
  {
    num: '01',
    title: 'GET FOUND.',
    subtitle: 'Organic Discovery & Technical Authority',
    description: 'Sub-second Core Web Vitals, semantic schema architecture, and clean search foundations so your business surfaces first when high-intent customers search.',
    metrics: ['Sub-second page speeds', 'Structured local schema', 'Search indexing ready'],
  },
  {
    num: '02',
    title: 'GET CUSTOMERS.',
    subtitle: 'Brand Perception & Conversion Pathways',
    description: 'Bespoke editorial typography and tactile art direction paired with frictionless direct booking, reservation, or checkout flows that convert visitors into revenue.',
    metrics: ['Zero-commission booking', 'Frictionless checkout', 'High-trust conversion'],
  },
  {
    num: '03',
    title: 'RUN BETTER.',
    subtitle: 'Operational Flow & Workflow Automation',
    description: 'Automated quotation systems, direct PMS/POS integrations, and bespoke client portals engineered to eliminate manual spreadsheets and operational friction.',
    metrics: ['PMS / POS connectivity', 'Custom client portals', 'Automated quoting flows'],
  },
];

export default function ProofScene() {
  return (
    <section className="bg-bone text-near-black py-24 md:py-32 lg:py-40 px-5 md:px-8 lg:px-12 border-b border-near-black/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          
          <FadeIn>
            <SectionLabel>COMMERCIAL ARCHITECTURE</SectionLabel>
            <h2 className="text-editorial-lg text-near-black mt-6 max-w-3xl font-display">
              BUILT FOR BUSINESS OUTCOMES, NOT JUST APPEARANCES.
            </h2>
            <p className="font-sans text-[17px] md:text-[19px] text-stone mt-6 max-w-2xl leading-relaxed">
              TheoMedia is not merely selling attractive pages. We engineer digital platforms around three commercial fundamentals:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.num} delay={index * 0.1} className="h-full">
                <div className="flex flex-col h-full bg-ivory p-8 md:p-10 border border-near-black/10 rounded-sm hover:border-near-black/30 transition-colors duration-300">
                  <span className="text-[32px] md:text-[40px] font-display text-near-black/20 mb-6 block">
                    {pillar.num}
                  </span>
                  
                  <h3 className="font-display text-[32px] md:text-[38px] text-near-black mb-2 leading-none">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-[12px] font-sans font-bold uppercase tracking-widest text-stone mb-6">
                    {pillar.subtitle}
                  </p>
                  
                  <p className="font-sans text-[15px] text-stone leading-relaxed mb-8 flex-grow">
                    {pillar.description}
                  </p>

                  <div className="pt-6 border-t border-near-black/10 flex flex-col gap-2.5">
                    {pillar.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2.5 text-[12px] font-sans text-charcoal">
                        <span className="text-stone">✦</span>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-near-black/10">
            <p className="text-[13px] font-sans text-stone uppercase tracking-wider text-center sm:text-left">
              Founder-led execution · 100% client-owned code · Fixed transparent pricing
            </p>
            <Link 
              href="/work"
              className="text-[12px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black border-b border-near-black/30 pb-1 hover:border-near-black transition-colors inline-flex items-center gap-2 group"
            >
              EXPLORE ALL CAPABILITIES
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
