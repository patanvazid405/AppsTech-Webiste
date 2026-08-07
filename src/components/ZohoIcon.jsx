import ZOHO_ICONS from '../data/zohoIcons';

export default function ZohoIcon({ id, className = '' }) {
  const src = ZOHO_ICONS[id];
  if (!src) return null;
  return <img src={src} alt={`Zoho ${id}`} className={`w-full h-full object-contain rounded-md block ${className}`} />;
}
