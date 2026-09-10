'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';
import { projects } from '@/data/projects';

export default function WorkScene() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="bg-charcoal text-bone py-24 md:py-32 lg:py-40 px-5 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-12 lg:gap-20">
          <FadeIn>
            <SectionLabel className="text-bone/50 block" dark>ENGINEERING CAPABILITIES</SectionLabel>
            <h2 className="text-editorial-lg text-bone mt-6 font-display">
              DIGITAL SYSTEMS WE BUILD.
            </h2>
          </FadeIn>

          <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-20 relative">
            {/* List Column */}
            <div className="col-span-5 flex flex-col border-t border-bone/10">
              {projects.slice(0, 6).map((system, index) => (
                <div 
                  key={system.slug}
                  className={`py-7 border-b border-bone/10 cursor-pointer transition-colors duration-300 flex items-center gap-6 group ${activeProject === index ? 'text-bone' : 'text-bone/40'}`}
                  onMouseEnter={() => setActiveProject(index)}
                >
                  <span className="text-xs tracking-widest font-sans w-8">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex-grow">
                    <h3 className="font-display text-3xl group-hover:text-bone transition-colors duration-300">
                      {system.title}
                    </h3>
                  </div>
                  <span className="text-[10px] tracking-widest font-sans uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-bone/60">
                    {system.sector}
                  </span>
                </div>
              ))}
            </div>

            {/* Preview Column */}
            <div className="col-span-7 sticky top-32 min-h-[540px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full bg-near-black p-8 lg:p-12 border border-bone/10 rounded-sm shadow-2xl"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6 pb-6 border-b border-bone/10">
                      <div>
                        <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-bone/50 block mb-2">
                          {projects[activeProject].sector}
                        </span>
                        <h4 className="font-display text-4xl text-bone">
                          {projects[activeProject].title}
                        </h4>
                      </div>
                      <span className="text-xs font-sans text-bone/40 tracking-widest">
                        SPEC 0{activeProject + 1}
                      </span>
                    </div>

                    <p className="font-sans text-bone/80 text-[16px] leading-relaxed mb-8">
                      {projects[activeProject].description}
                    </p>

                    <div className="mb-8 p-6 bg-charcoal/50 border border-bone/10 rounded-sm">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-bone/60 block mb-3">
                        Engineered Capabilities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {projects[activeProject].features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-[13px] font-sans text-bone/70">
                            <span className="text-bone/40">✓</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[activeProject].tags.map(tag => (
                        <span key={tag} className="text-[10px] tracking-wider uppercase border border-bone/10 px-3 py-1 text-bone/50 bg-charcoal/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-bone/10 flex items-center justify-between">
                    <Link 
                      href="/contact"
                      className="text-[12px] tracking-widest font-sans font-semibold uppercase border-b border-bone/30 pb-1 hover:border-bone transition-colors text-bone inline-flex items-center gap-2 group"
                    >
                      DISCUSS THIS SPECIFICATION
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                    <span className="text-[11px] font-sans text-bone/40 uppercase tracking-widest">
                      Custom Built · No Retainers
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Stacked View */}
          <div className="flex flex-col gap-8 lg:hidden">
            {projects.slice(0, 6).map((system, index) => (
              <FadeIn key={system.slug} className="flex flex-col bg-near-black p-6 md:p-8 border border-bone/10 rounded-sm">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-[10px] tracking-widest font-sans font-medium uppercase text-bone/50">
                    {system.sector}
                  </span>
                  <span className="text-[11px] font-sans text-bone/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-[26px] md:text-[32px] leading-tight text-bone mb-3">
                  {system.title}
                </h3>
                <p className="font-sans text-bone/70 text-[14px] leading-relaxed mb-6">
                  {system.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {system.tags.map(tag => (
                    <span key={tag} className="text-[9px] tracking-wider uppercase border border-bone/10 px-2 py-0.5 text-bone/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href="/contact"
                  className="text-[11px] tracking-widest font-sans font-semibold uppercase border-b border-bone/30 pb-1 hover:border-bone transition-colors text-bone self-start inline-flex items-center gap-1.5"
                >
                  DISCUSS THIS SPECIFICATION →
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* View All Work Link */}
          <FadeIn className="pt-12 flex justify-center lg:justify-end border-t border-bone/10 mt-8">
            <Link 
              href="/work"
              className="text-[12px] font-sans font-medium tracking-[0.15em] uppercase text-bone/70 hover:text-bone border-b border-bone/20 hover:border-bone pb-1 transition-all duration-300"
            >
              EXPLORE ALL CAPABILITIES →
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
