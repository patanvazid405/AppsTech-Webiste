import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'bg-grad-brand text-white shadow-glow hover:brightness-110 active:brightness-95 hover:-translate-y-0.5',
  outline: 'border border-edge/20 text-ink hover:border-edge/40 hover:bg-surface2 hover:-translate-y-0.5',
  ghost: 'text-ink2 hover:text-ink hover:-translate-y-0.5',
  gold: 'bg-grad-gold text-void font-bold hover:brightness-105 hover:-translate-y-0.5',
};

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-4 text-[15px]',
};

export default function Button({ to, href, onClick, variant = 'primary', size = 'md', className = '', children, type = 'button', ...rest }) {
  const cls = `btn-shine relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls} {...rest}>{children}</button>;
}
