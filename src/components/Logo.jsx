export default function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="38" cy="18" r="9" fill="#5B5FEF" />
      <path d="M31 24 Q20 30 19 43" stroke="#5B5FEF" strokeWidth="7" strokeLinecap="round" />
      <circle cx="46" cy="38" r="9" fill="#2FD9C4" />
      <path d="M38 37 Q28 32 19 38" stroke="#2FD9C4" strokeWidth="7" strokeLinecap="round" />
      <circle cx="22" cy="48" r="9" fill="#F5B93D" />
      <path d="M28 43 Q34 33 36 22" stroke="#F5B93D" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
