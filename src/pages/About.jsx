import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Eyebrow from '../components/Eyebrow';
import TestimonialMarquee from '../components/TestimonialMarquee';
import { PROCESS_STEPS } from '../data/content';

export default function About() {
  return (
    <div>
      <PageHero
        crumb="About"
        title={<>Our Proven <span className="text-gradient">Process</span></>}
        sub="Six steps from first call to full adoption — zero disruption to your business."
      />

      <section className="pb-8 px-5 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-[560px] mx-auto mb-16">
            <Reveal><Eyebrow>How We Work</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4">Implementation <span className="text-gradient">timeline</span></h2></Reveal>
            <Reveal delay={0.14}><p className="text-ink2 mt-4">A proven 6-step methodology refined across 500+ projects.</p></Reveal>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[38px] left-[8%] right-[8%] h-px bg-edge/10 overflow-hidden">
              <Reveal as="div" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full w-full bg-grad-brand origin-left" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
              {PROCESS_STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="relative z-10 w-[76px] h-[76px] rounded-2xl bg-surface border border-edge/15 flex items-center justify-center font-display text-xl font-extrabold text-brand-400 mb-5">{s.n}</div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-500">Step {s.n}</span>
                  <h4 className="font-display font-bold text-lg text-ink mt-1.5 mb-2">{s.title}</h4>
                  <p className="text-sm text-ink2 leading-relaxed max-w-[280px]">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-edge/10 mt-16 overflow-hidden">
        <div className="text-center max-w-[560px] mx-auto mb-14 px-5">
          <Reveal><Eyebrow tone="gold">Client Stories</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4">What our clients <span className="text-gradient">say</span></h2></Reveal>
        </div>
        <TestimonialMarquee />
      </section>
    </div>
  );
}
