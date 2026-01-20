import React from 'react';

interface TopographicBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function TopographicBackground({
  className = '',
  opacity = 0.15
}: TopographicBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="topographic" x="0" y="0" width="800" height="800" patternUnits="userSpaceOnUse">
            {/* Contour lines creating topographic map effect */}
            <path
              d="M 100 200 Q 200 180 300 200 T 500 200 T 700 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M 80 280 Q 180 260 280 280 T 480 280 T 680 280"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M 60 360 Q 160 340 260 360 T 460 360 T 660 360"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.4"
            />
            <path
              d="M 40 440 Q 140 420 240 440 T 440 440 T 640 440"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <path
              d="M 120 520 Q 220 500 320 520 T 520 520 T 720 520"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M 90 600 Q 190 580 290 600 T 490 600 T 690 600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.4"
            />
          </pattern>
        </defs>
        <rect width="800" height="800" fill="url(#topographic)" className="text-[var(--color-nyon-blue)]" />
      </svg>
    </div>
  );
}
