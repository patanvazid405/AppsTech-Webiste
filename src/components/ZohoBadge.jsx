// Vector recreation of the official "Zoho Authorized Partner" seal.
// Built as SVG (not a raster embed) so it stays perfectly crisp at any size.
export default function ZohoBadge({ className = '', height = 56 }) {
  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 360 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Zoho Authorized Partner"
    >
      <clipPath id="badge-clip"><rect x="0" y="0" width="360" height="100" rx="14" /></clipPath>
      <g clipPath="url(#badge-clip)">
        <rect x="0" y="0" width="360" height="100" fill="#F2F3F5" />
        <rect x="188" y="0" width="172" height="100" fill="#1E6FC7" />

        {/* interlocking square mark */}
        <g fill="none" strokeWidth="9" strokeLinejoin="round">
          <rect x="18" y="26" width="38" height="38" rx="9" stroke="#E1483B" />
          <rect x="45" y="18" width="38" height="38" rx="9" stroke="#26A65B" />
          <rect x="72" y="30" width="38" height="38" rx="9" stroke="#2F7DE1" />
          <rect x="98" y="38" width="34" height="34" rx="8" stroke="#F5B93D" />
        </g>
        <text x="65" y="86" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="15" letterSpacing="3" fill="#111318">ZOHO</text>

        <text x="205" y="42" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="26" fill="#ffffff">Zoho</text>
        <text x="205" y="66" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="19" fill="#ffffff">Authorized</text>
        <text x="205" y="88" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="19" fill="#ffffff">Partner</text>
      </g>
    </svg>
  );
}
