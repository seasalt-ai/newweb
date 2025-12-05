#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const dataPath = path.resolve(process.cwd(), 'zapier/data/curated-apps.json');
const raw = fs.readFileSync(dataPath, 'utf8');
const json = JSON.parse(raw);

const invalid = [];
const SAFE = /^[a-zA-Z0-9\-()+.&]+$/; // allow dashes and a few punctuation seen in data (no slashes, no spaces)
for (const app of json.apps || []) {
  const slug = String(app.slug || '');
  if (!SAFE.test(slug)) {
    invalid.push({ name: app.name, slug });
  }
}

if (invalid.length) {
  console.error('\n[check-slugs] Invalid slugs detected (forbidden characters like / or spaces):');
  for (const { name, slug } of invalid) {
    console.error(` - ${name}: ${slug}`);
  }
  console.error('\nPlease sanitize these slugs in zapier/data/curated-apps.json (e.g., replace "/" with "-").');
  process.exit(1);
}

console.log('[check-slugs] OK: all slugs valid.');
