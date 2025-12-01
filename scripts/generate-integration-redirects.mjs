#!/usr/bin/env node

/**
 * Generate integration redirect rules for _redirects file
 * This ensures redirects stay in sync with supported languages
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read helpers.ts to extract supported languages
const helpersPath = join(__dirname, '../src/i18n/helpers.ts');
const helpersContent = readFileSync(helpersPath, 'utf-8');

// Extract language codes from the languages object
// Match the entire object including nested content
const languagesMatch = helpersContent.match(/export const languages = \{([\s\S]*?)\n\} as const;/);
if (!languagesMatch) {
  console.error('Could not find languages object in helpers.ts');
  process.exit(1);
}

const languagesObj = languagesMatch[1];
const langCodes = [];
// Match language codes like 'en', 'es', 'zh-TW', etc.
const langMatches = languagesObj.matchAll(/^\s*'([^']+)':/gm);
for (const match of langMatches) {
  const code = match[1];
  if (code !== 'en') {
    langCodes.push(code);
  }
}

console.log(`Found ${langCodes.length} non-English languages:`, langCodes.join(', '));

// Generate redirect rules
const redirectRules = langCodes
  .map(lang => `/${lang}/integrations/* /en/integrations/:splat 301!`)
  .join('\n');

// Read current _redirects file
const redirectsPath = join(__dirname, '../public/_redirects');
const currentRedirects = readFileSync(redirectsPath, 'utf-8');

// Find the integration redirects section
const marker = '# Redirect non-English integrations to English (integrations are English-only)';
const markerIndex = currentRedirects.indexOf(marker);

if (markerIndex === -1) {
  console.error('Could not find integration redirects marker in _redirects file');
  process.exit(1);
}

// Find the end of the integration redirects section (next comment or end of file)
const afterMarker = currentRedirects.substring(markerIndex + marker.length);
const nextSectionMatch = afterMarker.match(/\n\n#/);
const endOfSection = nextSectionMatch 
  ? markerIndex + marker.length + nextSectionMatch.index 
  : currentRedirects.length;

// Reconstruct the file
const before = currentRedirects.substring(0, markerIndex + marker.length);
const after = currentRedirects.substring(endOfSection);
const newContent = before + '\n' + redirectRules + after;

// Write back
writeFileSync(redirectsPath, newContent, 'utf-8');

console.log('✅ Successfully updated _redirects file with integration redirects');
console.log(`   Generated ${langCodes.length} redirect rules`);
