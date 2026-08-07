import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../data/content';
import Reveal from './Reveal';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-[760px] mx-auto divide-y divide-edge/10 border-y border-edge/10">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={f.q} delay={i * 0.04}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
            >
              <span className={`text-[15px] sm:text-base font-semibold ${isOpen ? 'text-ink' : 'text-ink2'}`}>{f.q}</span>
              <span className={`w-7 h-7 rounded-full border border-edge/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 bg-brand-500 border-brand-500 text-white' : 'text-ink2'}`}>
                <Plus size={14} />
              </span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`} style={{ display: 'grid' }}>
              <div className="overflow-hidden">
                <p className="text-sm text-ink2 leading-relaxed max-w-[640px]">{f.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
