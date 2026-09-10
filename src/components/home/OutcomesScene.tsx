import FadeIn from '@/components/ui/FadeIn';
import SectionLabel from '@/components/ui/SectionLabel';

const outcomes = [
  'GET FOUND & SURFACED',
  'LOOK CREDIBLE & ESTABLISHED',
  'BUILD IMMEDIATE TRUST',
  'MAKE THE OFFER CLEAR',
  'GENERATE QUALIFIED ENQUIRIES',
  'MAKE BOOKING EFFORTLESS',
  'SELL DIRECT WITH ZERO COMMISSIONS',
  'REDUCE OPERATIONAL & ADMIN DRAG',
];

export default function OutcomesScene() {
  return (
    <section className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn>
              <SectionLabel>COMMERCIAL OUTCOMES</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-editorial-lg font-display text-near-black">
                A BEAUTIFUL WEBSITE ISN&apos;T THE END GOAL.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-sans text-stone text-[16px] md:text-[18px] leading-relaxed">
                Design without commercial clarity is vanity. We build websites and digital systems around three measurable business fundamentals: <strong className="text-near-black">Get found. Get customers. Run better.</strong>
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 flex flex-col">
            <div className="border-t border-near-black/10">
              {outcomes.map((outcome, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <div className="flex items-center gap-6 py-6 border-b border-near-black/10">
                    <span className="text-[12px] md:text-[14px] text-stone font-sans w-8">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[22px] md:text-[30px] lg:text-[36px] font-display text-near-black tracking-wide">
                      {outcome}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
