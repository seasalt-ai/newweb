# Text Overflow Utilities Guide

This guide explains how to use the text overflow utilities to handle variable translation lengths in your React components.

## Overview

When building internationalized applications, text lengths can vary significantly between languages. These utilities provide consistent solutions for handling text overflow in buttons, tables, cards, and other UI components.

## Quick Start

### Using CSS Classes Directly

```tsx
// Button with text overflow handling
<button className="btn-text-overflow">
  <span>{t('submitButton')}</span>
</button>

// Table cell with center alignment
<td className="table-cell-overflow-center">
  {t('columnHeader')}
</td>
```

### Using TypeScript Utilities

```tsx
import { getButtonTextClasses, getTableCellTextClasses } from '@/utils/textOverflow';

// Button with locale-aware overflow handling
<button className={getButtonTextClasses(buttonText, locale, 'bg-blue-500')}>
  {buttonText}
</button>

// Table cell with alignment
<td className={getTableCellTextClasses(cellText, 'center', locale)}>
  {cellText}
</td>
```

## Available CSS Classes

### Button Text Overflow
- `btn-text-overflow` - Centers text, handles word breaks and hyphens
- Use with `<span>` wrapper inside button for best results

### Table Cell Overflow
- `table-cell-overflow` - Basic cell overflow handling
- `table-cell-overflow-center` - Center-aligned cell with overflow
- `table-cell-overflow-left` - Left-aligned cell with overflow

### General Text Overflow
- `text-wrap-graceful` - Allows wrapping with word breaks and hyphens
- `text-truncate-short` - Truncates at 150px width
- `text-truncate-medium` - Truncates at 250px width
- `text-truncate-long` - Truncates at 350px width

### Multi-line Truncation
- `text-clamp-2` - Limits to 2 lines with ellipsis
- `text-clamp-3` - Limits to 3 lines with ellipsis

### Language-Specific
- `text-cjk-friendly` - Optimized for Chinese, Japanese, Korean
- `text-rtl-friendly` - Supports RTL languages (Arabic, Hebrew, etc.)

### Mobile Optimization
- `mobile-text-responsive` - Responsive text sizing for mobile
- `mobile-text-truncate` - Mobile-aware truncation

### Flexbox Helpers
- `flex-text-overflow` - Container for flex-based text overflow
  - Child `.text-content` - Main text content (flexible)
  - Child `.text-action` - Action buttons (fixed width)

## TypeScript Utilities

### Basic Functions

```tsx
import { 
  getTextOverflowClasses, 
  combineTextOverflowClasses,
  getConditionalOverflowClasses 
} from '@/utils/textOverflow';

// Get classes for a specific type
const buttonClasses = getTextOverflowClasses('button');

// Combine with existing classes
const combined = combineTextOverflowClasses('bg-blue-500 text-white', 'button');

// Conditional classes based on text length
const conditional = getConditionalOverflowClasses(longText, 'wrap-graceful', 'truncate-long');
```

### Language-Aware Functions

```tsx
import { getLanguageSpecificOverflowClasses } from '@/utils/textOverflow';

// Get classes optimized for the current locale
const classes = getLanguageSpecificOverflowClasses('zh-CN', 'wrap-graceful');
// Returns: 'text-wrap-graceful text-cjk-friendly'
```

### React Component Helpers

```tsx
import { getTextOverflowPropsClasses, TextOverflowProps } from '@/utils/textOverflow';

function MyComponent({ text, locale }: { text: string; locale: string }) {
  const classes = getTextOverflowPropsClasses({
    overflow: 'button',
    className: 'bg-blue-500 text-white',
    locale,
    text,
    mobileOptimized: true
  });
  
  return <button className={classes}>{text}</button>;
}
```

## Common Patterns

### 1. Button Components

```tsx
import { getButtonTextClasses } from '@/utils/textOverflow';

function ActionButton({ children, locale, ...props }) {
  const textContent = typeof children === 'string' ? children : '';
  
  return (
    <button 
      className={getButtonTextClasses(textContent, locale, 'bg-blue-500 hover:bg-blue-600')}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
```

### 2. Table Components

```tsx
import { getTableCellTextClasses } from '@/utils/textOverflow';

function DataTable({ data, locale }) {
  return (
    <table>
      <thead>
        <tr>
          <th className={getTableCellTextClasses('Name', 'left', locale)}>
            {t('nameColumn')}
          </th>
          <th className={getTableCellTextClasses('Status', 'center', locale)}>
            {t('statusColumn')}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td className={getTableCellTextClasses(row.name, 'left', locale)}>
              {row.name}
            </td>
            <td className={getTableCellTextClasses(row.status, 'center', locale)}>
              {row.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### 3. Card Components

```tsx
import { TEXT_OVERFLOW_CLASSES } from '@/utils/textOverflow';

function FeatureCard({ title, description }) {
  return (
    <div className="card">
      <h3 className={TEXT_OVERFLOW_CLASSES.CLAMP_2}>
        {title}
      </h3>
      <p className={TEXT_OVERFLOW_CLASSES.WRAP_GRACEFUL}>
        {description}
      </p>
    </div>
  );
}
```

### 4. Navigation Items

```tsx
import { TEXT_OVERFLOW_CLASSES } from '@/utils/textOverflow';

function NavigationItem({ label, href }) {
  return (
    <a 
      href={href}
      className={`nav-link ${TEXT_OVERFLOW_CLASSES.NAV}`}
    >
      {label}
    </a>
  );
}
```

### 5. Flex Layout with Text Overflow

```tsx
import { TEXT_OVERFLOW_CLASSES } from '@/utils/textOverflow';

function ListItem({ title, action }) {
  return (
    <div className={TEXT_OVERFLOW_CLASSES.FLEX_CONTAINER}>
      <div className="text-content">
        {title}
      </div>
      <div className="text-action">
        {action}
      </div>
    </div>
  );
}
```

## Best Practices

### 1. Choose the Right Strategy
- **Buttons**: Use `btn-text-overflow` with `<span>` wrapper
- **Table Headers**: Use `table-cell-overflow-center`
- **Table Data**: Use `table-cell-overflow-left` or `table-cell-overflow`
- **Cards**: Use `text-clamp-2` or `text-clamp-3` for titles, `text-wrap-graceful` for content
- **Navigation**: Use `nav-text-overflow` for menu items

### 2. Consider Language Requirements
- Use `text-cjk-friendly` for Chinese, Japanese, Korean
- Use `text-rtl-friendly` for Arabic, Hebrew, Persian
- Apply language-specific classes automatically with `getLanguageSpecificOverflowClasses`

### 3. Test with Long Content
- Test with longer translations (German text can be 30-40% longer)
- Test with shorter languages that might need different line heights
- Verify behavior on different screen sizes

### 4. Mobile Optimization
- Use `mobile-text-responsive` for mobile-friendly text sizing
- Use `mobile-text-truncate` for mobile-specific truncation
- Test on actual mobile devices

### 5. Accessibility
- Ensure truncated text is still accessible (consider tooltips)
- Maintain proper contrast ratios
- Test with screen readers

## Migration Guide

### From Existing Components

If you have existing components with manual overflow handling:

```tsx
// Before
<button className="px-4 py-2 bg-blue-500 text-white truncate">
  {buttonText}
</button>

// After
<button className={getButtonTextClasses(buttonText, locale, 'px-4 py-2 bg-blue-500 text-white')}>
  <span>{buttonText}</span>
</button>
```

```tsx
// Before
<td className="p-2 text-center overflow-hidden">
  {cellContent}
</td>

// After
<td className={getTableCellTextClasses(cellContent, 'center', locale, 'p-2')}>
  {cellContent}
</td>
```

### Gradual Adoption

1. Start with the most problematic components (buttons, tables)
2. Use CSS classes directly for quick fixes
3. Gradually migrate to TypeScript utilities for consistency
4. Add language-specific handling as needed

## Troubleshooting

### Common Issues

1. **Text not wrapping**: Ensure parent container allows wrapping
2. **Truncation not working**: Check for conflicting CSS width constraints
3. **Mobile issues**: Verify mobile-specific classes are applied
4. **Language issues**: Confirm locale is passed correctly to utilities

### Debug Tools

Use browser dev tools to verify:
- Applied CSS classes
- Computed styles
- Element dimensions
- Text overflow behavior

## Performance Considerations

- CSS classes are optimized for performance
- TypeScript utilities have minimal runtime overhead
- Language detection is cached where possible
- Mobile queries use efficient CSS media queries

## Browser Support

- Modern browsers (Chrome 60+, Firefox 60+, Safari 12+)
- IE11 support with polyfills for CSS Grid and Flexbox
- Mobile browsers fully supported
- CSS `line-clamp` requires `-webkit-` prefix support
