import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'base' | 'glass' | 'bordered' | 'gradient';
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  className = '',
  variant = 'base',
  hover = false,
  style
}: CardProps) {
  const baseClasses = 'rounded-lg p-6';

  const variantClasses = {
    base: 'bg-white shadow-[var(--shadow-card)]',
    glass: 'glass-effect',
    bordered: 'bg-white border-2 border-[var(--color-stone-200)]',
    gradient: 'bg-gradient-to-br from-[var(--color-glacier-teal)] to-[var(--color-nyon-blue)] text-white',
  };

  const hoverClasses = hover
    ? 'transition-all hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`} style={style}>
      {children}
    </div>
  );
}
