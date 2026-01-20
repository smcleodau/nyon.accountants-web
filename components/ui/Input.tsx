import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[var(--color-stone-700)] mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2.5 border border-[var(--color-stone-300)] rounded-lg focus:ring-2 focus:ring-[var(--color-glacier-teal)] focus:border-[var(--color-glacier-teal)] outline-none transition-colors ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
