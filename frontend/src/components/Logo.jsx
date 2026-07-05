export const Logo = ({ light = true, className = "" }) => {
  const main = light ? "#F8FAFC" : "#1A1F36";
  return (
    <a href="#inicio" data-testid="header-logo" className={`flex items-center gap-2.5 ${className}`} aria-label="Scriptool - Início">
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M18 10L7 24L18 38" stroke={main} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 10L41 24L30 38" stroke={main} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="24" y1="15" x2="24" y2="33" stroke="#2ECC96" strokeWidth="5" strokeLinecap="round" />
        <circle cx="24" cy="7" r="3" fill="#2ECC96" />
        <circle cx="24" cy="41" r="3" fill="#2ECC96" />
      </svg>
      <span className="font-sora font-bold text-2xl tracking-tight" style={{ color: main }}>
        Scriptool
      </span>
    </a>
  );
};
