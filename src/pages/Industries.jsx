import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { INDUSTRIES } from '../data/content';

export default function Industries() {
  return (
    <div>
      <PageHero
        crumb="Industries"
        title={<>Built for Your <span className="text-gradient">Industry</span></>}
        sub="Deep vertical expertise means faster implementation and better outcomes for your specific context."
      />

      <section className="pb-24 px-5 sm:px-8 bg-surface/40 border-y border-edge/10">
        <div className="mx-auto max-w-[1200px] grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-2xl border border-edge/10 bg-surface p-7 hover:-translate-y-1 hover:border-edge/25 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/15 to-teal-500/10 border border-edge/10 flex items-center justify-center text-brand-400 mb-5 group-hover:scale-105 transition-transform"><Icon name={ind.icon} size={22} /></div>
                <h3 className="font-display font-bold text-ink mb-2">{ind.title}</h3>
                <p className="text-[13px] text-ink2 leading-relaxed mb-4">{ind.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-500 bg-teal-500/10 px-2.5 py-1 rounded-full"><CheckCircle2 size={12} /> Zoho Certified</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-4">Don't see your <span className="text-gradient">industry?</span></h2>
          <p className="text-ink2 mb-8 max-w-[480px] mx-auto">We work across 15+ sectors. Talk to us about yours.</p>
          <Button to="/contact" variant="primary" size="lg">Talk to a Consultant <ArrowRight size={16} /></Button>
        </Reveal>
      </section>
    </div>
  );
}
