#!/usr/bin/env node

/**
 * Text Extraction Script for i18n Migration
 * 
 * This script scans your React components and identifies hardcoded English text
 * that should be moved to translation files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SCAN_DIRS = ['src'];
const FILE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];
const IGNORE_DIRS = ['node_modules', 'dist', 'build', '.git'];
const OUTPUT_FILE = 'hardcoded-text-report.json';

// Patterns to identify hardcoded text
const TEXT_PATTERNS = [
  // JSX text content: <div>Text here</div>
  />\s*([A-Z][^<>{}\n]+)\s*</g,
  
  // String literals in JSX attributes: placeholder="Text here"
  /(?:placeholder|title|alt|aria-label)\s*=\s*["']([^"']+)["']/g,
  
  // Button/link text: <button>Click me</button>
  /<(?:button|a)[^>]*>\s*([A-Z][^<>]+)\s*<\/(?:button|a)>/g,
  
  // Heading text: <h1>Heading Text</h1>
  /<h[1-6][^>]*>\s*([^<>{}\n]+)\s*<\/h[1-6]>/g,
  
  // Paragraph text: <p>Paragraph text</p>
  /<p[^>]*>\s*([^<>{}\n]+)\s*<\/p>/g,
  
  // String literals that look like user-facing text
  /['"`]([A-Z][^'"`\n]{10,})['"`]/g
];

// Words that indicate user-facing text
const USER_FACING_INDICATORS = [
  'get started', 'learn more', 'sign up', 'contact us', 'try now',
  'click here', 'read more', 'view all', 'subscribe', 'login',
  'register', 'submit', 'cancel', 'save', 'delete', 'edit',
  'welcome', 'hello', 'goodbye', 'thank you', 'please',
  'features', 'pricing', 'about', 'home', 'blog', 'contact'
];

// Exclude these patterns (not user-facing)
const EXCLUDE_PATTERNS = [
  /console\.(log|error|warn|info)/,
  /className\s*=\s*["']/,
  /import\s+.*\s+from\s+["']/,
  /export\s+.*\s+from\s+["']/,
  /\.tsx?["']$/,
  /\/\//,  // Comments
  /\/\*/,  // Block comments
  /^[a-z]/,  // lowercase strings (likely variables/keys)
  /^\d/,     // Numbers
  /^https?:\/\//, // URLs
  /\.(jpg|jpeg|png|gif|svg|pdf)$/i, // File extensions
];

class HardcodedTextExtractor {
  constructor() {
    this.results = [];
    this.processedFiles = 0;
    this.totalMatches = 0;
  }

  async extractText() {
    console.log('🔍 Starting hardcoded text extraction...\n');
    
    for (const dir of SCAN_DIRS) {
      await this.scanDirectory(dir);
    }
    
    this.generateReport();
    this.printSummary();
  }

  async scanDirectory(dirPath) {
    const fullPath = path.resolve(dirPath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directory not found: ${dirPath}`);
      return;
    }

    const items = fs.readdirSync(fullPath);
    
    for (const item of items) {
      const itemPath = path.join(fullPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && !IGNORE_DIRS.includes(item)) {
        await this.scanDirectory(itemPath);
      } else if (stat.isFile() && this.shouldProcessFile(item)) {
        await this.processFile(itemPath);
      }
    }
  }

  shouldProcessFile(filename) {
    return FILE_EXTENSIONS.some(ext => filename.endsWith(ext));
  }

  async processFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);
      
      // Skip files that already use useTranslation
      if (content.includes('useTranslation') || content.includes('t(')) {
        console.log(`✅ ${relativePath} (already using i18n)`);
        return;
      }
      
      const matches = this.findHardcodedText(content, relativePath);
      
      if (matches.length > 0) {
        this.results.push({
          file: relativePath,
          matches: matches
        });
        
        console.log(`🚨 ${relativePath} - ${matches.length} hardcoded strings found`);
        this.totalMatches += matches.length;
      } else {
        console.log(`✅ ${relativePath} - clean`);
      }
      
      this.processedFiles++;
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  findHardcodedText(content, filePath) {
    const matches = [];
    const lines = content.split('\n');
    
    for (let lineNum = 0; lineNum < lines.length; lineNum++) {
      const line = lines[lineNum];
      
      for (const pattern of TEXT_PATTERNS) {
        let match;
        while ((match = pattern.exec(line)) !== null) {
          const text = match[1]?.trim();
          
          if (this.isUserFacingText(text)) {
            const suggestedKey = this.generateTranslationKey(text, filePath);
            
            matches.push({
              line: lineNum + 1,
              text: text,
              context: line.trim(),
              suggestedKey: suggestedKey,
              confidence: this.calculateConfidence(text, line)
            });
          }
        }
      }
    }
    
    return matches;
  }

  isUserFacingText(text) {
    if (!text || text.length < 3) return false;
    
    // Exclude patterns that are definitely not user-facing
    for (const pattern of EXCLUDE_PATTERNS) {
      if (pattern.test(text)) return false;
    }
    
    // Must start with capital letter or be a common user-facing phrase
    const startsWithCapital = /^[A-Z]/.test(text);
    const hasUserFacingWords = USER_FACING_INDICATORS.some(indicator => 
      text.toLowerCase().includes(indicator.toLowerCase())
    );
    
    return startsWithCapital || hasUserFacingWords;
  }

  generateTranslationKey(text, filePath) {
    // Extract component/page name from file path
    const fileName = path.basename(filePath, path.extname(filePath));
    const pathParts = filePath.split('/');
    
    // Determine product/section
    let product = 'common';
    if (pathParts.includes('seachat')) product = 'seachat';
    else if (pathParts.includes('seavoice')) product = 'seavoice';
    else if (pathParts.includes('seax')) product = 'seax';
    
    // Generate key from text
    const textKey = text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 30);
    
    return `${product}.${fileName.toLowerCase()}.${textKey}`;
  }

  calculateConfidence(text, context) {
    let confidence = 0.5;
    
    // Higher confidence for common UI patterns
    if (context.includes('<button') || context.includes('<a ')) confidence += 0.3;
    if (context.includes('<h1') || context.includes('<h2')) confidence += 0.3;
    if (context.includes('<p>') || context.includes('<span>')) confidence += 0.2;
    
    // Higher confidence for user-facing words
    const lowerText = text.toLowerCase();
    if (USER_FACING_INDICATORS.some(indicator => lowerText.includes(indicator))) {
      confidence += 0.3;
    }
    
    return Math.min(confidence, 1.0);
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesProcessed: this.processedFiles,
        filesWithHardcodedText: this.results.length,
        totalHardcodedStrings: this.totalMatches,
        averageStringsPerFile: this.results.length > 0 ? 
          (this.totalMatches / this.results.length).toFixed(2) : 0
      },
      files: this.results.sort((a, b) => b.matches.length - a.matches.length),
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));
    console.log(`\n📊 Report saved to: ${OUTPUT_FILE}`);
  }

  generateRecommendations() {
    const highPriorityFiles = this.results
      .filter(file => file.matches.length > 5)
      .map(file => file.file);
    
    return {
      startWithFiles: highPriorityFiles,
      estimatedEffort: {
        totalStrings: this.totalMatches,
        estimatedHours: Math.ceil(this.totalMatches / 10), // 10 strings per hour
        priority: highPriorityFiles.length > 0 ? 'high' : 'medium'
      },
      nextSteps: [
        'Review the generated report and prioritize files',
        'Start with high-confidence matches',
        'Create translation keys in en.json first',
        'Refactor components to use useTranslation()',
        'Update other language files'
      ]
    };
  }

  printSummary() {
    console.log('\n📈 EXTRACTION SUMMARY');
    console.log('========================');
    console.log(`Files processed: ${this.processedFiles}`);
    console.log(`Files with hardcoded text: ${this.results.length}`);
    console.log(`Total hardcoded strings: ${this.totalMatches}`);
    
    if (this.results.length > 0) {
      console.log('\n🏆 TOP FILES TO REFACTOR:');
      this.results
        .slice(0, 10)
        .forEach((file, index) => {
          console.log(`${index + 1}. ${file.file} (${file.matches.length} strings)`);
        });
    }
    
    console.log(`\n💡 Estimated effort: ${Math.ceil(this.totalMatches / 10)} hours`);
    console.log(`📄 Detailed report: ${OUTPUT_FILE}`);
  }
}

// Run the extraction
const extractor = new HardcodedTextExtractor();
extractor.extractText().catch(console.error);
