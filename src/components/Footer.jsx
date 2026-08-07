import { Link } from 'react-router-dom';
import { Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';
import ZohoBadge from './ZohoBadge';
import { BRAND } from '../data/content';

const COLS = [
  { title: 'Services', links: [['Zoho One', '/services'], ['Zoho CRM', '/services'], ['Zoho ERP', '/services'], ['Finance Suite', '/services'], ['HR Solutions', '/services'], ['Managed Services', '/services']] },
  { title: 'Products', links: [['Zoho CRM', '/products'], ['Zoho Books', '/products'], ['Zoho One', '/products'], ['Zoho People', '/products'], ['Zoho Creator', '/products'], ['Zoho Analytics', '/products']] },
  { title: 'Company', links: [['Industries', '/industries'], ['Our Process', '/about'], ['Insights', '/blog'], ['Contact', '/contact']] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-edge/10 bg-surface/40">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <Logo size={30} />
            <span className="font-display font-extrabold text-lg text-ink">{BRAND.name}<em className="not-italic text-brand-400">{BRAND.suffix}</em></span>
          </Link>
          <p className="text-sm text-ink2 leading-relaxed max-w-xs mb-5">
            Certified Zoho Authorized Partner transforming businesses through intelligent digital solutions across India, USA, UAE, UK &amp; Germany.
          </p>
          <ZohoBadge height={40} className="rounded-lg overflow-hidden" />
          <div className="flex gap-2.5 mt-5">
            <a href="https://www.linkedin.com/company/www.appstechsoft.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg border border-edge/15 flex items-center justify-center text-ink2 hover:text-ink hover:border-edge/30 transition-colors"><Linkedin size={15} /></a>
            <a href="https://www.facebook.com/people/Appstech-Soft/61562974785323/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg border border-edge/15 flex items-center justify-center text-ink2 hover:text-ink hover:border-edge/30 transition-colors"><Facebook size={15} /></a>
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map(([label, path]) => (
                <li key={label}><Link to={path} className="text-sm text-ink2 hover:text-ink transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-edge/10">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink3">
          <p>© {year} AppsTech Soft. All rights reserved. Zoho Authorized Partner.</p>
          <div className="flex gap-5">
            <a href="https://www.appstechsoft.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-ink2">Privacy</a>
            <a href="https://www.appstechsoft.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-ink2">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
