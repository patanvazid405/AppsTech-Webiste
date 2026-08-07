import { Check } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';
import ZohoIcon from './ZohoIcon';

const TONE = {
  blue: 'text-brand-400 bg-brand-500/10',
  gold: 'text-gold-500 bg-gold-500/10',
  green: 'text-teal-500 bg-teal-500/10',
  red: 'text-rose-400 bg-rose-500/10',
};

export default function ProductPanel({ p }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <Reveal className="order-2 lg:order-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 shrink-0"><ZohoIcon id={p.id} /></div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2.5 py-1 rounded-full">{p.cat}</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-3">{p.label}</h3>
        <p className="text-ink2 leading-relaxed mb-6">{p.desc}</p>
        <div className="space-y-3 mb-8">
          {p.feats.map((f) => (
            <div key={f} className="flex items-start gap-2.5 text-sm text-ink2">
              <span className="w-5 h-5 rounded-full bg-brand-500/15 text-brand-400 flex items-center justify-center shrink-0 mt-0.5"><Check size={12} strokeWidth={3} /></span>
              {f}
            </div>
          ))}
        </div>
        <Button to="/contact" variant="primary">Implement {p.label}</Button>
      </Reveal>

      <Reveal delay={0.12} className="order-1 lg:order-2">
        <div className="rounded-2xl border border-edge/10 bg-surface overflow-hidden shadow-card">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-edge/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-xs text-ink3 ml-2">{p.label} — Dashboard</span>
          </div>
          <div className="p-5 sm:p-6 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {p.kpis.map((k) => (
                <div key={k.l} className="rounded-xl bg-surface2 border border-edge/10 p-3.5 text-center">
                  <div className="font-display text-lg sm:text-xl font-extrabold text-ink">{k.n}</div>
                  <div className="text-[10.5px] text-ink3 mt-0.5">{k.l}</div>
                </div>
              ))}
            </div>
            {p.bars.length > 0 && (
              <div className="flex items-end gap-2 h-24 px-1">
                {p.bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500/30 to-brand-400" style={{ height: `${h}%` }} />
                ))}
              </div>
            )}
            {p.rows.map((r, i) => (
              <div key={i} className="flex items-center justify-between text-[13px] py-2 border-t border-edge/10 first:border-t-0">
                <span className="text-ink2">{r.t}</span>
                <span className={`text-[11px] font-semibold px-2 py-1 rounded-md ${TONE[r.tone]}`}>{r.b}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
