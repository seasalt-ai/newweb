#!/usr/bin/env node

/**
 * Translation Keys Cleanup Script - Fixed Version
 * 
 * This is the corrected version that properly handles arrays in translation files.
 * It analyzes usage and keeps arrays intact when any element is used.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  srcDir: 'src',
  translationFile: 'public/locales/en.json',
  backupFile: 'public/locales/en.json.backup',
  outputDir: 'translation-cleanup-fixed',
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
  cyan: '\x1b[36m'
};

class FixedTranslationCleaner {
  constructor() {
    this.usedKeys = new Set();
    this.usedArrays = new Set(); // Track which arrays are used
    this.allTranslationKeys = new Set();
    this.translationData = {};
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

  // Load translation file and extract all keys
  loadTranslationFile() {
    console.log(`${colors.blue}📁 Loading translation file...${colors.reset}`);
    
    if (!fs.existsSync(CONFIG.translationFile)) {
      throw new Error(`Translation file not found: ${CONFIG.translationFile}`);
    }
    
    try {
      const content = fs.readFileSync(CONFIG.translationFile, 'utf8');
      this.translationData = JSON.parse(content);
      
      // Flatten the nested object to get all possible keys
      const flattenedKeys = this.flattenObject(this.translationData);
      this.allTranslationKeys = new Set(Object.keys(flattenedKeys));
      this.stats.totalKeysInFile = this.allTranslationKeys.size;
      
      console.log(`${colors.green}✓${colors.reset} Loaded ${this.stats.totalKeysInFile} translation keys from en.json`);
    } catch (error) {
      throw new Error(`Failed to parse translation file: ${error.message}`);
    }
  }

  // Enhanced flatten function that properly handles arrays
  flattenObject(obj, prefix = '') {
    const flattened = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (Array.isArray(value)) {
        // For arrays, create both the array key and individual indices
        flattened[newKey] = value; // Keep the array
        value.forEach((item, index) => {
          flattened[`${newKey}.${index}`] = item;
        });
      } else if (typeof value === 'object' && value !== null) {
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
      
      // Check if this is an array access pattern
      const arrayMatch = key.match(/^(.+)\.(\d+)$/);
      if (arrayMatch) {
        const arrayKey = arrayMatch[1];
        this.usedArrays.add(arrayKey);
      }
    }
    
    // Match Trans component i18nKey patterns
    const transComponentRegex = /i18nKey\s*=\s*['"`]([^'"`]+)['"`]/g;
    while ((match = transComponentRegex.exec(content)) !== null) {
      const key = match[1];
      this.usedKeys.add(key);
      this.stats.translationCallsFound++;
      
      // Check if this is an array access pattern
      const arrayMatch = key.match(/^(.+)\.(\d+)$/);
      if (arrayMatch) {
        const arrayKey = arrayMatch[1];
        this.usedArrays.add(arrayKey);
      }
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
              const key = firstArg.value;
              this.usedKeys.add(key);
              this.stats.translationCallsFound++;
              
              // Check if this is an array access pattern
              const arrayMatch = key.match(/^(.+)\.(\d+)$/);
              if (arrayMatch) {
                const arrayKey = arrayMatch[1];
                this.usedArrays.add(arrayKey);
              }
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
              const key = i18nKeyAttr.value.value;
              this.usedKeys.add(key);
              this.stats.translationCallsFound++;
              
              // Check if this is an array access pattern
              const arrayMatch = key.match(/^(.+)\.(\d+)$/);
              if (arrayMatch) {
                const arrayKey = arrayMatch[1];
                this.usedArrays.add(arrayKey);
              }
            }
          }
        }
      });
    } catch (error) {
      // If AST parsing fails, we still have regex fallback
      console.log(`${colors.yellow}⚠${colors.reset} AST parsing failed for ${filePath}: ${error.message}`);
    }
  }

  // Remove unused keys from translation object while preserving used arrays
  removeUnusedKeysFromObject(obj, currentPath = '') {
    const keysToDelete = [];
    
    for (const [key, value] of Object.entries(obj)) {
      const fullPath = currentPath ? `${currentPath}.${key}` : key;
      
      if (Array.isArray(value)) {
        // If this array is used (any index accessed), keep the whole array
        if (!this.usedArrays.has(fullPath)) {
          keysToDelete.push(key);
          this.stats.unusedKeysRemoved++;
        }
      } else if (typeof value === 'object' && value !== null) {
        // Recursively clean nested objects
        this.removeUnusedKeysFromObject(value, fullPath);
        
        // If the nested object becomes empty after cleaning, mark it for deletion
        if (Object.keys(value).length === 0) {
          keysToDelete.push(key);
        }
      } else {
        // Check if this key is unused
        if (!this.usedKeys.has(fullPath)) {
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
    console.log(`${colors.blue}🧹 Creating cleaned translation file...${colors.reset}`);
    
    // Create a deep copy of the translation data to avoid mutating the original
    const cleanedData = JSON.parse(JSON.stringify(this.translationData));
    
    // Remove unused keys from the copy
    this.removeUnusedKeysFromObject(cleanedData);
    
    // Write the cleaned data back to the file
    try {
      fs.writeFileSync(CONFIG.translationFile, JSON.stringify(cleanedData, null, 2) + '\n');
      console.log(`${colors.green}✓${colors.reset} Cleaned translation file saved`);
      console.log(`${colors.green}✓${colors.reset} Removed ${this.stats.unusedKeysRemoved} unused keys`);
    } catch (error) {
      throw new Error(`Failed to save cleaned translation file: ${error.message}`);
    }
  }

  // Create backup
  createBackup() {
    console.log(`${colors.blue}💾 Creating backup...${colors.reset}`);
    
    const timestamp = Date.now();
    const backup = `${CONFIG.translationFile}.fixed-cleanup-backup-${timestamp}`;
    
    fs.copyFileSync(CONFIG.translationFile, backup);
    console.log(`${colors.green}✓${colors.reset} Backup created: ${backup}`);
  }

  // Generate report
  generateReport() {
    console.log(`${colors.blue}📊 Generating cleanup report...${colors.reset}`);
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
    
    const unusedKeys = [];
    const usedKeys = [...this.usedKeys].sort();
    
    // Find unused keys (but don't include array indices in the report)
    for (const key of this.allTranslationKeys) {
      if (!this.usedKeys.has(key) && !key.match(/\.\d+$/)) {
        // Check if it's part of a used array
        const arrayMatch = key.match(/^(.+)\.\d+$/);
        if (!arrayMatch || !this.usedArrays.has(arrayMatch[1])) {
          unusedKeys.push(key);
        }
      }
    }
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        files_scanned: this.stats.filesScanned,
        translation_calls_found: this.stats.translationCallsFound,
        total_keys_in_file: this.stats.totalKeysInFile,
        keys_still_used: usedKeys.length,
        unused_keys_found: unusedKeys.length,
        unused_keys_removed: this.stats.unusedKeysRemoved,
        arrays_preserved: this.usedArrays.size
      },
      used_keys: usedKeys,
      unused_keys_removed: unusedKeys,
      arrays_preserved: [...this.usedArrays].sort(),
      backup_file: CONFIG.backupFile
    };
    
    // Save JSON report
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'fixed-cleanup-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log(`${colors.green}✓${colors.reset} Reports saved to ${CONFIG.outputDir}/`);
  }

  // Main execution function
  async run() {
    console.log(`${colors.bright}${colors.blue}🔧 Fixed Translation Keys Cleanup Script${colors.reset}\n`);
    
    try {
      // Step 1: Load translation file
      this.loadTranslationFile();
      
      // Step 2: Scan source files for usage
      this.scanSourceFiles();
      
      // Step 3: Create backup
      this.createBackup();
      
      // Step 4: Clean translation file
      this.createCleanedTranslationFile();
      
      // Step 5: Generate report
      this.generateReport();
      
      // Final summary
      console.log(`\n${colors.bright}📋 Cleanup Summary:${colors.reset}`);
      console.log(`${colors.green}✓${colors.reset} Files scanned: ${this.stats.filesScanned}`);
      console.log(`${colors.green}✓${colors.reset} Translation calls found: ${this.stats.translationCallsFound}`);
      console.log(`${colors.green}✓${colors.reset} Keys in use: ${this.usedKeys.size}`);
      console.log(`${colors.green}✓${colors.reset} Arrays preserved: ${this.usedArrays.size}`);
      console.log(`${colors.green}✓${colors.reset} Unused keys removed: ${this.stats.unusedKeysRemoved}`);
      
      if (this.usedArrays.size > 0) {
        console.log(`\n${colors.cyan}📋 Arrays preserved:${colors.reset}`);
        [...this.usedArrays].sort().forEach(arrayKey => {
          console.log(`  - ${arrayKey}`);
        });
      }
      
      console.log(`\n${colors.bright}📁 Reports available:${colors.reset}`);
      console.log(`   - ${CONFIG.outputDir}/fixed-cleanup-report.json`);
      
    } catch (error) {
      console.error(`${colors.red}❌ Fixed cleanup failed:${colors.reset}`, error.message);
      process.exit(1);
    }
  }
}

// Run the cleaner
const cleaner = new FixedTranslationCleaner();
cleaner.run();
