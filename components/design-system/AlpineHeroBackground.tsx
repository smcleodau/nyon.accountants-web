'use client';

export default function AlpineHeroBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-80"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Sophisticated dark gradient base */}
        <linearGradient id="heroBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        {/* Glacier teal accent gradient */}
        <linearGradient id="glacierGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1" />
        </linearGradient>

        {/* Horizon gold accent */}
        <linearGradient id="horizonGold" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E42" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F59E42" stopOpacity="0.05" />
        </linearGradient>

        {/* Lavender mist */}
        <radialGradient id="lavenderMist" cx="70%" cy="30%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>

        {/* Atmospheric depth gradient */}
        <radialGradient id="atmosphericDepth" cx="30%" cy="50%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#475569" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
        </radialGradient>

        {/* Blur filter for depth */}
        <filter id="softBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>

        <filter id="mediumBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>

      {/* Base dark gradient */}
      <rect width="1920" height="1080" fill="url(#heroBase)" />

      {/* Atmospheric layers for depth */}
      <circle cx="600" cy="400" r="500" fill="url(#atmosphericDepth)" filter="url(#mediumBlur)" />
      <circle cx="1400" cy="300" r="400" fill="url(#lavenderMist)" filter="url(#mediumBlur)" />

      {/* Alpine topographic contour lines - stylized mountain elevation */}
      <g opacity="0.35" stroke="#22d3ee" strokeWidth="2.5" fill="none">
        {/* Mountain silhouette layers */}
        <path
          d="M 0,700 Q 200,600 400,650 T 800,680 Q 1000,720 1200,690 T 1600,710 L 1920,730 L 1920,1080 L 0,1080 Z"
          fill="#1e293b"
          opacity="0.6"
        />
        <path
          d="M 0,750 Q 250,680 500,720 T 900,760 Q 1100,800 1300,770 T 1700,790 L 1920,810 L 1920,1080 L 0,1080 Z"
          fill="#0f172a"
          opacity="0.8"
        />

        {/* Topographic contour lines */}
        <path d="M 100,650 Q 300,600 500,630 T 900,660 Q 1100,680 1300,650 T 1700,670" />
        <path d="M 150,670 Q 350,620 550,650 T 950,680 Q 1150,700 1350,670 T 1750,690" />
        <path d="M 200,690 Q 400,640 600,670 T 1000,700 Q 1200,720 1400,690 T 1800,710" />
        <path d="M 250,710 Q 450,660 650,690 T 1050,720 Q 1250,740 1450,710 T 1850,730" />
      </g>

      {/* Data visualization ribbons - flowing geometric patterns */}
      <g opacity="0.20" stroke="#22d3ee" strokeWidth="3" fill="none">
        <path
          d="M -100,300 Q 200,250 500,320 T 1100,350 Q 1400,380 1700,340 T 2000,370"
          strokeDasharray="10 20"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="30"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M -100,400 Q 250,350 600,420 T 1200,450 Q 1500,480 1800,440 T 2100,470"
          strokeDasharray="15 25"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="40"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M -100,500 Q 300,450 700,520 T 1300,550 Q 1600,580 1900,540 T 2200,570"
          strokeDasharray="20 30"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="50"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Geometric particle system - dot matrix pattern */}
      <g opacity="0.06" fill="#0891B2">
        {Array.from({ length: 80 }).map((_, i) => {
          const x = (i % 20) * 100 + 50;
          const y = Math.floor(i / 20) * 150 + 100;
          const delay = i * 0.05;
          return (
            <circle key={i} cx={x} cy={y} r="2">
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </g>

      {/* Floating abstract Alpine peaks - layered depth */}
      <g opacity="0.25" fill="#22d3ee">
        <path
          d="M 300,500 L 380,350 L 460,500 Z"
          filter="url(#softBlur)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M 800,600 L 900,400 L 1000,600 Z"
          opacity="0.08"
          filter="url(#softBlur)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-15; 0,0"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M 1400,550 L 1520,320 L 1640,550 Z"
          opacity="0.1"
          filter="url(#softBlur)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-12; 0,0"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Accent glow overlays */}
      <rect width="1920" height="400" fill="url(#glacierGlow)" />
      <rect y="680" width="1920" height="400" fill="url(#horizonGold)" />

      {/* Subtle grain texture overlay for organic feel */}
      <rect width="1920" height="1080" fill="url(#grainTexture)" opacity="0.03" />
      <defs>
        <pattern id="grainTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="1" height="1" fill="#ffffff" opacity="0.5" />
          <rect x="2" y="2" width="1" height="1" fill="#000000" opacity="0.5" />
        </pattern>
      </defs>
    </svg>
  );
}
