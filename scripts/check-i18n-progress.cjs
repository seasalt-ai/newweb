#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const LOCALES_DIR = 'public/locales';
const BASE_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = [
  'ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 
  'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'
];

/**
 * Get all keys from a nested object
 */
function getAllKeys(obj, prefix = '') {
  let keys = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const currentKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys = keys.concat(getAllKeys(obj[key], currentKey));
      } else {
        keys.push(currentKey);
      }
    }
  }
  
  return keys;
}

/**
 * Load and parse a locale file
 */
function loadLocale(language) {
  const filePath = path.join(LOCALES_DIR, `${language}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error parsing ${language}.json:`, error.message);
    return null;
  }
}

/**
 * Calculate completion percentage
 */
function calculateCompletion(baseKeys, targetKeys) {
  const totalKeys = baseKeys.length;
  const translatedKeys = targetKeys.length;
  return Math.round((translatedKeys / totalKeys) * 100);
}

/**
 * Find missing keys
 */
function findMissingKeys(baseKeys, targetKeys) {
  return baseKeys.filter(key => !targetKeys.includes(key));
}

/**
 * Main function
 */
function main() {
  console.log('🌍 i18n Translation Progress Report');
  console.log('=====================================\n');
  
  // Load base language
  const baseLocale = loadLocale(BASE_LANGUAGE);
  if (!baseLocale) {
    console.error(`❌ Could not load base language file: ${BASE_LANGUAGE}.json`);
    process.exit(1);
  }
  
  const baseKeys = getAllKeys(baseLocale);
  console.log(`📊 Base language (${BASE_LANGUAGE}): ${baseKeys.length} translation keys\n`);
  
  // Check each supported language
  const results = [];
  
  for (const language of SUPPORTED_LANGUAGES) {
    if (language === BASE_LANGUAGE) continue;
    
    const locale = loadLocale(language);
    
    if (!locale) {
      results.push({
        language,
        status: 'MISSING',
        completion: 0,
        translated: 0,
        missing: baseKeys.length,
        missingKeys: baseKeys
      });
      continue;
    }
    
    const targetKeys = getAllKeys(locale);
    const completion = calculateCompletion(baseKeys, targetKeys);
    const missingKeys = findMissingKeys(baseKeys, targetKeys);
    
    results.push({
      language,
      status: completion === 100 ? 'COMPLETE' : completion > 50 ? 'PARTIAL' : 'MINIMAL',
      completion,
      translated: targetKeys.length,
      missing: missingKeys.length,
      missingKeys
    });
  }
  
  // Sort by completion percentage (descending)
  results.sort((a, b) => b.completion - a.completion);
  
  // Display results
  console.log('📈 Translation Status:\n');
  console.log('Lang  | Status   | Progress | Translated | Missing | File Status');
  console.log('------|----------|----------|------------|---------|------------');
  
  for (const result of results) {
    const statusIcon = result.status === 'COMPLETE' ? '✅' : 
                      result.status === 'PARTIAL' ? '⚠️' : 
                      result.status === 'MISSING' ? '❌' : '🔸';
    
    const fileStatus = result.status === 'MISSING' ? 'Missing' : 'Exists';
    
    console.log(
      `${result.language.padEnd(5)} | ${statusIcon} ${result.status.padEnd(6)} | ${result.completion.toString().padStart(6)}% | ${result.translated.toString().padStart(10)} | ${result.missing.toString().padStart(7)} | ${fileStatus}`
    );
  }
  
  // Summary statistics
  const completeCount = results.filter(r => r.status === 'COMPLETE').length;
  const partialCount = results.filter(r => r.status === 'PARTIAL').length;
  const minimalCount = results.filter(r => r.status === 'MINIMAL').length;
  const missingCount = results.filter(r => r.status === 'MISSING').length;
  
  console.log('\n📊 Summary:');
  console.log(`• Complete translations: ${completeCount}/${results.length}`);
  console.log(`• Partial translations: ${partialCount}/${results.length}`);
  console.log(`• Minimal translations: ${minimalCount}/${results.length}`);
  console.log(`• Missing files: ${missingCount}/${results.length}`);
  
  // Show next steps
  console.log('\n🎯 Next Steps:');
  
  // Prioritize missing files first
  const missingFiles = results.filter(r => r.status === 'MISSING');
  if (missingFiles.length > 0) {
    console.log('1. Create missing locale files:');
    missingFiles.forEach(result => {
      console.log(`   - ${LOCALES_DIR}/${result.language}.json`);
    });
  }
  
  // Then show most complete files that need finishing
  const nearComplete = results.filter(r => r.completion >= 80 && r.completion < 100);
  if (nearComplete.length > 0) {
    console.log(`${missingFiles.length > 0 ? '2' : '1'}. Complete near-finished translations:`);
    nearComplete.forEach(result => {
      console.log(`   - ${result.language}.json (${result.completion}% complete, ${result.missing} keys missing)`);
    });
  }
  
  // Show files with minimal translations
  const minimal = results.filter(r => r.completion < 50 && r.status !== 'MISSING');
  if (minimal.length > 0) {
    const stepNum = (missingFiles.length > 0 ? 2 : 1) + (nearComplete.length > 0 ? 1 : 0);
    console.log(`${stepNum}. Expand minimal translations (${minimal.length} files need major work):`);
    minimal.slice(0, 5).forEach(result => {
      console.log(`   - ${result.language}.json (${result.completion}% complete)`);
    });
    if (minimal.length > 5) {
      console.log(`   ... and ${minimal.length - 5} more`);
    }
  }
  
  console.log('\n✨ Run this script regularly to track progress!');
}

// Run the script
main();
