import { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'What We Engineer | TheoMedia',
  description: 'Bespoke digital architecture, direct booking systems, and commercial platforms built around three outcomes: Get found. Get customers. Run better.',
  alternates: {
    canonical: 'https://www.theomedia.co.uk/work',
  },
};

export default function WorkPage() {
  return (
    <main className="bg-bone min-h-screen pt-24 pb-32">
      {/* Hero Section */}
      <section className="bg-near-black py-24 md:py-32 mb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <FadeIn>
            <SectionLabel className="text-bone/50 mb-6 block" dark>Engineering & Capabilities</SectionLabel>
            <h1 className="text-editorial-xl text-bone mb-8 max-w-4xl uppercase">
              WHAT WE ENGINEER.
            </h1>
            <p className="text-[18px] md:text-[22px] text-bone/70 max-w-3xl font-sans leading-relaxed">
              Bespoke digital architecture, direct booking systems, and commercial platforms built around three core business fundamentals: <strong className="text-bone">Get found. Get customers. Run better.</strong>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Systems Architecture Showcase */}
      <section className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {projects.map((system, index) => (
            <FadeIn key={system.slug} delay={index * 0.08}>
              <div className="group flex flex-col h-full border border-near-black/10 p-6 md:p-10 bg-ivory hover:border-near-black/30 transition-colors duration-300 rounded-sm">
                
                {/* Header info */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-near-black/10">
                  <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-stone uppercase">
                    {system.sector}
                  </span>
                  <span className="text-[12px] font-sans font-medium text-near-black/40">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="font-display text-[30px] md:text-[38px] text-near-black mb-4 leading-tight">
                  {system.title}
                </h2>
                
                {/* Description */}
                <p className="font-sans text-[15px] md:text-[16px] text-stone mb-8 leading-relaxed">
                  {system.description}
                </p>

                {/* Key Features Checklist */}
                <div className="mb-8 p-5 bg-bone/60 rounded-sm border border-near-black/5">
                  <h3 className="text-[11px] font-sans font-bold uppercase tracking-wider text-near-black mb-3">
                    Engineered Capabilities:
                  </h3>
                  <ul className="space-y-2">
                    {system.features.slice(0, 4).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-[13px] font-sans text-charcoal">
                        <span className="text-near-black/60 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {system.tags?.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-sans px-3 py-1 border border-stone/20 bg-white text-stone uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Direct CTA */}
                <div className="mt-auto pt-6 border-t border-near-black/10 flex items-center justify-between">
                  <Link 
                    href="/contact"
                    className="text-[12px] font-sans font-semibold tracking-[0.15em] uppercase text-near-black hover:text-stone transition-colors inline-flex items-center gap-2 group"
                  >
                    DISCUSS THIS ARCHITECTURE
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  <span className="text-[11px] font-sans text-stone uppercase tracking-widest">
                    Fixed Quote
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Bottom Contact Banner */}
        <FadeIn className="border-t border-near-black/10 pt-16 mt-16 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-[32px] md:text-[40px] text-near-black mb-4">
            Need a bespoke technical build?
          </h2>
          <p className="font-sans text-stone text-[16px] mb-8 leading-relaxed">
            Every business has unique operational workflows. We design and engineer custom platforms tailored to your exact requirements with full source code ownership.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-near-black text-bone font-sans font-bold tracking-widest uppercase text-[12px] hover:bg-warm-accent transition-colors rounded-sm"
          >
            Start a Project Enquiry →
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
