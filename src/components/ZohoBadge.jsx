import badge from '../assets/zoho/partner-badge.png';

// Official Zoho Authorized Partner seal (real asset, not a recreation).
export default function ZohoBadge({ className = '', height = 56 }) {
  return (
    <img
      src={badge}
      alt="Zoho Authorized Partner"
      height={height}
      style={{ height, width: 'auto' }}
      className={className}
    />
  );
}
