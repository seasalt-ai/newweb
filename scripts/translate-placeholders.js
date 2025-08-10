#!/usr/bin/env node

/**
 * Translation Placeholder Replacement Script
 * 
 * This script finds and replaces translation placeholders with actual translations.
 * It can be extended to use Google Translate API or other translation services.
 * 
 * For now, it provides a framework and basic text-based translations for common terms.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  zhtwFile: 'public/locales/zh-TW.json',
  enFile: 'public/locales/en.json',
  outputDir: 'translation-replacements',
  backupSuffix: '.pre-translation-backup'
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

// Basic translation dictionary for common terms
const TRANSLATION_DICTIONARY = {
  // Navigation and UI elements
  'Products': '產品',
  'Solutions': '解決方案',
  'Industries': '行業',
  'Channels': '渠道',
  'Pricing': '價格',
  'Blog': '部落格',
  'Login': '登入',
  'Sign Up': '註冊',
  'Book A Demo': '預約演示',
  'Get Started': '開始使用',
  'Learn More': '了解更多',
  'Contact Us': '聯繫我們',
  'Try Now': '立即試用',
  'Schedule Demo': '安排演示',
  
  // Business terms
  'Features': '功能',
  'Key Features': '主要功能',
  'Integrations': '整合',
  'Analytics': '分析',
  'Dashboard': '儀表板',
  'Reports': '報告',
  'Settings': '設置',
  'Profile': '個人資料',
  'Account': '帳戶',
  'Subscription': '訂閱',
  'Billing': '帳單',
  
  // Common phrases
  'Get started': '開始使用',
  'Learn more': '了解更多',
  'Read more': '閱讀更多',
  'See all': '查看全部',
  'View all': '查看全部',
  'Show more': '顯示更多',
  'Load more': '載入更多',
  'Try it now': '立即試用',
  'Book demo': '預約演示',
  'Free trial': '免費試用',
  'Start free': '免費開始',
  
  // Time and availability
  'Available 24/7': '全天候可用',
  '24/7': '24/7',
  'Online': '線上',
  'Offline': '離線',
  
  // Actions
  'Search': '搜尋',
  'Filter': '篩選',
  'Sort': '排序',
  'Export': '匯出',
  'Import': '匯入',
  'Save': '儲存',
  'Cancel': '取消',
  'Delete': '刪除',
  'Edit': '編輯',
  'Add': '新增',
  'Remove': '移除',
  'Update': '更新',
  'Refresh': '重新整理',
  'Back': '返回',
  'Next': '下一步',
  'Previous': '上一步',
  'Continue': '繼續',
  'Finish': '完成',
  'Submit': '提交',
  'Send': '發送',
  
  // Status and states
  'Active': '啟用',
  'Inactive': '停用',
  'Enabled': '已啟用',
  'Disabled': '已停用',
  'Connected': '已連接',
  'Disconnected': '已斷開',
  'Success': '成功',
  'Error': '錯誤',
  'Warning': '警告',
  'Info': '資訊',
  'Loading': '載入中',
  'Processing': '處理中'
};

class TranslationReplacer {
  constructor() {
    this.zhtwData = {};
    this.placeholderCount = 0;
    this.replacedCount = 0;
    this.manualReviewNeeded = [];
  }

  // Load Traditional Chinese translation file
  loadTranslationFile() {
    console.log(`${colors.blue}📁 Loading Traditional Chinese translation file...${colors.reset}`);
    
    try {
      const content = fs.readFileSync(CONFIG.zhtwFile, 'utf8');
      this.zhtwData = JSON.parse(content);
      console.log(`${colors.green}✓${colors.reset} Loaded ${CONFIG.zhtwFile}`);
    } catch (error) {
      throw new Error(`Failed to load translation file: ${error.message}`);
    }
  }

  // Count placeholders in the data
  countPlaceholders(obj, path = '') {
    let count = 0;
    
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        count += this.countPlaceholders(value, currentPath);
      } else if (typeof value === 'string' && value.includes('[需要翻譯]')) {
        count++;
      }
    }
    
    return count;
  }

  // Simple translation function using dictionary
  translateText(text) {
    // Remove the placeholder prefix
    const cleanText = text.replace('[需要翻譯] ', '');
    
    // Check if we have a direct translation
    if (TRANSLATION_DICTIONARY[cleanText]) {
      return TRANSLATION_DICTIONARY[cleanText];
    }
    
    // Try to translate common words within the text
    let translatedText = cleanText;
    let hasTranslation = false;
    
    // Sort by length (longest first) to avoid partial replacements
    const sortedKeys = Object.keys(TRANSLATION_DICTIONARY).sort((a, b) => b.length - a.length);
    
    for (const englishTerm of sortedKeys) {
      const chineseTerm = TRANSLATION_DICTIONARY[englishTerm];
      if (translatedText.includes(englishTerm)) {
        translatedText = translatedText.replace(new RegExp(englishTerm, 'gi'), chineseTerm);
        hasTranslation = true;
      }
    }
    
    // If we made some translations but text still contains English, mark for review
    if (hasTranslation && /[a-zA-Z]/.test(translatedText)) {
      return `[需人工檢查] ${translatedText}`;
    }
    
    // If no translation found, keep original placeholder for manual review
    if (!hasTranslation) {
      return text; // Keep original placeholder
    }
    
    return translatedText;
  }

  // Replace placeholders recursively
  replacePlaceholders(obj, path = '') {
    const result = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        result[key] = this.replacePlaceholders(value, currentPath);
      } else if (typeof value === 'string' && value.includes('[需要翻譯]')) {
        const translated = this.translateText(value);
        result[key] = translated;
        
        if (translated !== value) {
          this.replacedCount++;
          if (translated.includes('[需人工檢查]')) {
            this.manualReviewNeeded.push({
              path: currentPath,
              original: value,
              translated: translated
            });
          }
        }
      } else {
        result[key] = value;
      }
    }
    
    return result;
  }

  // Create backup
  createBackup() {
    console.log(`${colors.blue}💾 Creating backup...${colors.reset}`);
    
    const timestamp = Date.now();
    const backup = `${CONFIG.zhtwFile}${CONFIG.backupSuffix}-${timestamp}`;
    
    fs.copyFileSync(CONFIG.zhtwFile, backup);
    console.log(`${colors.green}✓${colors.reset} Backup created: ${backup}`);
  }

  // Write updated translation file
  writeUpdatedFile(updatedData) {
    console.log(`${colors.blue}💾 Writing updated translation file...${colors.reset}`);
    
    try {
      fs.writeFileSync(CONFIG.zhtwFile, JSON.stringify(updatedData, null, 2) + '\n');
      console.log(`${colors.green}✓${colors.reset} Updated ${CONFIG.zhtwFile}`);
    } catch (error) {
      throw new Error(`Failed to write updated file: ${error.message}`);
    }
  }

  // Generate report
  generateReport() {
    console.log(`${colors.blue}📊 Generating translation report...${colors.reset}`);
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total_placeholders_found: this.placeholderCount,
        automatic_translations: this.replacedCount,
        manual_review_needed: this.manualReviewNeeded.length,
        remaining_placeholders: this.placeholderCount - this.replacedCount
      },
      manual_review_items: this.manualReviewNeeded,
      translation_dictionary_size: Object.keys(TRANSLATION_DICTIONARY).length
    };
    
    // Save JSON report
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'translation-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync(
      path.join(CONFIG.outputDir, 'translation-report.md'),
      markdownReport
    );
    
    console.log(`${colors.green}✓${colors.reset} Reports saved to ${CONFIG.outputDir}/`);
  }

  // Generate markdown report
  generateMarkdownReport(report) {
    return `# Translation Replacement Report

Generated: ${report.timestamp}

## Summary

- **Total Placeholders Found**: ${report.summary.total_placeholders_found}
- **Automatic Translations**: ${report.summary.automatic_translations}
- **Manual Review Needed**: ${report.summary.manual_review_needed}
- **Remaining Placeholders**: ${report.summary.remaining_placeholders}
- **Dictionary Size**: ${report.translation_dictionary_size} terms

## Translation Results

${report.summary.automatic_translations > 0 ? `
✅ **Successfully translated ${report.summary.automatic_translations} placeholders automatically!**
` : ''}

${report.summary.manual_review_needed > 0 ? `
⚠️ **${report.summary.manual_review_needed} items need manual review** (marked with \`[需人工檢查]\`)

### Items Requiring Manual Review

${report.manual_review_items.slice(0, 10).map(item => `
**Path**: \`${item.path}\`
**Original**: \`${item.original}\`
**Translated**: \`${item.translated}\`
`).join('\n')}

${report.manual_review_items.length > 10 ? `\n... and ${report.manual_review_items.length - 10} more items` : ''}
` : ''}

${report.summary.remaining_placeholders > 0 ? `
📝 **${report.summary.remaining_placeholders} placeholders still need translation**

These contain complex text that couldn't be automatically translated and require manual attention or Google Translate API integration.
` : ''}

## Next Steps

1. **Review Automatically Translated Items**: Check translations for accuracy
2. **Handle Manual Review Items**: Replace \`[需人工檢查]\` placeholders with proper translations
3. **Translate Remaining Placeholders**: Handle items marked with \`[需要翻譯]\`
4. **Quality Assurance**: Review all translations in context

## Finding Remaining Work

\`\`\`bash
# Find items needing manual review
grep -n "\\[需人工檢查\\]" public/locales/zh-TW.json

# Find remaining placeholders
grep -n "\\[需要翻譯\\]" public/locales/zh-TW.json

# Count remaining work
grep -c "\\[需" public/locales/zh-TW.json
\`\`\`

## Expanding the Translation Dictionary

To improve automatic translations, add more terms to the \`TRANSLATION_DICTIONARY\` in the script:

\`\`\`javascript
const TRANSLATION_DICTIONARY = {
  'Your English Term': '您的中文翻譯',
  // ... add more terms
};
\`\`\`

---
*Report generated by Translation Placeholder Replacement Script*
`;
  }

  // Main execution function
  async run() {
    console.log(`${colors.bright}${colors.blue}🔄 Translation Placeholder Replacement Script${colors.reset}\n`);
    
    try {
      // Step 1: Load translation file
      this.loadTranslationFile();
      
      // Step 2: Count placeholders
      this.placeholderCount = this.countPlaceholders(this.zhtwData);
      console.log(`${colors.cyan}Found ${this.placeholderCount} placeholders to process${colors.reset}`);
      
      if (this.placeholderCount === 0) {
        console.log(`${colors.green}🎉 No placeholders found! Translation file is complete.${colors.reset}`);
        return;
      }
      
      // Step 3: Create backup
      this.createBackup();
      
      // Step 4: Replace placeholders
      console.log(`${colors.blue}🔄 Processing placeholders...${colors.reset}`);
      const updatedData = this.replacePlaceholders(this.zhtwData);
      
      // Step 5: Write updated file
      this.writeUpdatedFile(updatedData);
      
      // Step 6: Generate report
      this.generateReport();
      
      // Final summary
      console.log(`\n${colors.bright}📋 Translation Summary:${colors.reset}`);
      console.log(`${colors.green}✓${colors.reset} Total placeholders processed: ${this.placeholderCount}`);
      console.log(`${colors.green}✓${colors.reset} Automatic translations: ${this.replacedCount}`);
      console.log(`${colors.yellow}⚠${colors.reset} Manual review needed: ${this.manualReviewNeeded.length}`);
      console.log(`${colors.cyan}📝${colors.reset} Remaining placeholders: ${this.placeholderCount - this.replacedCount}`);
      
      if (this.manualReviewNeeded.length > 0) {
        console.log(`\n${colors.yellow}⚠${colors.reset} ${colors.bright}Note:${colors.reset} Some items marked with [需人工檢查] need manual review.`);
      }
      
      const remaining = this.placeholderCount - this.replacedCount;
      if (remaining > 0) {
        console.log(`${colors.cyan}💡${colors.reset} ${colors.bright}Tip:${colors.reset} ${remaining} placeholders still need translation. Consider using Google Translate API.`);
      }
      
      console.log(`\n${colors.bright}📁 Reports available:${colors.reset}`);
      console.log(`   - ${CONFIG.outputDir}/translation-report.md`);
      console.log(`   - ${CONFIG.outputDir}/translation-report.json`);
      
    } catch (error) {
      console.error(`${colors.red}❌ Translation replacement failed:${colors.reset}`, error.message);
      process.exit(1);
    }
  }
}

// Run the replacer
const replacer = new TranslationReplacer();
replacer.run();
