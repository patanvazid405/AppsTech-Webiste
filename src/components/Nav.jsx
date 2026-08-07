import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { NAV_LINKS, BRAND } from '../data/content';
import { useTheme } from '../theme';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement;
      const pct = (window.scrollY / (h.scrollHeight - h.clientHeight || 1)) * 100;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div className="h-full bg-grad-brand transition-[width]" style={{ width: `${progress}%` }} />
      </div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-edge/10 py-3' : 'py-5'}`}>
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 flex items-center justify-between gap-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2.5 shrink-0">
            <Logo size={32} />
            <span className="font-display font-extrabold text-lg text-ink">{BRAND.name}<em className="not-italic text-brand-400">{BRAND.suffix}</em></span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.id}
                to={l.path}
                className={({ isActive }) => `px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-colors ${isActive ? 'text-ink bg-surface2' : 'text-ink2 hover:text-ink'}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg border border-edge/15 flex items-center justify-center text-ink2 hover:text-gold-500 hover:border-gold-500/30 transition-colors"
            >
              {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Button to="/contact" variant="outline" size="md">Contact</Button>
            <Button to="/contact" variant="primary" size="md">Free Consultation</Button>
          </div>

          <button className="lg:hidden w-10 h-10 flex items-center justify-center text-ink" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden glass border-t border-edge/10 mt-4 px-5 py-5">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.id} to={l.path} className={({ isActive }) => `py-3 border-b border-edge/10 text-[15px] ${isActive ? 'text-ink font-semibold' : 'text-ink2'}`}>
                  {l.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-5">
              <button onClick={toggle} className="w-11 h-11 rounded-xl border border-edge/15 flex items-center justify-center text-ink2 shrink-0">
                {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Button to="/contact" variant="primary" className="flex-1 justify-center">Free Consultation</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
