import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZES = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
};

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClass = SIZES[size] || SIZES.md;

  return (
    <div className={`inline-block shrink-0 select-none ${sizeClass} ${className}`} title="Madrasa Management System">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        <defs>
          <linearGradient id={`mkt-logo-bg-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>

          <linearGradient id={`mkt-logo-gold-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          <linearGradient id={`mkt-arch-glow-${size}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
          </linearGradient>

          <filter id={`mkt-shadow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#022c22" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Background Squircle Container */}
        <rect x="2" y="2" width="96" height="96" rx="24" fill={`url(#mkt-logo-bg-${size})`} />
        <rect x="2" y="2" width="96" height="96" rx="24" stroke={`url(#mkt-logo-gold-${size})`} strokeWidth="2" strokeOpacity="0.65" />

        {/* Subtle Islamic 8-Point Star Pattern in background */}
        <g opacity="0.12" stroke="#ffffff" strokeWidth="1.2" fill="none">
          <rect x="34" y="34" width="32" height="32" rx="3" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="28" />
        </g>

        {/* Islamic Dome & Mihrab Arch */}
        <path
          d="M 50 14 C 54 22 66 28 66 42 C 66 52 61 58 50 58 C 39 58 34 52 34 42 C 34 28 46 22 50 14 Z"
          fill={`url(#mkt-arch-glow-${size})`}
          stroke={`url(#mkt-logo-gold-${size})`}
          strokeWidth="1.8"
        />

        {/* Crescent & Star Finial on Dome Crest */}
        <circle cx="50" cy="11" r="2" fill="#fbbf24" />
        <path d="M 48.5 7 C 50 6 52 7 52.5 8.5 C 51.5 8 50 8.5 49.5 9.5 C 48.5 8.3 48 7.5 48.5 7 Z" fill="#fef08a" />

        {/* Calligraphic Arabic "م" (Meem) */}
        <g filter={`url(#mkt-shadow-${size})`}>
          <path
            d="M 52.5 24 C 56.5 24 59.5 27.5 59 31.5 C 58.5 35.5 55 38 51 38 C 47.5 38 45 35.5 45.5 32.5 C 46 29 48.5 26 52.5 24 Z"
            fill="#ffffff"
          />
          <ellipse cx="52.2" cy="31.5" rx="3.5" ry="3" fill="#065f46" />
          <path
            d="M 46.5 33.5 C 45 37 45.5 43 47 47 C 47.8 49.5 47.5 52 46.5 54 C 45.5 52 45 48 44.2 45 C 43.5 40.5 43.5 36 45.5 32 Z"
            fill="#ffffff"
          />
        </g>

        {/* Open Quran on Rihal (رحل) */}
        <g filter={`url(#mkt-shadow-${size})`}>
          {/* Wooden Stand (رحل) */}
          <path
            d="M 41 77 L 50 69 L 59 77 M 44 74 L 56 74"
            stroke={`url(#mkt-logo-gold-${size})`}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Book Pages Under-Shadow */}
          <path d="M 50 66 C 40 59 27 60 22 62.5 L 22 72 C 27 69.5 40 68.5 50 75 Z" fill="#064e3b" opacity="0.6" />
          <path d="M 50 66 C 60 59 73 60 78 62.5 L 78 72 C 73 69.5 60 68.5 50 75 Z" fill="#064e3b" opacity="0.6" />

          {/* Left Page */}
          <path d="M 50 62 C 41 56 28 57 22 59.5 L 22 69.5 C 28 67 41 66 50 72 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
          {/* Right Page */}
          <path d="M 50 62 C 59 56 72 57 78 59.5 L 78 69.5 C 72 67 59 66 50 72 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />

          {/* Spine Seam */}
          <path d="M 50 62 L 50 72" stroke="#cbd5e1" strokeWidth="1.2" />

          {/* Sacred Text Lines (Gold) */}
          <line x1="28" y1="62" x2="44" y2="60" stroke={`url(#mkt-logo-gold-${size})`} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="27" y1="65" x2="45" y2="63" stroke={`url(#mkt-logo-gold-${size})`} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="29" y1="68" x2="43" y2="66" stroke={`url(#mkt-logo-gold-${size})`} strokeWidth="1.2" strokeLinecap="round" />

          <line x1="56" y1="60" x2="72" y2="62" stroke={`url(#mkt-logo-gold-${size})`} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="55" y1="63" x2="73" y2="65" stroke={`url(#mkt-logo-gold-${size})`} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="57" y1="66" x2="71" y2="68" stroke={`url(#mkt-logo-gold-${size})`} strokeWidth="1.2" strokeLinecap="round" />

          {/* Ribbon Bookmark */}
          <path d="M 50 64 L 50 77 L 47 74 L 50 77 L 53 74 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
