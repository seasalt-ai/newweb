#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes for terminal output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function loadLocaleFiles() {
  const localesDir = join(__dirname, '../src/i18n/locales');
  const files = readdirSync(localesDir).filter(file => file.endsWith('.json'));
  
  const locales = {};
  
  for (const file of files) {
    const locale = file.replace('.json', '');
    try {
      const content = readFileSync(join(localesDir, file), 'utf8');
      const data = JSON.parse(content);
      locales[locale] = flattenObject(data);
    } catch (error) {
      console.error(`${colors.red}Error reading ${file}: ${error.message}${colors.reset}`);
    }
  }
  
  return locales;
}

// Flatten nested object into dot notation keys
function flattenObject(obj, prefix = '') {
  const flattened = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(flattened, flattenObject(obj[key], newKey));
      } else {
        flattened[newKey] = obj[key];
      }
    }
  }
  
  return flattened;
}

function analyzeTranslations() {
  console.log(`${colors.bold}${colors.cyan}🔍 Translation Key Analysis Report${colors.reset}\n`);
  
  const locales = loadLocaleFiles();
  const localeNames = Object.keys(locales).sort();
  
  console.log(`${colors.blue}Found ${localeNames.length} locale files:${colors.reset}`);
  console.log(`${localeNames.map(name => `  ${name}`).join('\n')}\n`);
  
  // Get all unique keys across all locales
  const allKeys = new Set();
  for (const locale of localeNames) {
    Object.keys(locales[locale]).forEach(key => allKeys.add(key));
  }
  
  console.log(`${colors.green}Total unique translation keys: ${allKeys.size}${colors.reset}\n`);
  
  const report = {
    summary: {
      totalKeys: allKeys.size,
      locales: {}
    },
    missingKeys: {},
    extraKeys: {}
  };
  
  // Analyze each locale
  for (const locale of localeNames) {
    const localeKeys = Object.keys(locales[locale]);
    const missing = Array.from(allKeys).filter(key => !(key in locales[locale]));
    const completeness = ((localeKeys.length / allKeys.size) * 100).toFixed(1);
    
    report.summary.locales[locale] = {
      totalKeys: localeKeys.length,
      missingKeys: missing.length,
      completeness: `${completeness}%`
    };
    
    if (missing.length > 0) {
      report.missingKeys[locale] = missing;
    }
    
    const statusColor = parseFloat(completeness) >= 95 ? colors.green : 
                       parseFloat(completeness) >= 80 ? colors.yellow : colors.red;
    const statusIcon = parseFloat(completeness) >= 95 ? '✅' : 
                      parseFloat(completeness) >= 80 ? '⚠️' : '❌';
    
    console.log(`${colors.bold}${statusIcon} ${locale}:${colors.reset}`);
    console.log(`  Keys: ${localeKeys.length}/${allKeys.size} (${statusColor}${completeness}%${colors.reset} complete)`);
    if (missing.length > 0) {
      console.log(`  Missing: ${colors.red}${missing.length}${colors.reset} keys`);
    } else {
      console.log(`  Missing: ${colors.green}0${colors.reset} keys`);
    }
    console.log();
  }
  
  // Show most commonly missing keys
  const keyMissingCount = {};
  for (const locale of localeNames) {
    if (report.missingKeys[locale]) {
      for (const key of report.missingKeys[locale]) {
        keyMissingCount[key] = (keyMissingCount[key] || 0) + 1;
      }
    }
  }
  
  const mostMissingKeys = Object.entries(keyMissingCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
  
  if (mostMissingKeys.length > 0) {
    console.log(`${colors.bold}${colors.yellow}🎯 Top 20 Most Commonly Missing Keys:${colors.reset}`);
    for (const [key, count] of mostMissingKeys) {
      const percentage = ((count / localeNames.length) * 100).toFixed(0);
      console.log(`  ${key} ${colors.red}(missing in ${count}/${localeNames.length} locales - ${percentage}%)${colors.reset}`);
    }
    console.log();
  }
  
  // Show locales sorted by completeness
  const sortedByCompleteness = Object.entries(report.summary.locales)
    .sort((a, b) => parseFloat(b[1].completeness) - parseFloat(a[1].completeness));
  
  console.log(`${colors.bold}${colors.magenta}🏆 Locales by Completeness:${colors.reset}`);
  for (const [locale, data] of sortedByCompleteness) {
    const color = parseFloat(data.completeness) >= 95 ? colors.green : 
                  parseFloat(data.completeness) >= 80 ? colors.yellow : colors.red;
    const icon = parseFloat(data.completeness) >= 95 ? '🥇' : 
                parseFloat(data.completeness) >= 80 ? '🥈' : '🥉';
    console.log(`  ${icon} ${locale}: ${color}${data.completeness}${colors.reset} (${data.totalKeys} keys, ${data.missingKeys} missing)`);
  }
  
  return report;
}
function showDetailedDifferences(report, maxShow = 10) {
  console.log(`\n${colors.bold}${colors.blue}📋 Detailed Missing Keys by Locale:${colors.reset}`);
  
  const sortedLocales = Object.entries(report.summary.locales)
    .filter(([_, data]) => data.missingKeys > 0)
    .sort((a, b) => a[1].missingKeys - b[1].missingKeys); // Sort by fewest missing first
  
  for (const [locale, data] of sortedLocales.slice(0, 5)) { // Show top 5 most complete locales with missing keys
    if (report.missingKeys[locale]) {
      console.log(`\n${colors.magenta}🔍 ${locale.toUpperCase()} (missing ${data.missingKeys} keys):${colors.reset}`);
      report.missingKeys[locale].slice(0, maxShow).forEach(key => {
        console.log(`    ${colors.red}-${colors.reset} ${key}`);
      });
      if (report.missingKeys[locale].length > maxShow) {
        console.log(`    ${colors.yellow}... and ${report.missingKeys[locale].length - maxShow} more${colors.reset}`);
      }
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  const shouldExportJson = args.includes('--export') || args.includes('-e');
  const showDetails = args.includes('--details') || args.includes('-d');
  const helpFlag = args.includes('--help') || args.includes('-h');
  
  if (helpFlag) {
    console.log(`${colors.cyan}${colors.bold}🔍 Translation Differences Checker${colors.reset}\n`);
    console.log(`Usage: node scripts/check-translation-differences.js [options]\n`);
    console.log(`Options:`);
    console.log(`  -h, --help     Show this help message`);
    console.log(`  -e, --export   Export detailed report to JSON file`);
    console.log(`  -d, --details  Show detailed missing keys for top locales\n`);
    console.log(`This script analyzes all translation files in src/i18n/locales/ and reports:`);
    console.log(`${colors.green}✓${colors.reset} Completion statistics for each locale`);
    console.log(`${colors.yellow}⚠${colors.reset} Most commonly missing translation keys`);
    console.log(`${colors.blue}ℹ${colors.reset} Detailed breakdowns and summaries`);
    return;
  }
  
  const report = analyzeTranslations();
  
  if (showDetails) {
    showDetailedDifferences(report);
  }
  
  if (shouldExportJson) {
    const outputFile = join(__dirname, '../translation-differences-report.json');
    try {
      writeFileSync(outputFile, JSON.stringify(report, null, 2));
      console.log(`\n${colors.green}📁 Detailed report exported to: ${outputFile}${colors.reset}`);
    } catch (error) {
      console.error(`${colors.red}Error exporting report: ${error.message}${colors.reset}`);
    }
  }
  
  console.log(`\n${colors.cyan}💡 Run with --help for more options${colors.reset}`);
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

// Export functions for potential reuse
export {
  analyzeTranslations,
  flattenObject,
  loadLocaleFiles,
  showDetailedDifferences
};
