#!/usr/bin/env node

/**
 * Merge script for i18n JSON files
 * Usage: node merge-i18n.js <source-file> <target-file>
 * Example: node merge-i18n.js en-whatsapp.json en.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function mergeDeep(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        // If the key doesn't exist in target or target[key] is not an object, create it
        if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
          target[key] = {};
        }
        mergeDeep(target[key], source[key]);
      } else {
        // For primitives and arrays, simply assign
        target[key] = source[key];
      }
    }
  }
  return target;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('Usage: node merge-i18n.js <source-file> <target-file>');
    console.error('Example: node merge-i18n.js en-whatsapp.json en.json');
    process.exit(1);
  }
  
  const [sourceFileName, targetFileName] = args;
  const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
  
  const sourcePath = path.join(localesDir, sourceFileName);
  const targetPath = path.join(localesDir, targetFileName);
  
  // Check if files exist
  if (!fs.existsSync(sourcePath)) {
    console.error(`Error: Source file not found: ${sourcePath}`);
    process.exit(1);
  }
  
  if (!fs.existsSync(targetPath)) {
    console.error(`Error: Target file not found: ${targetPath}`);
    process.exit(1);
  }
  
  // Read files
  let sourceData, targetData;
  
  try {
    sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
  } catch (err) {
    console.error(`Error parsing source file ${sourceFileName}:`, err.message);
    process.exit(1);
  }
  
  try {
    targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
  } catch (err) {
    console.error(`Error parsing target file ${targetFileName}:`, err.message);
    process.exit(1);
  }
  
  // Merge data
  console.log(`Merging ${sourceFileName} into ${targetFileName}...`);
  const mergedData = mergeDeep(targetData, sourceData);
  
  // Write back to target file with pretty formatting
  try {
    fs.writeFileSync(targetPath, JSON.stringify(mergedData, null, 2) + '\n', 'utf8');
    console.log(`✓ Successfully merged ${sourceFileName} into ${targetFileName}`);
  } catch (err) {
    console.error(`Error writing to target file:`, err.message);
    process.exit(1);
  }
}

main();
