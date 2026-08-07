import { BookOpen, Users, Gem, BarChart3, ListChecks, Headphones, LayoutGrid } from 'lucide-react';
import { CrmMark } from './zohoMarks';

// Crisp vector product marks (replaces low-res raster icons) — a colored
// rounded-square in each product's brand color with a representative glyph.
const PRODUCTS = {
  crm: { bg: '#006EB9', Icon: CrmMark },
  books: { bg: '#1690D0', Icon: BookOpen },
  one: { bg: null, Icon: LayoutGrid }, // rendered specially below
  people: { bg: '#1AA05E', Icon: Users },
  creator: { bg: '#E0367B', Icon: Gem },
  analytics: { bg: '#E4472A', Icon: BarChart3 },
  projects: { bg: '#2E5BFF', Icon: ListChecks },
  desk: { bg: '#0C9C8D', Icon: Headphones },
};

export default function ZohoIcon({ id, className = '' }) {
  const p = PRODUCTS[id];
  if (!p) return null;

  if (id === 'one') {
    return (
      <div className={`w-full h-full rounded-[22%] grid grid-cols-2 gap-[8%] p-[14%] bg-surface2 border border-edge/10 ${className}`}>
        <span className="rounded-[30%] bg-[#E1483B]" />
        <span className="rounded-[30%] bg-[#26A65B]" />
        <span className="rounded-[30%] bg-[#2F7DE1]" />
        <span className="rounded-[30%] bg-[#F5B93D]" />
      </div>
    );
  }

  const { bg, Icon } = p;
  return (
    <div className={`w-full h-full rounded-[22%] flex items-center justify-center ${className}`} style={{ background: bg }}>
      <Icon className="w-[55%] h-[55%] text-white" strokeWidth={2} />
    </div>
  );
}
