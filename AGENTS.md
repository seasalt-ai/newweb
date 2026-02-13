# AGENTS.md - Seasalt.ai Website Development Guide

This document provides coding guidelines and build commands for agentic development in this Astro-based website project.

## Build and Development Commands

```bash
npm run dev              # Start development server at localhost:4321
npm run build            # Production build (includes redirects and sitemap generation)
npm run build:sitemap    # Generate sitemap only
npm run build:redirects  # Generate integration redirects only
npm run preview          # Preview production build locally
npm run check            # Check slugs and run Astro type checking
npm astro check          # Run Astro type checker only
```

### Testing
No formal test suite. Use `npm run check` to validate slugs and types, or `npm run dev` for manual testing.

## Tech Stack
- **Framework**: Astro 5.x with React integration (@astrojs/react)
- **Styling**: Tailwind CSS 4.x (@tailwindcss/vite)
- **Language**: TypeScript (strict mode, extends astro/tsconfigs/strict)
- **i18n**: Custom system supporting 20 languages (see `src/i18n/helpers.ts`)
- **Icons**: lucide-react, react-icons

## Code Style Guidelines

### File Organization
```
src/
├── components/          # Astro (.astro) and React (.tsx) components
├── pages/               # Route pages with [lang] dynamic segments
├── layouts/             # Page layout templates
├── utils/               # Utility functions (export functions, not components)
├── types/               # TypeScript type definitions
├── i18n/                # Internationalization helpers and locales
└── config/              # Configuration data
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ContactSalesForm`, `HeroAnimation`)
- **Component files**: PascalCase matching component name
- **Interfaces**: PascalCase, often with Props suffix (e.g., `ContactSalesFormProps`)
- **Functions**: camelCase (e.g., `generateSEOData`, `parseProductPath`)
- **Variables**: camelCase (e.g., `formData`, `isSubmitting`)
- **Constants**: UPPER_SNAKE_CASE or PascalCase (e.g., `languages`, `supportedLocales`)

### Import Organization
Group imports: React hooks first, external libraries, internal modules, then types.

```tsx
import { useState, useEffect } from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';
import { generateSEOData } from '../utils/productPageHelper';
import type { ProductType } from '../types/products';
```

### TypeScript Guidelines
- **Strict typing enabled**: All functions must have explicit types
- **Interfaces**: Use interfaces for object shapes, especially component props
- **Type imports**: Import types explicitly with `import type { ... }`
- **Optional chaining**: Use `?.` for safe property access
- **Avoid**: Type assertions when possible; use type guards instead
- **JSDoc comments**: Add descriptive comments above utility functions

```tsx
interface ContactSalesFormProps {
  lang: SupportedLanguage;
}

const ContactSalesForm = ({ lang }: ContactSalesFormProps) => {
  const { t, isLoading } = useTranslation(lang);
  return <div>{/* JSX */}</div>;
};
export default ContactSalesForm;
```

### Component Patterns

#### Astro Components (.astro)
- Use frontmatter (---) for imports and server-side logic
- Export props via `export interface Props { ... }`
- Use `Astro.props` to access props
- Use `<script>` tags for client-side interactivity

```astro
---
import { languages } from '../i18n/helpers';
export interface Props {
  currentPath?: string;
}
const { currentPath = '/' } = Astro.props;
---
<div>{/* HTML template */}</div>
```

#### React Components (.tsx)
- Use functional components with hooks
- Explicitly type all props and state
- Use `React.FC` or explicit function declarations
- Event handlers: `React.FormEvent`, `React.ChangeEvent`, etc.
- Icons from lucide-react for consistency

```tsx
interface FormData { firstName: string; email: string; }
const ContactSalesForm = ({ lang }: ContactSalesFormProps) => {
  const [formData, setFormData] = useState<FormData>({ firstName: '', email: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return <form>{/* JSX */}</form>;
};
export default ContactSalesForm;
```

### Styling with Tailwind CSS
- Use Tailwind utility classes for all styling
- No custom CSS files (use inline or utility classes)
- Mobile-first responsive design (`sm:`, `md:`, `lg:`)
- Spacing: Use Tailwind spacing scale (`p-4`, `m-2`, `gap-6`)
- Colors: blue-600 for primary, gray-xxx for neutrals
- Transitions: `transition-colors duration-200` for smooth UX

### Error Handling
- Wrap async operations in try-catch
- Consider React error boundaries for component trees
- Use conditional checks with optional chaining
- Add debug logs with descriptive comments for development

```tsx
try {
  const translations = await import(`./locales/${langKey}.json`);
} catch (error) {
  console.warn(`Failed to load translations for ${langKey}:`, error);
  return fallbackTranslations;
}
```

### i18n (Internationalization)
- Supported languages: 20 languages defined in `src/i18n/helpers.ts`
- Use SupportedLanguage type from i18n helpers
- Translation keys: Use dot notation (e.g., `'seax.contactSales.form.title'`)
- Always provide fallback values for translations
- Use `getLocalizedPath()` and `extractLangFromPath()` utilities

```tsx
const { t } = await getTranslationHelpers(lang);
const title = t('seax.contactSales.form.title') || 'Contact Sales';
```

### Exports and Module Structure
- Default exports: Main components and utilities
- Named exports: Multiple exports from a single file
- Barrel exports: Export related types from `types/*.ts` files
- Avoid circular dependencies

## Common Patterns

### Async Data Loading
```astro
---
export async function getStaticPaths() {
  return supportedLocales.map((lang) => ({ params: { lang } }));
}
const { lang } = Astro.params;
---
```

### Conditional Rendering
```tsx
const content = t?.('key') || 'Default value';
{isLoading ? <LoadingSkeleton /> : <Component />}
```

## Best Practices

1. **Type Safety**: Never use `any`. Use `unknown` if type is uncertain
2. **Performance**: Leverage Astro's static generation where possible
3. **Accessibility**: Include ARIA labels on interactive elements
4. **Code Reuse**: Create utility functions for repeated logic
5. **Component Size**: Keep components focused; split large ones
6. **Comments**: Add JSDoc for utility functions, not for obvious code
7. **Error Messages**: Provide user-friendly error messages with fallbacks

## Notes

- No test framework configured. Use manual testing and `npm run check`
- Project uses static site generation - no server-side API routes
- All 20 languages generated as static paths in page components
- SEO schema data generated dynamically via utilities in `src/config/`
- Blog content managed in `src/content/blog/` with language-specific folders
