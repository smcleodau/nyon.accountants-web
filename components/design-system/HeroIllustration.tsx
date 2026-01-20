export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 20px 60px rgba(8, 145, 178, 0.15))' }}
    >
      {/* Background subtle gradients */}
      <defs>
        {/* Alpine gradient - Glacier to Sky */}
        <linearGradient id="alpine-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#475569" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.03" />
        </linearGradient>

        {/* Glacier Teal gradient */}
        <linearGradient id="glacier-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
        </linearGradient>

        {/* Slate gradient */}
        <linearGradient id="slate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#475569" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1e293b" stopOpacity="0.6" />
        </linearGradient>

        {/* Gold accent */}
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E42" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0.7" />
        </linearGradient>

        {/* Lavender accent */}
        <linearGradient id="lavender-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.6" />
        </linearGradient>

        {/* Radial glow for depth */}
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0891B2" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background base */}
      <rect width="800" height="600" fill="url(#alpine-gradient)" />

      {/* Large abstract mountain/plateau shapes - layered depth */}
      <g opacity="0.25">
        {/* Back layer - furthest mountain */}
        <path
          d="M0,400 Q200,320 400,380 T800,340 L800,600 L0,600 Z"
          fill="url(#slate-gradient)"
        />
        {/* Middle layer */}
        <path
          d="M0,450 Q250,380 500,420 T800,400 L800,600 L0,600 Z"
          fill="url(#glacier-gradient)"
        />
        {/* Front layer - closest */}
        <path
          d="M0,500 Q300,440 600,480 T800,460 L800,600 L0,600 Z"
          fill="url(#lavender-gradient)"
        />
      </g>

      {/* Floating geometric elements - representing data, clarity, structure */}
      <g className="floating-elements">
        {/* Circle cluster - top right */}
        <circle cx="650" cy="120" r="60" fill="url(#glacier-gradient)" opacity="0.35" />
        <circle cx="680" cy="150" r="40" fill="url(#gold-gradient)" opacity="0.4" />
        <circle cx="720" cy="100" r="30" fill="url(#lavender-gradient)" opacity="0.35" />

        {/* Rectangular blocks - representing structured data */}
        <rect
          x="100"
          y="180"
          width="120"
          height="80"
          rx="8"
          fill="url(#slate-gradient)"
          opacity="0.25"
          transform="rotate(-5 160 220)"
        />
        <rect
          x="120"
          y="200"
          width="100"
          height="60"
          rx="6"
          fill="url(#glacier-gradient)"
          opacity="0.35"
          transform="rotate(-5 170 230)"
        />

        {/* Hexagons - representing AI/technology */}
        <polygon
          points="500,200 540,220 540,260 500,280 460,260 460,220"
          fill="url(#lavender-gradient)"
          opacity="0.3"
        />
        <polygon
          points="530,180 560,195 560,225 530,240 500,225 500,195"
          fill="url(#gold-gradient)"
          opacity="0.35"
        />

        {/* Line graph - representing financial data */}
        <g opacity="0.35" stroke="url(#glacier-gradient)" strokeWidth="3" fill="none">
          <path
            d="M150,350 L200,320 L250,340 L300,300 L350,310 L400,280"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data points */}
          <circle cx="150" cy="350" r="5" fill="#0891B2" />
          <circle cx="200" cy="320" r="5" fill="#0891B2" />
          <circle cx="250" cy="340" r="5" fill="#0891B2" />
          <circle cx="300" cy="300" r="5" fill="#0891B2" />
          <circle cx="350" cy="310" r="5" fill="#0891B2" />
          <circle cx="400" cy="280" r="5" fill="#0891B2" />
        </g>

        {/* Contour lines - Alpine topographic reference */}
        <g opacity="0.15" stroke="#475569" strokeWidth="1.5" fill="none">
          <ellipse cx="300" cy="250" rx="80" ry="40" />
          <ellipse cx="300" cy="250" rx="100" ry="50" />
          <ellipse cx="300" cy="250" rx="120" ry="60" />
        </g>

        {/* Abstract grid - representing structure and precision */}
        <g opacity="0.12" stroke="#0891B2" strokeWidth="1">
          <line x1="550" y1="320" x2="700" y2="320" />
          <line x1="550" y1="360" x2="700" y2="360" />
          <line x1="550" y1="400" x2="700" y2="400" />
          <line x1="580" y1="300" x2="580" y2="420" />
          <line x1="620" y1="300" x2="620" y2="420" />
          <line x1="660" y1="300" x2="660" y2="420" />
        </g>

        {/* Radial glow for atmosphere */}
        <circle cx="400" cy="300" r="200" fill="url(#glow)" />
      </g>

      {/* Subtle noise texture overlay for depth */}
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="0 0.02" />
        </feComponentTransfer>
      </filter>
      <rect width="800" height="600" filter="url(#noise)" opacity="0.3" />
    </svg>
  );
}
