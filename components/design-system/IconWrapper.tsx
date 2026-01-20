import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outlined' | 'filled';
  className?: string;
}

export default function IconWrapper({
  children,
  size = 'md',
  variant = 'default',
  className = ''
}: IconWrapperProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const variantClasses = {
    default: 'text-[var(--color-glacier-teal)]',
    outlined: 'text-[var(--color-glacier-teal)] border-2 border-[var(--color-glacier-teal)] rounded-lg p-2',
    filled: 'text-white bg-[var(--color-glacier-teal)] rounded-lg p-2',
  };

  return (
    <div className={`inline-flex items-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
