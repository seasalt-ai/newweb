import React from 'react';
import { cn } from '../utils/cn';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    xs?: 1 | 2;
    sm?: 1 | 2 | 3;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4 | 5 | 6;
    xl?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  as?: React.ElementType;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  cols = { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
  gap = 'md',
  as: Component = 'div'
}) => {
  const getGridColsClass = (breakpoint: string, colCount: number | undefined) => {
    if (!colCount) return '';
    const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`;
    return `${prefix}grid-cols-${colCount}`;
  };

  const gapClasses = {
    'sm': 'gap-2 sm:gap-4',
    'md': 'gap-4 sm:gap-6',
    'lg': 'gap-6 sm:gap-8',
    'xl': 'gap-8 sm:gap-10'
  };

  const gridClasses = cn(
    'grid',
    gapClasses[gap],
    getGridColsClass('xs', cols.xs),
    getGridColsClass('sm', cols.sm),
    getGridColsClass('md', cols.md),
    getGridColsClass('lg', cols.lg),
    getGridColsClass('xl', cols.xl),
    className
  );

  return (
    <Component className={gridClasses}>
      {children}
    </Component>
  );
};

export default ResponsiveGrid;
