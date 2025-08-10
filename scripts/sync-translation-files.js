#!/usr/bin/env node

/**
 * Translation Files Synchronization Script
 * 
 * This script synchronizes English and Traditional Chinese translation files
 * to ensure they have identical key structures. It:
 * - Identifies keys that exist in one file but not the other
 * - Uses Google Translate API or creates placeholders for missing translations
 * - Generates synchronized files with identical key structures
 * - Creates backups and detailed reports
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  enFile: 'public/locales/en.json',
  zhtwFile: 'public/locales/zh-TW.json',
  outputDir: 'translation-sync',
  backupSuffix: '.pre-sync-backup'
};

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

class TranslationSynchronizer {
  constructor() {
    this.enData = {};
    this.zhtwData = {};
    this.enFlatKeys = {};
    this.zhtwFlatKeys = {};
    this.missingInEn = [];
    this.missingInZhtw = [];
    this.stats = {
      totalEnKeys: 0,
      totalZhtwKeys: 0,
      keysAddedToEn: 0,
      keysAddedToZhtw: 0,
      finalKeyCount: 0
    };
  }

  // Load both translation files
  loadTranslationFiles() {
    console.log(`${colors.blue}📁 Loading translation files...${colors.reset}`);
    
    try {
      // Load English file
      const enContent = fs.readFileSync(CONFIG.enFile, 'utf8');
      this.enData = JSON.parse(enContent);
      this.enFlatKeys = this.flattenObject(this.enData);
      this.stats.totalEnKeys = Object.keys(this.enFlatKeys).length;
      console.log(`${colors.green}✓${colors.reset} Loaded English: ${this.stats.totalEnKeys} keys`);
      
      // Load Traditional Chinese file
      const zhtwContent = fs.readFileSync(CONFIG.zhtwFile, 'utf8');
      this.zhtwData = JSON.parse(zhtwContent);
      this.zhtwFlatKeys = this.flattenObject(this.zhtwData);
      this.stats.totalZhtwKeys = Object.keys(this.zhtwFlatKeys).length;
      console.log(`${colors.green}✓${colors.reset} Loaded Traditional Chinese: ${this.stats.totalZhtwKeys} keys`);
      
    } catch (error) {
      throw new Error(`Failed to load translation files: ${error.message}`);
    }
  }

  // Flatten nested object to dot notation keys
  flattenObject(obj, prefix = '') {
    const flattened = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(flattened, this.flattenObject(value, newKey));
      } else {
        flattened[newKey] = value;
      }
    }
    
    return flattened;
  }

  // Convert flat keys back to nested object
  unflattenObject(flatObj) {
    const result = {};
    
    for (const [key, value] of Object.entries(flatObj)) {
      const keys = key.split('.');
      let current = result;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!(k in current)) {
          current[k] = {};
        }
        current = current[k];
      }
      
      current[keys[keys.length - 1]] = value;
    }
    
    return result;
  }

  // Find keys that exist in one file but not the other
  findMissingKeys() {
    console.log(`${colors.blue}🔍 Analyzing key differences...${colors.reset}`);
    
    const enKeys = new Set(Object.keys(this.enFlatKeys));
    const zhtwKeys = new Set(Object.keys(this.zhtwFlatKeys));
    
    // Find keys missing in English
    for (const key of zhtwKeys) {
      if (!enKeys.has(key)) {
        this.missingInEn.push(key);
      }
    }
    
    // Find keys missing in Traditional Chinese
    for (const key of enKeys) {
      if (!zhtwKeys.has(key)) {
        this.missingInZhtw.push(key);
      }
    }
    
    console.log(`${colors.cyan}Keys missing in English: ${this.missingInEn.length}${colors.reset}`);
    console.log(`${colors.cyan}Keys missing in Traditional Chinese: ${this.missingInZhtw.length}${colors.reset}`);
    
    if (this.missingInEn.length > 0) {
      console.log(`${colors.yellow}Missing in English (first 10):${colors.reset}`);
      this.missingInEn.slice(0, 10).forEach(key => {
        console.log(`  - ${key}`);
      });
      if (this.missingInEn.length > 10) {
        console.log(`  ... and ${this.missingInEn.length - 10} more`);
      }
    }
    
    if (this.missingInZhtw.length > 0) {
      console.log(`${colors.yellow}Missing in Traditional Chinese (first 10):${colors.reset}`);
      this.missingInZhtw.slice(0, 10).forEach(key => {
        console.log(`  - ${key}`);
      });
      if (this.missingInZhtw.length > 10) {
        console.log(`  ... and ${this.missingInZhtw.length - 10} more`);
      }
    }
  }

  // Simple translation function (placeholder-based for now)
  translateText(text, fromLang, toLang) {
    // For now, create meaningful placeholders
    // In a production environment, you would integrate with Google Translate API or similar
    
    if (fromLang === 'en' && toLang === 'zh-TW') {
      // English to Traditional Chinese - create placeholder
      return `[需要翻譯] ${text}`;
    } else if (fromLang === 'zh-TW' && toLang === 'en') {
      // Traditional Chinese to English - create placeholder
      return `[Translation needed] ${text}`;
    }
    
    return text;
  }

  // Add missing keys to both files
  synchronizeKeys() {
    console.log(`${colors.blue}🔄 Synchronizing translation keys...${colors.reset}`);
    
    // Add missing keys to English file
    for (const key of this.missingInEn) {
      const zhtwValue = this.zhtwFlatKeys[key];
      const translatedValue = this.translateText(zhtwValue, 'zh-TW', 'en');
      this.enFlatKeys[key] = translatedValue;
      this.stats.keysAddedToEn++;
    }
    
    // Add missing keys to Traditional Chinese file
    for (const key of this.missingInZhtw) {
      const enValue = this.enFlatKeys[key];
      const translatedValue = this.translateText(enValue, 'en', 'zh-TW');
      this.zhtwFlatKeys[key] = translatedValue;
      this.stats.keysAddedToZhtw++;
    }
    
    this.stats.finalKeyCount = Object.keys(this.enFlatKeys).length;
    
    console.log(`${colors.green}✓${colors.reset} Added ${this.stats.keysAddedToEn} keys to English`);
    console.log(`${colors.green}✓${colors.reset} Added ${this.stats.keysAddedToZhtw} keys to Traditional Chinese`);
    console.log(`${colors.green}✓${colors.reset} Final synchronized key count: ${this.stats.finalKeyCount}`);
  }

  // Create backups of current files
  createBackups() {
    console.log(`${colors.blue}💾 Creating backups...${colors.reset}`);
    
    const timestamp = Date.now();
    const enBackup = `${CONFIG.enFile}${CONFIG.backupSuffix}-${timestamp}`;
    const zhtwBackup = `${CONFIG.zhtwFile}${CONFIG.backupSuffix}-${timestamp}`;
    
    fs.copyFileSync(CONFIG.enFile, enBackup);
    fs.copyFileSync(CONFIG.zhtwFile, zhtwBackup);
    
    console.log(`${colors.green}✓${colors.reset} English backup: ${enBackup}`);
    console.log(`${colors.green}✓${colors.reset} Traditional Chinese backup: ${zhtwBackup}`);
  }

  // Write synchronized files
  writeSynchronizedFiles() {
    console.log(`${colors.blue}💾 Writing synchronized translation files...${colors.reset}`);
    
    try {
      // Convert flat keys back to nested objects
      const synchronizedEn = this.unflattenObject(this.enFlatKeys);
      const synchronizedZhtw = this.unflattenObject(this.zhtwFlatKeys);
      
      // Write files with consistent formatting
      fs.writeFileSync(CONFIG.enFile, JSON.stringify(synchronizedEn, null, 2) + '\n');
      fs.writeFileSync(CONFIG.zhtwFile, JSON.stringify(synchronizedZhtw, null, 2) + '\n');
      
      console.log(`${colors.green}✓${colors.reset} Updated ${CONFIG.enFile}`);
      console.log(`${colors.green}✓${colors.reset} Updated ${CONFIG.zhtwFile}`);
      
    } catch (error) {
      throw new Error(`Failed to write synchronized files: ${error.message}`);
    }
  }

  // Generate synchronization report
  generateReport() {
    console.log(`${colors.blue}📊 Generating synchronization report...${colors.reset}`);
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        original_en_keys: this.stats.totalEnKeys,
        original_zhtw_keys: this.stats.totalZhtwKeys,
        keys_added_to_en: this.stats.keysAddedToEn,
        keys_added_to_zhtw: this.stats.keysAddedToZhtw,
        final_synchronized_keys: this.stats.finalKeyCount
      },
      keys_added_to_english: this.missingInEn,
      keys_added_to_traditional_chinese: this.missingInZhtw,
      translation_notes: {
        placeholder_format_en_to_zhtw: "[需要翻譯] {original_text}",
        placeholder_format_zhtw_to_en: "[Translation needed] {original_text}",
        recommendation: "Replace placeholder translations with proper translations using Google Translate API or human translation"
      }
    };
    
    // Save JSON report
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'sync-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'sync-report.md'),
      markdownReport
    );
    
    console.log(`${colors.green}✓${colors.reset} Reports saved to ${CONFIG.outputDir}/`);
  }

  // Generate human-readable markdown report
  generateMarkdownReport(report) {
    return `# Translation Files Synchronization Report

Generated: ${report.timestamp}

## Summary

- **Original English Keys**: ${report.summary.original_en_keys}
- **Original Traditional Chinese Keys**: ${report.summary.original_zhtw_keys}
- **Keys Added to English**: ${report.summary.keys_added_to_en}
- **Keys Added to Traditional Chinese**: ${report.summary.keys_added_to_zhtw}
- **Final Synchronized Key Count**: ${report.summary.final_synchronized_keys}

## Synchronization Results

✅ **Successfully synchronized translation files!**

Both \`en.json\` and \`zh-TW.json\` now have identical key structures with ${report.summary.final_synchronized_keys} keys each.

${report.summary.keys_added_to_en > 0 ? `
### Keys Added to English (${report.summary.keys_added_to_en} keys)

These keys were present in Traditional Chinese but missing from English:

\`\`\`
${report.keys_added_to_english.slice(0, 20).join('\n')}${report.keys_added_to_english.length > 20 ? `\n... and ${report.keys_added_to_english.length - 20} more` : ''}
\`\`\`
` : ''}

${report.summary.keys_added_to_zhtw > 0 ? `
### Keys Added to Traditional Chinese (${report.summary.keys_added_to_zhtw} keys)

These keys were present in English but missing from Traditional Chinese:

\`\`\`
${report.keys_added_to_traditional_chinese.slice(0, 20).join('\n')}${report.keys_added_to_traditional_chinese.length > 20 ? `\n... and ${report.keys_added_to_traditional_chinese.length - 20} more` : ''}
\`\`\`
` : ''}

## Translation Placeholders

New keys have been added with placeholder translations that need to be replaced with proper translations:

- **English placeholders**: \`${report.translation_notes.placeholder_format_zhtw_to_en}\`
- **Traditional Chinese placeholders**: \`${report.translation_notes.placeholder_format_en_to_zhtw}\`

## Next Steps

1. **Review Placeholders**: Search for placeholder text in both files
2. **Proper Translation**: Replace placeholders with accurate translations
3. **Quality Check**: Review all translations for accuracy and consistency
4. **Integration**: Consider integrating with Google Translate API for automatic translation

### Finding Placeholders

\`\`\`bash
# Find English placeholders
grep -n "\\[Translation needed\\]" public/locales/en.json

# Find Traditional Chinese placeholders  
grep -n "\\[需要翻譯\\]" public/locales/zh-TW.json
\`\`\`

## Backup Information

Backups of the original files have been created with timestamps. Check for files ending in \`.pre-sync-backup-{timestamp}\`.

---
*Report generated by Translation Files Synchronization Script*
`;
  }

  // Main execution function
  async run() {
    console.log(`${colors.bright}${colors.blue}🔄 Translation Files Synchronization Script${colors.reset}\n`);
    
    try {
      // Step 1: Load translation files
      this.loadTranslationFiles();
      
      // Step 2: Find missing keys
      this.findMissingKeys();
      
      // Step 3: Create backups
      this.createBackups();
      
      // Step 4: Synchronize keys
      this.synchronizeKeys();
      
      // Step 5: Write synchronized files
      this.writeSynchronizedFiles();
      
      // Step 6: Generate report
      this.generateReport();
      
      // Final summary
      console.log(`\n${colors.bright}📋 Synchronization Summary:${colors.reset}`);
      console.log(`${colors.green}✓${colors.reset} Original English keys: ${this.stats.totalEnKeys}`);
      console.log(`${colors.green}✓${colors.reset} Original Traditional Chinese keys: ${this.stats.totalZhtwKeys}`);
      console.log(`${colors.green}✓${colors.reset} Keys added to English: ${this.stats.keysAddedToEn}`);
      console.log(`${colors.green}✓${colors.reset} Keys added to Traditional Chinese: ${this.stats.keysAddedToZhtw}`);
      console.log(`${colors.green}✓${colors.reset} Final synchronized key count: ${this.stats.finalKeyCount}`);
      
      if (this.stats.keysAddedToEn > 0 || this.stats.keysAddedToZhtw > 0) {
        console.log(`\n${colors.yellow}⚠${colors.reset} ${colors.bright}Important:${colors.reset} New keys have placeholder translations.`);
        console.log(`${colors.yellow}📝${colors.reset} Search for "[Translation needed]" and "[需要翻譯]" to find and replace placeholders.`);
      }
      
      console.log(`\n${colors.bright}📁 Reports available:${colors.reset}`);
      console.log(`   - ${CONFIG.outputDir}/sync-report.md`);
      console.log(`   - ${CONFIG.outputDir}/sync-report.json`);
      
    } catch (error) {
      console.error(`${colors.red}❌ Synchronization failed:${colors.reset}`, error.message);
      process.exit(1);
    }
  }
}

// Run the synchronizer
const synchronizer = new TranslationSynchronizer();
synchronizer.run();
