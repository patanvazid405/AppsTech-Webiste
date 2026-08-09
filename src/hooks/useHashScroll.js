import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the element matching the current URL hash (e.g. #zoho-crm),
// offsetting for the fixed header. React Router doesn't do this natively.
export default function useHashScroll(offset = 96) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 80);
    return () => clearTimeout(t);
  }, [hash, offset]);
}
