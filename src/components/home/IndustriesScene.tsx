'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { industries } from '@/data/industries';

export default function IndustriesScene() {
  return (
    <section className="charcoal-section bg-charcoal text-bone py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-16 md:mb-24">
          <div className="md:w-1/3">
            <FadeIn>
              <SectionLabel dark={true}>INDUSTRIES</SectionLabel>
            </FadeIn>
          </div>
          <div className="md:w-2/3">
            <FadeIn delay={0.1}>
              <h2 className="text-editorial-lg font-display text-bone">
                WE DON&apos;T DESIGN EVERY BUSINESS THE SAME WAY.
              </h2>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col border-t border-bone/10">
          {industries.map((industry, index) => {
            const content = (
              <div className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-bone/10 transition-colors duration-300 ${industry.slug ? 'cursor-pointer' : ''}`}>
                <span className="text-[20px] md:text-[24px] lg:text-[28px] font-display text-bone/70 group-hover:text-bone transition-colors duration-300 mb-4 md:mb-0 flex items-center gap-4">
                  {industry.name}
                  {industry.slug && (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                  )}
                </span>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {industry.priorities.map((priority, pIndex) => (
                    <span 
                      key={pIndex} 
                      className="text-[11px] tracking-wider uppercase text-bone/40 px-3 py-1 border border-bone/10 rounded-full"
                    >
                      {priority}
                    </span>
                  ))}
                </div>
              </div>
            );
            return (
              <FadeIn key={industry.name} delay={index * 0.05}>
                {industry.slug ? (
                  <a href={industry.slug} className="block w-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
