import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'frost' | 'gradient';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  id
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-[var(--color-stone-50)]',
    dark: 'bg-[var(--color-nyon-dark)] text-white',
    frost: 'bg-[var(--color-alpine-frost)]',
    gradient: 'bg-gradient-to-br from-[var(--color-stone-50)] via-[var(--color-alpine-frost)] to-[var(--color-stone-50)]',
  };

  return (
    <section
      id={id}
      className={`w-full py-20 md:py-32 ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
