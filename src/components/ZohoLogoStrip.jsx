import peopleLogo from '../assets/zoho/people.png';
import erpLogo from '../assets/zoho/erp.png';
import booksLogo from '../assets/zoho/books.png';
import oneLogo from '../assets/zoho/one.png';
import creatorLogo from '../assets/zoho/creator.png';
import deskLogo from '../assets/zoho/desk.png';
import projectsLogo from '../assets/zoho/projects.png';
import analyticsLogo from '../assets/zoho/analytics.png';
import { CrmMark } from './zohoMarks';
import Reveal from './Reveal';

const LOGOS = [
  { id: 'crm', custom: true },
  { id: 'one', src: oneLogo },
  { id: 'books', src: booksLogo },
  { id: 'people', src: peopleLogo },
  { id: 'creator', src: creatorLogo },
  { id: 'erp', src: erpLogo },
  { id: 'desk', src: deskLogo },
  { id: 'projects', src: projectsLogo },
  { id: 'analytics', src: analyticsLogo },
];

export default function ZohoLogoStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {LOGOS.map((l, i) => (
        <Reveal key={l.id} delay={i * 0.04}>
          <div className="h-24 rounded-2xl bg-white border border-black/5 flex items-center justify-center px-5 shadow-sm">
            {l.custom ? (
              <div className="flex items-center gap-2.5">
                <CrmMark className="w-9 h-9 text-[#006EB9]" />
                <div className="leading-[1.05] font-display text-[#111318]">
                  <div className="text-base font-medium">Zoho</div>
                  <div className="text-xl font-extrabold -mt-0.5">CRM</div>
                </div>
              </div>
            ) : (
              <img src={l.src} alt={`Zoho ${l.id}`} className="max-h-12 max-w-full object-contain" />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
