import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function PageHero({ crumb, title, sub }) {
  return (
    <div className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grad-mesh pointer-events-none" />
      <div className="relative mx-auto max-w-[900px]">
        <p className="text-xs text-ink3 mb-5"><Link to="/" className="text-brand-400 hover:underline">Home</Link> / {crumb}</p>
        <Reveal><h1 className="font-display text-[clamp(2.2rem,5.5vw,3.6rem)] font-extrabold leading-[1.05] text-ink">{title}</h1></Reveal>
        {sub && <Reveal delay={0.1}><p className="text-ink2 text-lg mt-5 max-w-[640px] leading-relaxed">{sub}</p></Reveal>}
      </div>
    </div>
  );
}
