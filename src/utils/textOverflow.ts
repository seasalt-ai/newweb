/**
 * Text overflow utilities for handling variable translation lengths
 * Use these helper functions to apply consistent text overflow styling
 */

export type TextOverflowType = 
  | 'button'
  | 'table-cell'
  | 'table-cell-center'
  | 'table-cell-left'
  | 'card'
  | 'nav'
  | 'badge'
  | 'wrap-graceful'
  | 'truncate-short'
  | 'truncate-medium'
  | 'truncate-long'
  | 'clamp-2'
  | 'clamp-3'
  | 'cjk'
  | 'rtl'
  | 'mobile-responsive'
  | 'mobile-truncate';

/**
 * Get the appropriate CSS classes for text overflow handling
 */
export function getTextOverflowClasses(type: TextOverflowType): string {
  const classMap: Record<TextOverflowType, string> = {
    'button': 'btn-text-overflow',
    'table-cell': 'table-cell-overflow',
    'table-cell-center': 'table-cell-overflow-center',
    'table-cell-left': 'table-cell-overflow-left',
    'card': 'card-text-overflow',
    'nav': 'nav-text-overflow',
    'badge': 'badge-text-overflow',
    'wrap-graceful': 'text-wrap-graceful',
    'truncate-short': 'text-truncate-short',
    'truncate-medium': 'text-truncate-medium',
    'truncate-long': 'text-truncate-long',
    'clamp-2': 'text-clamp-2',
    'clamp-3': 'text-clamp-3',
    'cjk': 'text-cjk-friendly',
    'rtl': 'text-rtl-friendly',
    'mobile-responsive': 'mobile-text-responsive',
    'mobile-truncate': 'mobile-text-truncate'
  };

  return classMap[type] || '';
}

/**
 * Combine text overflow classes with existing classes
 */
export function combineTextOverflowClasses(
  existingClasses: string, 
  overflowType: TextOverflowType
): string {
  const overflowClasses = getTextOverflowClasses(overflowType);
  return `${existingClasses} ${overflowClasses}`.trim();
}

/**
 * Get flexbox text overflow container classes
 */
export function getFlexTextOverflowClasses(): string {
  return 'flex-text-overflow';
}

/**
 * Apply text overflow classes conditionally based on content length
 */
export function getConditionalOverflowClasses(
  text: string, 
  shortType: TextOverflowType = 'wrap-graceful',
  longType: TextOverflowType = 'truncate-medium'
): string {
  // Threshold for considering text "long"
  const LONG_TEXT_THRESHOLD = 50;
  
  if (text.length > LONG_TEXT_THRESHOLD) {
    return getTextOverflowClasses(longType);
  }
  
  return getTextOverflowClasses(shortType);
}

/**
 * Get language-specific overflow classes
 */
export function getLanguageSpecificOverflowClasses(
  locale: string, 
  baseType: TextOverflowType = 'wrap-graceful'
): string {
  const baseClasses = getTextOverflowClasses(baseType);
  
  // CJK languages (Chinese, Japanese, Korean)
  if (['zh', 'ja', 'ko'].some(lang => locale.startsWith(lang))) {
    return `${baseClasses} text-cjk-friendly`;
  }
  
  // RTL languages (Arabic, Hebrew, etc.)
  if (['ar', 'he', 'fa', 'ur'].some(lang => locale.startsWith(lang))) {
    return `${baseClasses} text-rtl-friendly`;
  }
  
  return baseClasses;
}

/**
 * React component props interface for text overflow
 */
export interface TextOverflowProps {
  /** The type of text overflow handling */
  overflow?: TextOverflowType;
  /** Additional CSS classes */
  className?: string;
  /** Current locale for language-specific handling */
  locale?: string;
  /** Text content for conditional overflow */
  text?: string;
  /** Whether to apply mobile-specific handling */
  mobileOptimized?: boolean;
}

/**
 * Get combined classes for React component with text overflow
 */
export function getTextOverflowPropsClasses({
  overflow = 'wrap-graceful',
  className = '',
  locale,
  text,
  mobileOptimized = false
}: TextOverflowProps): string {
  let classes = className;
  
  // Add base overflow classes
  if (text && text.length > 0) {
    const overflowClasses = getConditionalOverflowClasses(text, 'wrap-graceful', overflow);
    classes = `${classes} ${overflowClasses}`;
  } else {
    classes = `${classes} ${getTextOverflowClasses(overflow)}`;
  }
  
  // Add language-specific classes
  if (locale) {
    const langClasses = getLanguageSpecificOverflowClasses(locale, overflow);
    classes = `${classes} ${langClasses}`;
  }
  
  // Add mobile optimization
  if (mobileOptimized) {
    classes = `${classes} mobile-text-responsive`;
  }
  
  return classes.trim();
}

/**
 * Common button text overflow handler
 */
export function getButtonTextClasses(
  text: string = '', 
  locale?: string, 
  additionalClasses: string = ''
): string {
  return getTextOverflowPropsClasses({
    overflow: 'button',
    className: additionalClasses,
    locale,
    text,
    mobileOptimized: true
  });
}

/**
 * Common table cell text overflow handler
 */
export function getTableCellTextClasses(
  text: string = '', 
  align: 'left' | 'center' = 'left',
  locale?: string,
  additionalClasses: string = ''
): string {
  const overflowType: TextOverflowType = align === 'center' ? 'table-cell-center' : 'table-cell-left';
  
  return getTextOverflowPropsClasses({
    overflow: overflowType,
    className: additionalClasses,
    locale,
    text
  });
}

/**
 * Export all classes for direct use
 */
export const TEXT_OVERFLOW_CLASSES = {
  BUTTON: 'btn-text-overflow',
  TABLE_CELL: 'table-cell-overflow',
  TABLE_CELL_CENTER: 'table-cell-overflow-center',
  TABLE_CELL_LEFT: 'table-cell-overflow-left',
  CARD: 'card-text-overflow',
  NAV: 'nav-text-overflow',
  BADGE: 'badge-text-overflow',
  WRAP_GRACEFUL: 'text-wrap-graceful',
  TRUNCATE_SHORT: 'text-truncate-short',
  TRUNCATE_MEDIUM: 'text-truncate-medium',
  TRUNCATE_LONG: 'text-truncate-long',
  CLAMP_2: 'text-clamp-2',
  CLAMP_3: 'text-clamp-3',
  CJK_FRIENDLY: 'text-cjk-friendly',
  RTL_FRIENDLY: 'text-rtl-friendly',
  MOBILE_RESPONSIVE: 'mobile-text-responsive',
  MOBILE_TRUNCATE: 'mobile-text-truncate',
  FLEX_CONTAINER: 'flex-text-overflow'
} as const;
