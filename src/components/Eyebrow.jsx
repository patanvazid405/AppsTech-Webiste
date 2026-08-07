const TONES = {
  brand: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
  gold: 'text-gold-500 bg-gold-500/10 border-gold-500/20',
  teal: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
};

export default function Eyebrow({ children, tone = 'brand', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${TONES[tone]} ${className}`}>
      {children}
    </span>
  );
}
