import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import Eyebrow from '../components/Eyebrow';
import Button from '../components/Button';
import { SERVICES, WHY_US, BENCHMARKS } from '../data/content';

function MBar({ label, val, pct }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between text-[13px] mb-2"><span className="text-ink2">{label}</span><span className="font-bold text-ink">{val}</span></div>
      <div className="h-1.5 rounded-full bg-surface2 overflow-hidden">
        <Reveal as="div" className="h-full rounded-full bg-grad-brand" initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} transition={{ duration: 1, ease: 'easeOut' }} />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <PageHero
        crumb="Services"
        title={<>Our <span className="text-gradient">Services</span></>}
        sub="End-to-end Zoho implementation, customization, and managed services — covering every part of your business."
      />

      <section className="py-8 px-5 sm:px-8 bg-surface/40 border-y border-edge/10">
        <div className="mx-auto max-w-[1200px] grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className={s.feat ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <a href="#/contact" className={`group block h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${s.feat ? 'border-brand-500/30 bg-brand-500/[.06]' : 'border-edge/10 bg-surface hover:border-edge/25'}`}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/15 to-teal-500/10 border border-edge/10 flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform"><Icon name={s.icon} size={22} /></div>
                  <span className="text-xs font-mono text-ink3">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">{s.title}</h3>
                <p className="text-[13.5px] text-ink2 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-400 mt-5">Get started <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal><Eyebrow>Why AppsTech Soft</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4 leading-tight">We don't just implement.<br /><span className="text-gradient">We transform.</span></h2></Reveal>
            <Reveal delay={0.14}><p className="text-ink2 mt-5 leading-relaxed">Unlike generic IT vendors, we bring certified Zoho expertise, proven playbooks, and a genuine ROI-first approach to every engagement.</p></Reveal>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06} className="flex gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-grad-brand text-white flex items-center justify-center shrink-0 shadow-glow"><Icon name={w.icon} size={17} /></div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-ink mb-1">{w.title}</h4>
                    <p className="text-[12.5px] text-ink2 leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="relative rounded-3xl border border-edge/10 bg-surface p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grad-mesh pointer-events-none" />
            <div className="relative">
              <h4 className="font-display font-bold text-ink mb-8">Performance Benchmarks</h4>
              {BENCHMARKS.map((b) => <MBar key={b.label} {...b} />)}
              <div className="mt-8 rounded-2xl bg-grad-gold text-void p-5 flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl font-extrabold">340%</div>
                  <div className="text-xs font-semibold opacity-80">Avg. ROI Delivered</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-4">Not sure which service you need?</h2>
          <p className="text-ink2 mb-8 max-w-[480px] mx-auto">Book a free assessment call and we'll map the right starting point for your business.</p>
          <Button to="/contact" variant="primary" size="lg">Talk to a Consultant <ArrowRight size={16} /></Button>
        </Reveal>
      </section>
    </div>
  );
}
