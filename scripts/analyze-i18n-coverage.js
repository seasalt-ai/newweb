#!/usr/bin/env node

/**
 * I18n Translation Coverage Analysis Script
 * 
 * This script analyzes the current state of internationalization in the SeaMeet website
 * and provides comprehensive reports on translation coverage, missing keys, and next steps.
 * 
 * Features:
 * - Scans all React components for t() and Trans usages
 * - Analyzes translation files for completeness
 * - Compares keys across all language files
 * - Identifies hardcoded strings in components
 * - Generates actionable reports for Phase 2.1 of i18n plan
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
  i18nDir: 'public/locales',
  outputDir: 'i18n-analysis',
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  translationExtension: '.json',
  baseLanguage: 'en'
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

class I18nAnalyzer {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      translation_files: {},
      component_analysis: {},
      coverage_report: {},
      missing_translations: {},
      hardcoded_strings: [],
      recommendations: []
    };
  }

  // Utility function to recursively find files
  findFiles(dir, extensions, excludeDirs = ['node_modules', '.git', 'dist', 'build']) {
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

  // Load and parse translation files
  loadTranslationFiles() {
    console.log(`${colors.blue}📁 Loading translation files...${colors.reset}`);
    
    const translationFiles = this.findFiles(CONFIG.i18nDir, [CONFIG.translationExtension]);
    
    for (const file of translationFiles) {
      const lang = path.basename(file, CONFIG.translationExtension);
      try {
        const content = JSON.parse(fs.readFileSync(file, 'utf8'));
        this.results.translation_files[lang] = {
          file_path: file,
          keys: this.flattenObject(content),
          total_keys: Object.keys(this.flattenObject(content)).length,
          structure: content
        };
        console.log(`${colors.green}✓${colors.reset} Loaded ${lang}: ${this.results.translation_files[lang].total_keys} keys`);
      } catch (error) {
        console.log(`${colors.red}✗${colors.reset} Error loading ${file}: ${error.message}`);
      }
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

  // Analyze React components for i18n usage
  analyzeComponents() {
    console.log(`${colors.blue}🔍 Analyzing React components...${colors.reset}`);
    
    const componentFiles = this.findFiles(CONFIG.srcDir, CONFIG.extensions);
    
    for (const file of componentFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const analysis = this.analyzeComponentContent(content, file);
        this.results.component_analysis[file] = analysis;
        
        if (analysis.translation_keys.length > 0 || analysis.hardcoded_strings.length > 0) {
          console.log(`${colors.cyan}📄${colors.reset} ${file}: ${analysis.translation_keys.length} t() calls, ${analysis.hardcoded_strings.length} hardcoded strings`);
        }
      } catch (error) {
        console.log(`${colors.red}✗${colors.reset} Error analyzing ${file}: ${error.message}`);
      }
    }
  }

  // Analyze individual component content
  analyzeComponentContent(content, filePath) {
    const analysis = {
      has_use_translation: false,
      translation_keys: [],
      trans_components: [],
      hardcoded_strings: [],
      imports: {
        useTranslation: false,
        Trans: false
      }
    };

    // Check for imports
    analysis.imports.useTranslation = /import.*useTranslation.*from.*react-i18next/.test(content);
    analysis.imports.Trans = /import.*Trans.*from.*react-i18next/.test(content);

    // Check for useTranslation hook usage
    analysis.has_use_translation = /useTranslation\(\)/.test(content);

    // Use AST-based analysis for better accuracy
    this.analyzeWithAST(content, analysis, filePath);

    // Also run the regex-based fallback for hardcoded strings
    this.detectHardcodedStrings(content, analysis, filePath);

    return analysis;
  }

  // Detect hardcoded strings that should be internationalized
  detectHardcodedStrings(content, analysis, filePath) {
    // Look for string literals in JSX that are likely user-facing text
    const jsxStringRegex = />([^<>{}\n]+[a-zA-Z][^<>{}\n]*)</g;
    let match;
    
    while ((match = jsxStringRegex.exec(content)) !== null) {
      const text = match[1].trim();
      
      // Filter out likely non-user-facing strings
      if (this.isLikelyUserFacingText(text)) {
        analysis.hardcoded_strings.push({
          text,
          context: this.getContext(content, match.index, 50)
        });
        
        this.results.hardcoded_strings.push({
          file: filePath,
          text,
          context: this.getContext(content, match.index, 50)
        });
      }
    }

    // Look for hardcoded strings in common places
    const commonHardcodedPatterns = [
      /title=['"`]([^'"`]+)['"`]/g,
      /placeholder=['"`]([^'"`]+)['"`]/g,
      /label=['"`]([^'"`]+)['"`]/g,
      /alt=['"`]([^'"`]+)['"`]/g
    ];

    for (const pattern of commonHardcodedPatterns) {
      while ((match = pattern.exec(content)) !== null) {
        const text = match[1].trim();
        if (this.isLikelyUserFacingText(text)) {
          analysis.hardcoded_strings.push({
            text,
            context: this.getContext(content, match.index, 50),
            type: 'attribute'
          });
        }
      }
    }
  }

  // AST-based analysis for more accurate detection
  analyzeWithAST(content, analysis, filePath) {
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
              // Translation keys should be collected without user-facing validation
              analysis.translation_keys.push(firstArg.value);
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
              // Translation keys should be collected without user-facing validation
              analysis.trans_components.push(i18nKeyAttr.value.value);
            }
          }
        },

        // Find hardcoded strings in JSX text
        JSXText: (path) => {
          const text = path.node.value.trim();
          if (text && this.isLikelyUserFacingText(text)) {
            analysis.hardcoded_strings.push({
              text,
              context: this.getASTContext(path, content),
              type: 'jsx-text'
            });
            
            this.results.hardcoded_strings.push({
              file: filePath,
              text,
              context: this.getASTContext(path, content),
              type: 'jsx-text'
            });
          }
        },

        // Find hardcoded strings in JSX expressions
        JSXExpressionContainer: (path) => {
          if (t.isStringLiteral(path.node.expression)) {
            const text = path.node.expression.value.trim();
            if (text && this.isLikelyUserFacingText(text)) {
              analysis.hardcoded_strings.push({
                text,
                context: this.getASTContext(path, content),
                type: 'jsx-expression'
              });
              
              this.results.hardcoded_strings.push({
                file: filePath,
                text,
                context: this.getASTContext(path, content),
                type: 'jsx-expression'
              });
            }
          }
        },

        // Find hardcoded strings in JSX attributes
        JSXAttribute: (path) => {
          if (t.isStringLiteral(path.node.value)) {
            const attrName = t.isJSXIdentifier(path.node.name) ? path.node.name.name : '';
            const userFacingAttrs = ['title', 'placeholder', 'label', 'alt', 'aria-label', 'tooltip'];
            
            if (userFacingAttrs.includes(attrName)) {
              const text = path.node.value.value.trim();
              if (text && this.isLikelyUserFacingText(text)) {
                analysis.hardcoded_strings.push({
                  text,
                  context: this.getASTContext(path, content),
                  type: 'jsx-attribute',
                  attribute: attrName
                });
                
                this.results.hardcoded_strings.push({
                  file: filePath,
                  text,
                  context: this.getASTContext(path, content),
                  type: 'jsx-attribute',
                  attribute: attrName
                });
              }
            }
          }
        }
      });
    } catch (error) {
      // If AST parsing fails, log but don't crash - we still have regex fallback
      console.log(`${colors.yellow}⚠${colors.reset} AST parsing failed for ${filePath}: ${error.message}`);
    }
  }

  // Get context from AST node
  getASTContext(path, content) {
    if (path.node.loc) {
      const lines = content.split('\n');
      const startLine = Math.max(0, path.node.loc.start.line - 3);
      const endLine = Math.min(lines.length - 1, path.node.loc.end.line + 2);
      return lines.slice(startLine, endLine + 1).join('\n');
    }
    return 'Context unavailable';
  }

  // Check if text is likely user-facing (and should be translated)
  isLikelyUserFacingText(text) {
    // Skip if it's empty, too short, or contains only whitespace
    if (!text || text.length < 2 || /^\s*$/.test(text)) return false;
    
    // Translation keys should NOT be treated as user-facing text
    const translationKeyPattern = /^[a-zA-Z][a-zA-Z0-9]*(\.([a-zA-Z][a-zA-Z0-9]*|\d+))*$/;
    if (translationKeyPattern.test(text)) {
      return false; // This is a translation key, not user-facing text
    }
    
    // Skip common non-translatable patterns for hardcoded strings
    const skipPatterns = [
      /^[0-9\s\-+().,]+$/, // Numbers, symbols, whitespace only
      /^[A-Z_][A-Z0-9_]*$/, // Constants (ALL_CAPS)
      /^\$?\d+(\.\d+)?$/, // Prices/numbers
      /^https?:\/\//, // URLs
      /^mailto:/, // Email links
      /^tel:/, // Phone links
      /^\w+\.\w+$/, // Simple file extensions (e.g., file.ext) but not translation keys
      /^#[a-fA-F0-9]{3,8}$/, // Hex colors
      /^rgb\(/, // RGB colors
      /^[a-z-]+$/, // CSS classes (kebab-case)
      /^[A-Z][a-z]*[A-Z]/, // CamelCase (likely component names)
      /^\{.*\}$/, // Object notation
      /^\[.*\]$/, // Array notation
      /console\./, // Console statements
      /className|onClick|onChange|onSubmit/, // React props
      /^[\s\\\n:/|,\-T]+$/, // Single character strings like whitespace, punctuation
    ];
    
    return !skipPatterns.some(pattern => pattern.test(text));
  }

  // Get context around a match
  getContext(content, index, length) {
    const start = Math.max(0, index - length);
    const end = Math.min(content.length, index + length);
    return content.substring(start, end);
  }

  // Generate coverage report
  generateCoverageReport() {
    console.log(`${colors.blue}📊 Generating coverage report...${colors.reset}`);
    
    const baseKeys = this.results.translation_files[CONFIG.baseLanguage]?.keys || {};
    
    // Component keys vs translation keys coverage
    const usedKeys = new Set();
    for (const component of Object.values(this.results.component_analysis)) {
      component.translation_keys.forEach(key => usedKeys.add(key));
      component.trans_components.forEach(key => usedKeys.add(key));
    }
    
    this.results.coverage_report = {
      base_language_keys: Object.keys(baseKeys).length,
      used_keys_in_components: usedKeys.size,
      unused_keys: Object.keys(baseKeys).filter(key => !usedKeys.has(key)),
      missing_keys: [...usedKeys].filter(key => !baseKeys[key]),
      coverage_percentage: usedKeys.size > 0 ? ((usedKeys.size - [...usedKeys].filter(key => !baseKeys[key]).length) / usedKeys.size * 100).toFixed(2) : 0
    };
    
    // Cross-language key comparison
    for (const [lang, data] of Object.entries(this.results.translation_files)) {
      if (lang === CONFIG.baseLanguage) continue;
      
      const langKeys = Object.keys(data.keys);
      const baseKeysList = Object.keys(baseKeys);
      
      this.results.missing_translations[lang] = {
        missing_from_base: langKeys.filter(key => !baseKeys[key]),
        missing_from_lang: baseKeysList.filter(key => !data.keys[key]),
        coverage_percentage: baseKeysList.length > 0 ? ((langKeys.filter(key => baseKeys[key]).length / baseKeysList.length) * 100).toFixed(2) : 0
      };
    }
  }

  // Generate recommendations based on analysis
  generateRecommendations() {
    console.log(`${colors.blue}💡 Generating recommendations...${colors.reset}`);
    
    const recs = [];
    
    // Translation structure recommendations
    if (this.results.coverage_report.missing_keys.length > 0) {
      recs.push({
        priority: 'HIGH',
        category: 'Translation Structure',
        title: 'Add missing translation keys to base language',
        description: `${this.results.coverage_report.missing_keys.length} keys used in components but missing from en.json`,
        action: `Add these keys to public/locales/en.json: ${this.results.coverage_report.missing_keys.slice(0, 5).join(', ')}${this.results.coverage_report.missing_keys.length > 5 ? '...' : ''}`,
        keys: this.results.coverage_report.missing_keys
      });
    }
    
    // Hardcoded strings recommendations
    if (this.results.hardcoded_strings.length > 0) {
      recs.push({
        priority: 'HIGH',
        category: 'Hardcoded Strings',
        title: 'Replace hardcoded strings with translation keys',
        description: `Found ${this.results.hardcoded_strings.length} hardcoded strings that should be internationalized`,
        action: 'Review and replace hardcoded strings with t() function calls',
        count: this.results.hardcoded_strings.length
      });
    }
    
    // Cross-language coverage recommendations
    const highMissingLangs = Object.entries(this.results.missing_translations)
      .filter(([lang, data]) => parseFloat(data.coverage_percentage) < 80)
      .sort(([,a], [,b]) => parseFloat(a.coverage_percentage) - parseFloat(b.coverage_percentage));
    
    if (highMissingLangs.length > 0) {
      recs.push({
        priority: 'MEDIUM',
        category: 'Translation Completeness',
        title: 'Complete translations for under-covered languages',
        description: `${highMissingLangs.length} languages have less than 80% translation coverage`,
        action: `Priority languages to complete: ${highMissingLangs.slice(0, 3).map(([lang]) => lang).join(', ')}`,
        languages: highMissingLangs
      });
    }
    
    // Page organization recommendations
    const pageKeys = this.categorizeKeys(Object.keys(this.results.translation_files[CONFIG.baseLanguage]?.keys || {}));
    recs.push({
      priority: 'MEDIUM',
      category: 'Organization',
      title: 'Organize translations by page/component sections',
      description: 'Current translation structure should be organized by page and component',
      action: 'Group translation keys by logical page sections (home, features, pricing, etc.)',
      current_categories: Object.keys(pageKeys),
      suggestion: 'Create nested structure matching website pages'
    });
    
    this.results.recommendations = recs;
  }

  // Categorize keys by likely page/section
  categorizeKeys(keys) {
    const categories = {
      navigation: [],
      home: [],
      features: [],
      pricing: [],
      enterprise: [],
      channels: [],
      footer: [],
      contact: [],
      about: [],
      blog: [],
      other: []
    };
    
    for (const key of keys) {
      if (key.startsWith('nav.')) categories.navigation.push(key);
      else if (key.startsWith('home.')) categories.home.push(key);
      else if (key.startsWith('features.') || key.includes('feature')) categories.features.push(key);
      else if (key.startsWith('pricing.') || key.includes('pricing')) categories.pricing.push(key);
      else if (key.startsWith('enterprise.')) categories.enterprise.push(key);
      else if (key.startsWith('channels.') || key.includes('channel')) categories.channels.push(key);
      else if (key.startsWith('footer.')) categories.footer.push(key);
      else if (key.startsWith('contact.')) categories.contact.push(key);
      else if (key.startsWith('about.')) categories.about.push(key);
      else if (key.startsWith('blog.')) categories.blog.push(key);
      else categories.other.push(key);
    }
    
    return categories;
  }

  // Save results to files
  saveResults() {
    console.log(`${colors.blue}💾 Saving analysis results...${colors.reset}`);
    
    // Create output directory
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
    
    // Save complete analysis as JSON
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'complete-analysis.json'),
      JSON.stringify(this.results, null, 2)
    );
    
    // Generate and save summary report
    const summaryReport = this.generateSummaryReport();
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'summary-report.md'),
      summaryReport
    );
    
    // Generate missing keys file
    if (this.results.coverage_report.missing_keys.length > 0) {
      fs.writeFileSync(
        path.join(CONFIG.outputDir, 'missing-keys.json'),
        JSON.stringify({
          keys: this.results.coverage_report.missing_keys,
          suggested_values: this.results.coverage_report.missing_keys.reduce((acc, key) => {
            acc[key] = `[TODO: Add translation for ${key}]`;
            return acc;
          }, {})
        }, null, 2)
      );
    }
    
    // Generate hardcoded strings report
    if (this.results.hardcoded_strings.length > 0) {
      fs.writeFileSync(
        path.join(CONFIG.outputDir, 'hardcoded-strings.json'),
        JSON.stringify(this.results.hardcoded_strings, null, 2)
      );
    }
    
    console.log(`${colors.green}✓${colors.reset} Results saved to ${CONFIG.outputDir}/`);
  }

  // Generate human-readable summary report
  generateSummaryReport() {
    const baseKeys = Object.keys(this.results.translation_files[CONFIG.baseLanguage]?.keys || {}).length;
    const languages = Object.keys(this.results.translation_files).length;
    
    return `# I18n Translation Coverage Analysis Report

Generated: ${this.results.timestamp}

## Executive Summary

- **Languages Analyzed**: ${languages}
- **Base Language (${CONFIG.baseLanguage}) Keys**: ${baseKeys}
- **Components Analyzed**: ${Object.keys(this.results.component_analysis).length}
- **Translation Coverage**: ${this.results.coverage_report.coverage_percentage}%
- **Missing Keys**: ${this.results.coverage_report.missing_keys.length}
- **Hardcoded Strings Found**: ${this.results.hardcoded_strings.length}

## Translation Files Status

| Language | Total Keys | Coverage vs Base | Status |
|----------|------------|------------------|--------|
${Object.entries(this.results.translation_files)
  .map(([lang, data]) => {
    const coverage = this.results.missing_translations[lang]?.coverage_percentage || (lang === CONFIG.baseLanguage ? '100.00' : 'N/A');
    const status = parseFloat(coverage) >= 90 ? '✅ Good' : parseFloat(coverage) >= 70 ? '⚠️ Needs work' : '❌ Incomplete';
    return `| ${lang} | ${data.total_keys} | ${coverage}% | ${status} |`;
  }).join('\n')}

## Priority Actions Required

${this.results.recommendations
  .filter(rec => rec.priority === 'HIGH')
  .map((rec, i) => `### ${i + 1}. ${rec.title}
**Category**: ${rec.category}
**Description**: ${rec.description}
**Action**: ${rec.action}
`).join('\n')}

## Missing Translation Keys

${this.results.coverage_report.missing_keys.length > 0 ? `
The following keys are used in components but missing from the base language file:

\`\`\`
${this.results.coverage_report.missing_keys.join('\n')}
\`\`\`
` : 'No missing keys found! ✅'}

## Hardcoded Strings Summary

${this.results.hardcoded_strings.length > 0 ? `
Found ${this.results.hardcoded_strings.length} potential hardcoded strings across components:

${this.results.hardcoded_strings.slice(0, 10).map(item => 
`- **File**: ${item.file}
  **Text**: "${item.text}"
  **Context**: \`${item.context.replace(/\n/g, '\\n').substring(0, 100)}...\``
).join('\n\n')}

${this.results.hardcoded_strings.length > 10 ? `\n... and ${this.results.hardcoded_strings.length - 10} more. See hardcoded-strings.json for complete list.` : ''}
` : 'No hardcoded strings found! ✅'}

## Recommendations for Phase 2.1

${this.results.recommendations.map((rec, i) => `
### ${i + 1}. ${rec.title} (${rec.priority} Priority)
**Category**: ${rec.category}
**Description**: ${rec.description}
**Action**: ${rec.action}
`).join('\n')}

## Next Steps

1. **Address High Priority Items**: Focus on missing translation keys and hardcoded strings
2. **Complete Base Language**: Ensure all used keys exist in en.json
3. **Organize Translation Structure**: Group keys by page/component sections
4. **Update Components**: Replace hardcoded strings with t() calls
5. **Cross-Language Sync**: Update all language files with missing keys

---
*This report was generated by the SeaMeet I18n Analysis Script*
`;
  }

  // Main execution function
  async run() {
    console.log(`${colors.bright}${colors.blue}🌍 SeaMeet I18n Translation Coverage Analysis${colors.reset}\n`);
    
    try {
      this.loadTranslationFiles();
      this.analyzeComponents();
      this.generateCoverageReport();
      this.generateRecommendations();
      this.saveResults();
      
      // Print summary to console
      console.log(`\n${colors.bright}📋 Analysis Summary:${colors.reset}`);
      console.log(`${colors.green}✓${colors.reset} Languages: ${Object.keys(this.results.translation_files).length}`);
      console.log(`${colors.green}✓${colors.reset} Coverage: ${this.results.coverage_report.coverage_percentage}%`);
      console.log(`${colors.yellow}⚠${colors.reset} Missing keys: ${this.results.coverage_report.missing_keys.length}`);
      console.log(`${colors.yellow}⚠${colors.reset} Hardcoded strings: ${this.results.hardcoded_strings.length}`);
      
      console.log(`\n${colors.bright}📁 Reports saved to:${colors.reset}`);
      console.log(`   - ${CONFIG.outputDir}/summary-report.md`);
      console.log(`   - ${CONFIG.outputDir}/complete-analysis.json`);
      if (this.results.coverage_report.missing_keys.length > 0) {
        console.log(`   - ${CONFIG.outputDir}/missing-keys.json`);
      }
      if (this.results.hardcoded_strings.length > 0) {
        console.log(`   - ${CONFIG.outputDir}/hardcoded-strings.json`);
      }
      
      console.log(`\n${colors.bright}🎯 Next Steps for Phase 2.1:${colors.reset}`);
      this.results.recommendations
        .filter(rec => rec.priority === 'HIGH')
        .forEach((rec, i) => {
          console.log(`   ${i + 1}. ${rec.title}`);
        });
      
    } catch (error) {
      console.error(`${colors.red}❌ Analysis failed:${colors.reset}`, error);
      process.exit(1);
    }
  }
}

// Run the analyzer
const analyzer = new I18nAnalyzer();
analyzer.run();
