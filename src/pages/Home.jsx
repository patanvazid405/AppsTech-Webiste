import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import Icon from '../components/Icon';
import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';
import HeroCanvas from '../components/HeroCanvas';
import ProductPanel from '../components/ProductPanel';
import TestimonialMarquee from '../components/TestimonialMarquee';
import Faq from '../components/Faq';
import ZohoIcon from '../components/ZohoIcon';
import ZohoBadge from '../components/ZohoBadge';
import ZohoLogoStrip from '../components/ZohoLogoStrip';
import { STATS, SERVICES, PRODUCTS, TRUST_LOGOS, WHY_US } from '../data/content';

export default function Home() {
  const [tab, setTab] = useState('crm');
  const product = PRODUCTS.find((p) => p.id === tab) || PRODUCTS[0];

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28 px-5 sm:px-8">
        <HeroCanvas />
        <div className="absolute inset-0 bg-grad-mesh pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="relative mx-auto max-w-[1360px] grid lg:grid-cols-[1fr_380px] gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-edge/15 bg-surface/60 px-4 py-2 text-xs sm:text-[13px] text-ink2 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                Zoho Authorized Partner — Trusted by 200+ Businesses
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-[clamp(2.4rem,6vw,4.4rem)] font-extrabold leading-[1.04] text-ink">
                Your Business, Run<br />
                <span className="text-gradient">Entirely on Zoho.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-ink2 text-lg leading-relaxed mt-6 max-w-[560px]">
                We're the certified Zoho Authorized Partner that takes you from scattered spreadsheets to one unified system — CRM, Finance, HR and Operations, live and adopted by your team.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4 mt-9">
                <Button to="/contact" variant="primary" size="lg"><CalendarCheck2 size={18} /> Schedule Free Consultation</Button>
                <Button to="/services" variant="outline" size="lg">Explore Services <ArrowRight size={16} /></Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 pt-10 border-t border-edge/10 max-w-[560px]">
                {[{ n: 500, s: '+', l: 'PROJECTS' }, { n: 200, s: '+', l: 'CLIENTS' }, { n: 10, s: '+', l: 'YEARS' }, { n: 98, s: '%', l: 'RETENTION' }].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-ink"><Counter to={s.n} suffix={s.s} /></div>
                    <div className="text-[10.5px] tracking-wider text-ink3 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="hidden lg:block">
            <div className="rounded-3xl border border-edge/10 bg-surface/80 backdrop-blur-xl p-7 shadow-card relative">
              <ZohoBadge height={44} className="mb-6 rounded-xl overflow-hidden shadow-sm" />
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                {['crm', 'one', 'creator', 'books', 'people', 'analytics'].map((id) => (
                  <div key={id} className="aspect-square rounded-xl bg-surface2 border border-edge/10 p-2.5 flex items-center justify-center"><ZohoIcon id={id} /></div>
                ))}
              </div>
              <div className="text-[11px] text-ink3 border-t border-edge/10 pt-4 mb-2">Global delivery offices in</div>
              <div className="text-2xl tracking-[6px]">🇮🇳🇺🇸🇦🇪🇬🇧🇩🇪</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TRUST MARQUEE ────────────────────────────────────── */}
      <div className="border-y border-edge/10 py-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-10">
          {[...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS].map((n, i) => (
            <span key={i} className="flex items-center gap-2 text-sm text-ink3 font-medium whitespace-nowrap"><span className="w-1.5 h-1.5 rounded-full bg-ink3/50" />{n}</span>
          ))}
        </div>
      </div>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section className="py-20 px-5 sm:px-8 border-b border-edge/10">
        <div className="mx-auto max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-px bg-edge/10 rounded-2xl overflow-hidden">
          {STATS.map((s) => (
            <Reveal key={s.label} className="bg-void py-10 px-6 text-center">
              <div className="w-11 h-11 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mx-auto mb-4"><Icon name={s.icon} size={20} /></div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-gradient"><Counter to={s.n} suffix={s.suffix} /></div>
              <div className="text-sm font-semibold text-ink mt-2">{s.label}</div>
              <div className="text-xs text-ink3 mt-1">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── SERVICES BENTO ───────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[600px] mb-14">
            <Reveal><Eyebrow>What We Do</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4">End-to-end <span className="text-gradient">digital solutions</span></h2></Reveal>
            <Reveal delay={0.14}><p className="text-ink2 mt-4 leading-relaxed">From CRM automation to full ERP — we architect, configure, and optimize the complete Zoho ecosystem for your business.</p></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06} className={s.feat ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <Link to={`/services#${s.slug}`} className={`group block h-full rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${s.feat ? 'border-brand-500/30 bg-brand-500/[.06]' : 'border-edge/10 bg-surface hover:border-edge/25'}`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/15 to-teal-500/10 border border-edge/10 flex items-center justify-center text-brand-400 mb-5 group-hover:scale-105 transition-transform"><Icon name={s.icon} size={22} /></div>
                  <h3 className="font-display font-bold text-lg text-ink mb-2">{s.title}</h3>
                  <p className="text-[13.5px] text-ink2 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-400 mt-5">Explore <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZOHO ECOSYSTEM ───────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8 bg-surface/40 border-y border-edge/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[600px] mb-12">
            <Reveal><Eyebrow tone="teal">Zoho Expertise</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4">The complete <span className="text-gradient">Zoho ecosystem</span></h2></Reveal>
            <Reveal delay={0.14}><p className="text-ink2 mt-4">Deep expertise across every Zoho product — not just CRM.</p></Reveal>
          </div>
          <div className="mb-14"><ZohoLogoStrip /></div>
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {PRODUCTS.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setTab(p.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all ${tab === p.id ? 'border-brand-500/40 bg-brand-500/10 text-ink' : 'border-edge/10 bg-surface text-ink2 hover:border-edge/25'}`}
                >
                  <span className="w-6 h-6"><ZohoIcon id={p.id} /></span>
                  <span className="text-sm font-semibold">{p.label.replace('Zoho ', '')}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <ProductPanel key={product.id} p={product} />
          <div className="text-center mt-14">
            <Button to="/products" variant="ghost">View All 8 Zoho Products <ArrowRight size={15} /></Button>
          </div>
        </div>
      </section>

      {/* ─── WHY US STRIP ─────────────────────────────────────── */}
      <section className="py-20 px-5 sm:px-8">
        <div className="mx-auto max-w-[1200px] grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="w-11 h-11 rounded-xl bg-grad-brand text-white flex items-center justify-center mb-4 shadow-glow"><Icon name={w.icon} size={19} /></div>
              <h4 className="font-display font-bold text-ink mb-1.5">{w.title}</h4>
              <p className="text-[13px] text-ink2 leading-relaxed">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 border-y border-edge/10 overflow-hidden">
        <div className="px-5 sm:px-8 mx-auto max-w-[1200px] mb-12">
          <Reveal><Eyebrow tone="gold">Client Stories</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4">Trusted by <span className="text-gradient">leaders</span></h2></Reveal>
        </div>
        <TestimonialMarquee />
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 px-5 sm:px-8">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <Reveal><Eyebrow>Common Questions</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-4">The Zoho Partner <span className="text-gradient">advantage</span></h2></Reveal>
        </div>
        <Faq />
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────── */}
      <section className="mx-5 sm:mx-8 mb-8 rounded-3xl bg-grad-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,.18),transparent)]" />
        <div className="relative py-20 px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white max-w-[560px] mx-auto">Ready to transform your business?</h2>
            <p className="text-white/80 mt-4 max-w-[480px] mx-auto leading-relaxed">Schedule a free 45-minute discovery call. We identify quick wins and deliver a custom roadmap — on the call.</p>
            <div className="flex flex-wrap gap-4 justify-center mt-9">
              <Button to="/contact" variant="gold" size="lg"><CalendarCheck2 size={18} /> Book Free Consultation</Button>
              <Button to="/about" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">Learn Our Process</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
