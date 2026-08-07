import { Star, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

function Card({ t }) {
  return (
    <div className="shrink-0 w-[380px] rounded-2xl border border-edge/10 bg-surface p-6 mx-2.5">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="text-gold-500 fill-gold-500" />)}
      </div>
      <p className="text-[13.5px] text-ink2 leading-relaxed mb-5 min-h-[95px]">&ldquo;{t.txt}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: `linear-gradient(135deg, ${t.color}, #5B5FEF)` }}>{t.av}</div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold text-ink truncate">{t.name}</div>
          <div className="text-[11px] text-ink3">{t.role}</div>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-ink3 shrink-0"><Building2 size={11} />{t.co}</div>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS].reverse().concat(TESTIMONIALS, TESTIMONIALS);

  return (
    <div className="space-y-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row1.map((t, i) => <Card key={i} t={t} />)}
      </div>
      <div className="flex w-max animate-marquee-rev hover:[animation-play-state:paused]">
        {row2.map((t, i) => <Card key={i} t={t} />)}
      </div>
    </div>
  );
}
