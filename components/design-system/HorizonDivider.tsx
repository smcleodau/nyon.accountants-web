import React from 'react';

interface HorizonDividerProps {
  className?: string;
}

export default function HorizonDivider({ className = '' }: HorizonDividerProps) {
  return (
    <div className={`w-full h-px my-12 md:my-16 ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-[var(--color-glacier-teal)] to-transparent opacity-50"></div>
    </div>
  );
}
