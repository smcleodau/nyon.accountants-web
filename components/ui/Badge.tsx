import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
  style?: React.CSSProperties;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
  style
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  const variantClasses = {
    default: 'bg-[var(--color-stone-100)] text-[var(--color-stone-700)]',
    success: 'bg-[var(--color-forest-moss)]/10 text-[var(--color-forest-moss)]',
    warning: 'bg-[var(--color-horizon-gold)]/10 text-[var(--color-horizon-gold)]',
    info: 'bg-[var(--color-glacier-teal)]/10 text-[var(--color-glacier-teal)]',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style}>
      {children}
    </span>
  );
}
