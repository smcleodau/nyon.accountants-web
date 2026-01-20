'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section - Mesa.dev Style with Edge Border */}
      <section className="relative min-h-screen bg-white p-2 md:p-3">
        {/* Browser Window */}
        <div className="relative h-screen min-h-[600px] bg-[#f6f6f6] rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
          {/* Hero Content Area */}
          <div className="relative h-full overflow-hidden">
            {/* Hero Video with Parallax */}
            <div
              className="absolute inset-0 z-0"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center"
              >
                <source src="/images/hero/hero-video.mp4" type="video/mp4" />
              </video>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24">
              <div className="max-w-3xl space-y-6 md:space-y-8 animate-fadeIn">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 md:w-12 bg-[#F59E42]" />
                  <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#F59E42] uppercase">
                    Precision Accounting
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Elevated financial clarity
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Real-time insights and strategic guidance from the heights of financial excellence.
                  Serving ambitious UK businesses from London, Manchester, and Edinburgh.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                  <Link
                    href="/contact"
                    className="group px-6 md:px-8 py-3 md:py-4 bg-[#09f] text-white font-semibold rounded-lg text-center transition-all duration-300 hover:bg-[#0af] hover:shadow-[0_20px_60px_rgba(0,153,255,0.4)] hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                      Schedule Consultation
                      <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>

                  <Link
                    href="/services"
                    className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 text-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm md:text-base"
                  >
                    View Services
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4 md:pt-8 text-xs md:text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F59E42]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Big 4 Expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F59E42]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <span>3-Day Close</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F59E42]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AI-Enhanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics - Topographic Pattern */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#f9f6f6] to-white">
        {/* Decorative Topographic Lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M 0,300 Q 250,250 500,280 T 1000,300" stroke="#0891B2" strokeWidth="1" fill="none" />
            <path d="M 0,320 Q 250,270 500,300 T 1000,320" stroke="#0891B2" strokeWidth="1" fill="none" />
            <path d="M 0,340 Q 250,290 500,320 T 1000,340" stroke="#0891B2" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {[
              { value: '3', unit: 'Days', label: 'Month-End Close', color: '#F59E42' },
              { value: '4', unit: 'Hours', label: 'Response Time', color: '#0891B2' },
              { value: '82', unit: 'NPS', label: 'Client Score', color: '#ed874a' },
              { value: '£32M', unit: '', label: 'Annual Revenue', color: '#09f' },
            ].map((metric, i) => (
              <div
                key={metric.label}
                className="text-center space-y-2 animate-slideUp"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="text-6xl md:text-7xl font-bold"
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    color: metric.color
                  }}
                >
                  {metric.value}
                  {metric.unit && <span className="text-3xl md:text-4xl ml-2">{metric.unit}</span>}
                </div>
                <div className="text-sm text-[#666] font-medium tracking-wider uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions - Asymmetric Layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#0891B2]" />
              <span className="text-sm font-medium tracking-[0.2em] text-[#0891B2] uppercase">
                Our Approach
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#0f0f0f] leading-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Clarity from<br />elevation
            </h2>
          </div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Speed',
                description: '3-day close gives you agility to act while competitors wait. Real-time dashboards, decisive action.',
                color: '#F59E42',
                icon: '⚡',
              },
              {
                title: 'Precision',
                description: 'Crystal-clear visibility into your financials. Zero surprises. Every number tells a story.',
                color: '#0891B2',
                icon: '🎯',
              },
              {
                title: 'Intelligence',
                description: 'AI-powered platform amplifies expertise, never replaces it. Technology meets human judgment.',
                color: '#09f',
                icon: '🧠',
              },
              {
                title: 'Expertise',
                description: 'Big 4 pedigree with 15+ years average experience. We\'ve seen it all, we know the path.',
                color: '#ed874a',
                icon: '🏔️',
              },
              {
                title: 'Partnership',
                description: 'Proactive strategic guidance. We anticipate needs before you ask. Your success is our summit.',
                color: '#0891B2',
                icon: '🤝',
              },
              {
                title: 'Transparency',
                description: 'Clear pricing, clear processes, clear communication. No hidden fees, no surprises.',
                color: '#F59E42',
                icon: '☀️',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-[#fdf0e8] hover:bg-white border border-transparent hover:border-[#F59E42]/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(245,158,66,0.1)] hover:-translate-y-2"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3
                  className="text-2xl font-bold mb-4 text-[#0f0f0f]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#666] leading-relaxed">
                  {item.description}
                </p>
                <div
                  className="mt-6 h-1 w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Grid with Hover Effects */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f9f6f6]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#09f]" />
              <span className="text-sm font-medium tracking-[0.2em] text-[#09f] uppercase">
                Services
              </span>
              <div className="h-px w-12 bg-[#09f]" />
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#0f0f0f]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Comprehensive expertise
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Accounting & Advisory',
                price: '£2.5K-6K/mo',
                features: [
                  'Monthly management accounts',
                  'Multi-entity consolidation',
                  'Real-time dashboards',
                  '5-day close',
                ],
                color: '#F59E42',
              },
              {
                title: 'Tax Strategy',
                price: 'From £5K',
                features: [
                  'Corporation tax planning',
                  'R&D tax credits',
                  'International tax',
                  'VAT/MTD compliance',
                ],
                color: '#0891B2',
              },
              {
                title: 'Audit & Assurance',
                price: 'From £25K',
                features: [
                  'Statutory audits',
                  'SOC 2 Type II',
                  'Internal controls',
                  'Quality of earnings',
                ],
                color: '#ed874a',
              },
              {
                title: 'Fractional CFO',
                price: '£8K-25K/mo',
                features: [
                  'Strategic planning',
                  'Fundraising support',
                  'Board presentations',
                  'M&A modeling',
                ],
                color: '#09f',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-white hover:bg-[#fdf0e8] border border-[#999]/10 hover:border-[#F59E42]/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,15,15,0.1)] hover:-translate-y-2"
              >
                <div
                  className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                    fontFamily: 'var(--font-jetbrains-mono)'
                  }}
                >
                  {service.price}
                </div>

                <h3
                  className="text-xl font-bold mb-6 text-[#0f0f0f]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {service.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-[#666] flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.color }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="group/link text-[#0f0f0f] hover:text-[#09f] font-semibold transition-colors inline-flex items-center gap-2 text-sm"
                >
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width with Pattern */}
      <section className="relative py-32 md:py-48 bg-[#0f0f0f] overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              {[
                { cx: 88.31, cy: 267.94, r: 92.31 },
                { cx: 322.06, cy: 98.00, r: 102.92 },
                { cx: 83.08, cy: 350.46, r: 124.84 },
                { cx: 86.58, cy: 42.71, r: 111.09 },
                { cx: 345.66, cy: 342.86, r: 140.58 },
                { cx: 821.49, cy: 267.43, r: 124.44 },
                { cx: 983.08, cy: 387.68, r: 120.95 },
                { cx: 211.83, cy: 389.15, r: 139.45 },
                { cx: 307.36, cy: 371.76, r: 68.91 },
                { cx: 281.46, cy: 45.62, r: 83.07 },
                { cx: 668.33, cy: 48.71, r: 65.46 },
                { cx: 613.58, cy: 380.85, r: 144.28 },
                { cx: 890.52, cy: 332.26, r: 138.70 },
                { cx: 344.21, cy: 129.63, r: 132.34 },
                { cx: 647.41, cy: 111.21, r: 128.37 },
                { cx: 833.22, cy: 266.13, r: 107.91 },
                { cx: 980.03, cy: 21.47, r: 100.17 },
                { cx: 478.06, cy: 388.46, r: 79.60 },
                { cx: 0.49, cy: 216.66, r: 56.31 },
                { cx: 744.09, cy: 193.53, r: 59.64 },
              ].map((circle, i) => (
                <circle
                  key={i}
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="none"
                  stroke="#F59E42"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ready to elevate your financial clarity?
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
              Schedule a consultation and discover the view from the summit.
            </p>
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-block px-12 py-5 bg-[#09f] text-white text-lg font-semibold rounded-lg hover:bg-[#0af] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,153,255,0.5)] hover:-translate-y-1"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
