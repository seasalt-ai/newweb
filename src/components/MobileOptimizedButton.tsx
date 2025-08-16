import React from 'react';
import { cn } from '../utils/cn';

interface MobileOptimizedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const MobileOptimizedButton: React.FC<MobileOptimizedButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  href,
  target,
  rel,
  type = 'button'
}) => {
  const baseClasses = cn(
    // Base styles
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'active:scale-95 touch-action-manipulation',
    // Mobile optimization
    'min-h-touch min-w-touch',
    'select-none',
    // Disabled state
    disabled && 'opacity-50 cursor-not-allowed',
    // Loading state
    loading && 'cursor-wait',
    // Full width
    fullWidth && 'w-full'
  );

  const sizeClasses = {
    'sm': 'px-3 py-2 text-sm',
    'md': 'px-4 py-3 text-base sm:px-6 sm:py-2 sm:text-sm',
    'lg': 'px-6 py-4 text-lg sm:px-8 sm:py-3 sm:text-base'
  };

  const variantClasses = {
    'primary': cn(
      'bg-blue-600 text-white shadow-md',
      'hover:bg-blue-700 focus:ring-blue-500',
      'active:bg-blue-800'
    ),
    'secondary': cn(
      'bg-gray-600 text-white shadow-md',
      'hover:bg-gray-700 focus:ring-gray-500',
      'active:bg-gray-800'
    ),
    'outline': cn(
      'border-2 border-blue-600 text-blue-600 bg-transparent',
      'hover:bg-blue-50 focus:ring-blue-500',
      'active:bg-blue-100'
    ),
    'ghost': cn(
      'text-gray-700 bg-transparent',
      'hover:bg-gray-100 focus:ring-gray-500',
      'active:bg-gray-200'
    )
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const buttonContent = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {buttonContent}
    </button>
  );
};

export default MobileOptimizedButton;
