# Integration Redirects Generator

## Overview

This script automatically generates redirect rules for the `public/_redirects` file to ensure non-English integration pages redirect to English versions.

## Why?

Integration pages (`/integrations/*`) are English-only. To maintain consistency and avoid manually updating redirect rules when languages are added or removed, this script:

1. Reads supported languages from `src/i18n/helpers.ts`
2. Filters out English (`en`)
3. Generates redirect rules for all non-English languages
4. Updates `public/_redirects` automatically

## Usage

```bash
# Run the script manually
npm run build:redirects

# Or directly
node scripts/generate-integration-redirects.mjs
```

## When to Run

Run this script when:
- Adding a new language to `src/i18n/helpers.ts`
- Removing a language from `src/i18n/helpers.ts`
- Setting up the project for the first time

## What it Does

The script:
1. Parses `src/i18n/helpers.ts` to extract all language codes
2. Generates redirect rules in the format: `/{lang}/integrations/* /en/integrations/:splat 301!`
3. Updates the `public/_redirects` file in-place
4. Preserves other redirect rules in the file

## Output Example

```
# Redirect non-English integrations to English (integrations are English-only)
/es/integrations/* /en/integrations/:splat 301!
/zh-TW/integrations/* /en/integrations/:splat 301!
/zh-CN/integrations/* /en/integrations/:splat 301!
/ja/integrations/* /en/integrations/:splat 301!
... (all non-English languages)
```

## Maintainability

✅ **Automatic**: No manual updates needed when languages change
✅ **Safe**: Only updates the integration redirects section
✅ **Consistent**: Always in sync with supported languages

## Related Files

- `src/i18n/helpers.ts` - Source of language definitions
- `public/_redirects` - Target file for redirect rules
- `src/pages/404.astro` - Client-side redirect logic for dev mode
- `public/redirect.html` - Redirect logic for non-localized paths
