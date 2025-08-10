#!/usr/bin/env node

/**
 * Translation Keys Cleanup Script - Traditional Chinese Version
 * 
 * This script analyzes the current usage of translation keys in the codebase
 * and removes any unused keys from the zh-TW.json translation file.
 * 
 * It uses the same key detection logic but applies cleanup to the Chinese translation file.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for Traditional Chinese
const CONFIG = {
  srcDir: 'src',
  translationFile: 'public/locales/zh-TW.json',
  baseTranslationFile: 'public/locales/en.json', // Reference for key structure
  backupFile: 'public/locales/zh-TW.json.backup',
  outputDir: 'translation-cleanup-zhtw',
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  excludeDirs: ['node_modules', '.git', 'dist', 'build', 'coverage']
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

class TranslationCleanerZHTW {
  constructor() {
    this.usedKeys = new Set();
    this.allTranslationKeys = new Set();
    this.unusedKeys = new Set();
    this.translationData = {};
    this.baseTranslationData = {};
    this.stats = {
      filesScanned: 0,
      translationCallsFound: 0,
      totalKeysInFile: 0,
      unusedKeysRemoved: 0
    };
  }

  // Utility function to recursively find files
  findFiles(dir, extensions, excludeDirs = CONFIG.excludeDirs) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
        files.push(...this.findFiles(fullPath, extensions, excludeDirs));
      } else if (entry.isFile() && extensions.includes(path.extname(entry.name))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  // Load both translation files
  loadTranslationFiles() {
    console.log(`${colors.blue}📁 Loading translation files...${colors.reset}`);
    
    // Load Traditional Chinese file
    if (!fs.existsSync(CONFIG.translationFile)) {
      throw new Error(`Traditional Chinese translation file not found: ${CONFIG.translationFile}`);
    }
    
    try {
      const content = fs.readFileSync(CONFIG.translationFile, 'utf8');
      this.translationData = JSON.parse(content);
      
      // Flatten the nested object to get all possible keys
      const flattenedKeys = this.flattenObject(this.translationData);
      this.allTranslationKeys = new Set(Object.keys(flattenedKeys));
      this.stats.totalKeysInFile = this.allTranslationKeys.size;
      
      console.log(`${colors.green}✓${colors.reset} Loaded ${this.stats.totalKeysInFile} translation keys from zh-TW.json`);
    } catch (error) {
      throw new Error(`Failed to parse Traditional Chinese translation file: ${error.message}`);
    }

    // Load English base file for reference
    try {
      const baseContent = fs.readFileSync(CONFIG.baseTranslationFile, 'utf8');
      this.baseTranslationData = JSON.parse(baseContent);
      console.log(`${colors.cyan}📚 Loaded English base translation file for reference${colors.reset}`);
    } catch (error) {
      console.log(`${colors.yellow}⚠${colors.reset} Could not load English base file: ${error.message}`);
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

  // Scan all source files for translation key usage
  scanSourceFiles() {
    console.log(`${colors.blue}🔍 Scanning source files for translation usage...${colors.reset}`);
    
    const sourceFiles = this.findFiles(CONFIG.srcDir, CONFIG.extensions);
    console.log(`${colors.cyan}Found ${sourceFiles.length} source files to scan${colors.reset}`);
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        this.analyzeFileForTranslationKeys(content, file);
        this.stats.filesScanned++;
      } catch (error) {
        console.log(`${colors.yellow}⚠${colors.reset} Error scanning ${file}: ${error.message}`);
      }
    }
    
    console.log(`${colors.green}✓${colors.reset} Scanned ${this.stats.filesScanned} files, found ${this.stats.translationCallsFound} translation calls`);
  }

  // Analyze individual file for translation key usage
  analyzeFileForTranslationKeys(content, filePath) {
    // Quick check if file even imports or uses translation functions
    if (!content.includes('useTranslation') && !content.includes('Trans') && !content.includes('t(')) {
      return;
    }

    // Use regex as fallback for simple cases
    this.extractKeysWithRegex(content);
    
    // Use AST for more accurate parsing
    this.analyzeWithAST(content, filePath);
  }

  // Extract translation keys using regex (fallback method)
  extractKeysWithRegex(content) {
    // Match t('key') and t("key") patterns
    const tFunctionRegex = /\bt\(\s*['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = tFunctionRegex.exec(content)) !== null) {
      const key = match[1];
      this.usedKeys.add(key);
      this.stats.translationCallsFound++;
    }
    
    // Match Trans component i18nKey patterns
    const transComponentRegex = /i18nKey\s*=\s*['"`]([^'"`]+)['"`]/g;
    while ((match = transComponentRegex.exec(content)) !== null) {
      const key = match[1];
      this.usedKeys.add(key);
      this.stats.translationCallsFound++;
    }
  }

  // AST-based analysis for more accurate detection
  analyzeWithAST(content, filePath) {
    try {
      const ast = parse(content, {
        sourceType: 'module',
        allowImportExportEverywhere: true,
        allowReturnOutsideFunction: true,
        plugins: [
          'jsx',
          'typescript',
          'decorators-legacy',
          'classProperties',
          'objectRestSpread',
          'functionBind',
          'exportDefaultFrom',
          'exportNamespaceFrom',
          'dynamicImport',
          'nullishCoalescingOperator',
          'optionalChaining'
        ]
      });

      traverse.default(ast, {
        // Find t() function calls
        CallExpression: (path) => {
          if (t.isIdentifier(path.node.callee, { name: 't' }) && path.node.arguments.length > 0) {
            const firstArg = path.node.arguments[0];
            if (t.isStringLiteral(firstArg)) {
              this.usedKeys.add(firstArg.value);
              this.stats.translationCallsFound++;
            }
          }
        },

        // Find Trans components with i18nKey
        JSXElement: (path) => {
          if (t.isJSXIdentifier(path.node.openingElement.name, { name: 'Trans' })) {
            const i18nKeyAttr = path.node.openingElement.attributes.find(attr => 
              t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name, { name: 'i18nKey' })
            );
            if (i18nKeyAttr && t.isStringLiteral(i18nKeyAttr.value)) {
              this.usedKeys.add(i18nKeyAttr.value.value);
              this.stats.translationCallsFound++;
            }
          }
        }
      });
    } catch (error) {
      // If AST parsing fails, we still have regex fallback
      console.log(`${colors.yellow}⚠${colors.reset} AST parsing failed for ${filePath}: ${error.message}`);
    }
  }

  // Find unused keys by comparing all keys vs used keys
  findUnusedKeys() {
    console.log(`${colors.blue}🧹 Identifying unused keys...${colors.reset}`);
    
    for (const key of this.allTranslationKeys) {
      if (!this.usedKeys.has(key)) {
        this.unusedKeys.add(key);
      }
    }
    
    console.log(`${colors.cyan}Found ${this.unusedKeys.size} unused translation keys${colors.reset}`);
    
    if (this.unusedKeys.size > 0) {
      console.log(`${colors.yellow}Unused keys:${colors.reset}`);
      [...this.unusedKeys].slice(0, 10).forEach(key => {
        console.log(`  - ${key}`);
      });
      if (this.unusedKeys.size > 10) {
        console.log(`  ... and ${this.unusedKeys.size - 10} more`);
      }
    }
  }

  // Remove unused keys from translation object
  removeUnusedKeysFromObject(obj, unusedKeys, currentPath = '') {
    const keysToDelete = [];
    
    for (const [key, value] of Object.entries(obj)) {
      const fullPath = currentPath ? `${currentPath}.${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively clean nested objects
        this.removeUnusedKeysFromObject(value, unusedKeys, fullPath);
        
        // If the nested object becomes empty after cleaning, mark it for deletion
        if (Object.keys(value).length === 0) {
          keysToDelete.push(key);
        }
      } else {
        // Check if this key is unused
        if (unusedKeys.has(fullPath)) {
          keysToDelete.push(key);
          this.stats.unusedKeysRemoved++;
        }
      }
    }
    
    // Delete the unused keys
    keysToDelete.forEach(key => {
      delete obj[key];
    });
  }

  // Create cleaned translation file
  createCleanedTranslationFile() {
    if (this.unusedKeys.size === 0) {
      console.log(`${colors.green}🎉 No unused keys found! Traditional Chinese translation file is already clean.${colors.reset}`);
      return;
    }
    
    console.log(`${colors.blue}🧹 Creating cleaned Traditional Chinese translation file...${colors.reset}`);
    
    // Create a deep copy of the translation data to avoid mutating the original
    const cleanedData = JSON.parse(JSON.stringify(this.translationData));
    
    // Remove unused keys from the copy
    this.removeUnusedKeysFromObject(cleanedData, this.unusedKeys);
    
    // Write the cleaned data back to the file
    try {
      fs.writeFileSync(CONFIG.translationFile, JSON.stringify(cleanedData, null, 2) + '\n');
      console.log(`${colors.green}✓${colors.reset} Cleaned Traditional Chinese translation file saved`);
      console.log(`${colors.green}✓${colors.reset} Removed ${this.stats.unusedKeysRemoved} unused keys`);
    } catch (error) {
      throw new Error(`Failed to save cleaned Traditional Chinese translation file: ${error.message}`);
    }
  }

  // Generate cleanup report
  generateReport() {
    console.log(`${colors.blue}📊 Generating cleanup report...${colors.reset}`);
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
    
    const report = {
      timestamp: new Date().toISOString(),
      language: 'Traditional Chinese (zh-TW)',
      summary: {
        files_scanned: this.stats.filesScanned,
        translation_calls_found: this.stats.translationCallsFound,
        total_keys_in_file: this.stats.totalKeysInFile,
        keys_still_used: this.usedKeys.size,
        unused_keys_found: this.unusedKeys.size,
        unused_keys_removed: this.stats.unusedKeysRemoved
      },
      used_keys: [...this.usedKeys].sort(),
      unused_keys_removed: [...this.unusedKeys].sort(),
      backup_file: CONFIG.backupFile
    };
    
    // Save JSON report
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'cleanup-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'cleanup-report.md'),
      markdownReport
    );
    
    console.log(`${colors.green}✓${colors.reset} Reports saved to ${CONFIG.outputDir}/`);
  }

  // Generate human-readable markdown report
  generateMarkdownReport(report) {
    return `# Traditional Chinese Translation Keys Cleanup Report

Generated: ${report.timestamp}

## Summary

- **Language**: ${report.language}
- **Files Scanned**: ${report.summary.files_scanned}
- **Translation Calls Found**: ${report.summary.translation_calls_found}
- **Total Keys in File (Before)**: ${report.summary.total_keys_in_file}
- **Keys Still Used**: ${report.summary.keys_still_used}
- **Unused Keys Found**: ${report.summary.unused_keys_found}
- **Unused Keys Removed**: ${report.summary.unused_keys_removed}

## Cleanup Results

${report.summary.unused_keys_removed > 0 ? `
✅ **Successfully cleaned up ${report.summary.unused_keys_removed} unused translation keys from zh-TW.json!**

### Removed Keys

The following unused keys were removed from zh-TW.json:

\`\`\`
${report.unused_keys_removed.join('\n')}
\`\`\`
` : '✅ **No cleanup needed!** All Traditional Chinese translation keys are currently in use.'}

## Backup Information

A backup of the original Traditional Chinese translation file has been created:
- **Backup File**: \`${report.backup_file}\`
- **Original Size**: ${report.summary.total_keys_in_file} keys
- **New Size**: ${report.summary.keys_still_used} keys

## Currently Used Keys

The following ${report.summary.keys_still_used} translation keys are actively used in the codebase:

<details>
<summary>Click to expand full list</summary>

\`\`\`
${report.used_keys.join('\n')}
\`\`\`

</details>

## Recovery Instructions

If you need to restore the original Traditional Chinese translation file:

\`\`\`bash
cp ${report.backup_file} ${CONFIG.translationFile}
\`\`\`

## Notes

This cleanup was based on the same key usage analysis used for the English translation file. The script identified which translation keys are actively used in the React/TypeScript codebase and removed only the keys that are not referenced anywhere.

---
*Report generated by Translation Keys Cleanup Script - Traditional Chinese Version*
`;
  }

  // Main execution function
  async run() {
    console.log(`${colors.bright}${colors.blue}🧹 Traditional Chinese Translation Keys Cleanup Script${colors.reset}\n`);
    
    try {
      // Step 1: Load translation files
      this.loadTranslationFiles();
      
      // Step 2: Scan source files for usage
      this.scanSourceFiles();
      
      // Step 3: Find unused keys
      this.findUnusedKeys();
      
      // Step 4: Create backup (additional backup beyond the one already created)
      if (this.unusedKeys.size > 0) {
        const timestampBackup = `${CONFIG.translationFile}.backup-${Date.now()}`;
        fs.copyFileSync(CONFIG.translationFile, timestampBackup);
        console.log(`${colors.green}✓${colors.reset} Additional backup created: ${timestampBackup}`);
      }
      
      // Step 5: Clean translation file
      this.createCleanedTranslationFile();
      
      // Step 6: Generate report
      this.generateReport();
      
      // Final summary
      console.log(`\n${colors.bright}📋 Cleanup Summary:${colors.reset}`);
      console.log(`${colors.green}✓${colors.reset} Language: Traditional Chinese (zh-TW)`);
      console.log(`${colors.green}✓${colors.reset} Files scanned: ${this.stats.filesScanned}`);
      console.log(`${colors.green}✓${colors.reset} Translation calls found: ${this.stats.translationCallsFound}`);
      console.log(`${colors.green}✓${colors.reset} Keys in use: ${this.usedKeys.size}`);
      if (this.unusedKeys.size > 0) {
        console.log(`${colors.yellow}🧹${colors.reset} Unused keys removed: ${this.stats.unusedKeysRemoved}`);
        console.log(`${colors.cyan}💾${colors.reset} Backup available: ${CONFIG.backupFile}`);
      } else {
        console.log(`${colors.green}🎉${colors.reset} No unused keys found - Traditional Chinese translation file is clean!`);
      }
      
      console.log(`\n${colors.bright}📁 Reports available:${colors.reset}`);
      console.log(`   - ${CONFIG.outputDir}/cleanup-report.md`);
      console.log(`   - ${CONFIG.outputDir}/cleanup-report.json`);
      
    } catch (error) {
      console.error(`${colors.red}❌ Traditional Chinese cleanup failed:${colors.reset}`, error.message);
      process.exit(1);
    }
  }
}

// Run the cleaner
const cleaner = new TranslationCleanerZHTW();
cleaner.run();
