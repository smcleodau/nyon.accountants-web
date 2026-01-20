import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'narrow' | 'standard' | 'wide';
}

export default function Container({
  children,
  className = '',
  maxWidth = 'wide'
}: ContainerProps) {
  const widthClasses = {
    narrow: 'max-w-3xl',    // 768px - for text-heavy content
    standard: 'max-w-5xl',  // 1024px - for standard content
    wide: 'max-w-7xl',      // 1280px - for full layouts
  };

  return (
    <div className={`container mx-auto px-4 md:px-6 ${widthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}
