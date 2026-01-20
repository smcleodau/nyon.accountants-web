import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = false,
  className = ''
}: SectionTitleProps) {
  const alignmentClasses = centered ? 'text-center mx-auto max-w-3xl' : '';

  return (
    <div className={`mb-12 md:mb-16 ${alignmentClasses} ${className}`}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-stone-900)]"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--color-stone-600)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
