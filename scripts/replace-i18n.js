#!/usr/bin/env node

/**
 * Replace script for i18n JSON files - replaces entire sections
 * Usage: node replace-i18n.js <source-file> <target-file>
 * Example: node replace-i18n.js es-whatsapp-qwen.json es.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Deep merge function - merges source into target recursively
 * Only updates fields that exist in source, keeps target's existing fields otherwise
 */
function deepMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        // If both target and source have this key as objects, merge them recursively
        if (target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
          deepMerge(target[key], source[key]);
        } else {
          // Otherwise, replace with source value
          target[key] = source[key];
        }
      } else {
        // For primitives and arrays, use source value
        target[key] = source[key];
      }
    }
  }
  return target;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('Usage: node replace-i18n.js <source-file> <target-file>');
    console.error('Example: node replace-i18n.js es-whatsapp-qwen.json es.json');
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
  
  // Merge data - only update fields that exist in source
  console.log(`Merging whatsappCoexistence fields from ${sourceFileName} into ${targetFileName}...`);
  
  if (sourceData.whatsappCoexistence) {
    if (!targetData.whatsappCoexistence) {
      targetData.whatsappCoexistence = {};
    }
    deepMerge(targetData.whatsappCoexistence, sourceData.whatsappCoexistence);
    console.log(`✓ Merged available fields into whatsappCoexistence section`);
  } else {
    console.error(`✗ Error: Source file doesn't contain whatsappCoexistence section`);
    process.exit(1);
  }
  
  // Write back to target file with pretty formatting
  try {
    fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 2) + '\n', 'utf8');
    console.log(`✓ Successfully updated ${targetFileName}`);
  } catch (err) {
    console.error(`Error writing to target file:`, err.message);
    process.exit(1);
  }
}

main();
