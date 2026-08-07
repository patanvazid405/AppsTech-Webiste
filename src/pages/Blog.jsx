import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { BLOG_POSTS } from '../data/content';

function Card({ p, big }) {
  return (
    <a href="#/blog" className="group block h-full rounded-2xl border border-edge/10 bg-surface overflow-hidden hover:border-edge/25 hover:-translate-y-1 transition-all duration-300">
      <div className={`flex items-center justify-center bg-gradient-to-br from-surface2 to-void text-brand-400/70 group-hover:text-brand-400 transition-colors ${big ? 'h-44' : 'h-28'}`}>
        <Icon name={p.icon} size={big ? 40 : 30} strokeWidth={1.3} />
      </div>
      <div className="p-6">
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2.5 py-1 rounded-full">{p.tag}</span>
        <h3 className={`font-display font-bold text-ink mt-3 leading-snug ${big ? 'text-lg' : 'text-[15px]'}`}>{p.title}</h3>
        {p.excerpt && <p className="text-[13px] text-ink2 leading-relaxed mt-2.5">{p.excerpt}</p>}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-edge/10 text-xs text-ink3">
          <span>{p.meta}</span>
          <span className="inline-flex items-center gap-1 text-brand-400 font-semibold">Read <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" /></span>
        </div>
      </div>
    </a>
  );
}

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <div>
      <PageHero
        crumb="Insights"
        title={<>Zoho Knowledge <span className="text-gradient">Hub</span></>}
        sub="Expert guides and insights from our certified Zoho consultants."
      />
      <section className="pb-24 px-5 sm:px-8 bg-surface/40 border-y border-edge/10">
        <div className="mx-auto max-w-[1200px] pt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reveal className="sm:col-span-2 lg:col-span-1"><Card p={featured} big /></Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}><Card p={p} /></Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
