import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = false
}: GlassCardProps) {
  const hoverClasses = hover
    ? 'transition-all hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div
      className={`rounded-lg p-6 glass-effect ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
