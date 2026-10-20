/* Ikony SVG — wszystkie dekoracyjne (aria-hidden). Kolor dziedziczą z `currentColor`. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export function LeafIcon({ size = 30, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" strokeWidth={strokeWidth} {...base}>
      <path d="M6 26 C6 14 14 6 26 6 C26 18 18 26 6 26 Z" />
      <path d="M6 26 L18 14" />
    </svg>
  );
}

export function PhoneIcon({ size = 22, strokeWidth = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function MailIcon({ size = 18, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function DocumentIcon({ size = 18, strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

export function MenuIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} {...base}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function CloseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} {...base}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth={1.8} {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  );
}

function WrenchIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth={1.8} {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
    </svg>
  );
}

function TrendIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth={1.8} {...base} {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth={1.8} {...base} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/* Mapa ikon używana w kartach korzyści (klucz z content.js → komponent) */
export const benefitIcons = {
  search: SearchIcon,
  wrench: WrenchIcon,
  trend: TrendIcon,
  eye: EyeIcon,
};
