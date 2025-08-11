#!/usr/bin/env node
/**
 * Test script to verify i18n configuration is working correctly
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🧪 Testing i18n Configuration...\n');

// Check if translation files exist
const localesPath = path.join(__dirname, 'public/locales');
const supportedLanguages = ['en', 'zh-TW', 'zh-CN', 'ja', 'ko', 'es', 'fr', 'de'];

console.log('📁 Checking translation files:');
supportedLanguages.forEach(lang => {
  const filePath = path.join(localesPath, `${lang}.json`);
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  console.log(`  ${exists ? '✅' : '❌'} ${lang}.json ${exists ? `(${size} bytes)` : '(missing)'}`);
});

// Test zh-TW translation content
console.log('\n📋 Testing zh-TW translation content:');
try {
  const zhTwPath = path.join(localesPath, 'zh-TW.json');
  const zhTwContent = JSON.parse(fs.readFileSync(zhTwPath, 'utf8'));
  
  // Test specific translation keys
  const testKeys = [
    'header.products',
    'features.mainTitle', 
    'hero.title',
    'footer.company.title'
  ];
  
  testKeys.forEach(key => {
    const keys = key.split('.');
    let value = zhTwContent;
    
    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }
    
    console.log(`  ${value ? '✅' : '❌'} ${key}: ${value || 'NOT_FOUND'}`);
  });
  
} catch (error) {
  console.log(`  ❌ Error reading zh-TW.json: ${error.message}`);
}

// Check constants configuration
console.log('\n⚙️ Checking language constants:');
try {
  const constantsPath = path.join(__dirname, 'src/constants/languages.ts');
  const constantsContent = fs.readFileSync(constantsPath, 'utf8');
  
  const hasZhTw = constantsContent.includes("'zh-TW'");
  const hasZhCn = constantsContent.includes("'zh-CN'");
  
  console.log(`  ${hasZhTw ? '✅' : '❌'} zh-TW in SUPPORTED_LANGUAGES`);
  console.log(`  ${hasZhCn ? '✅' : '❌'} zh-CN in SUPPORTED_LANGUAGES`);
  
} catch (error) {
  console.log(`  ❌ Error reading constants: ${error.message}`);
}

// Check i18n configuration
console.log('\n🌐 Checking i18n configuration:');
try {
  const i18nPath = path.join(__dirname, 'src/i18n.ts');
  const i18nContent = fs.readFileSync(i18nPath, 'utf8');
  
  const hasBackend = i18nContent.includes('i18next-http-backend');
  const hasDetector = i18nContent.includes('i18next-browser-languagedetector');
  const hasReactI18next = i18nContent.includes('initReactI18next');
  const hasLoadPath = i18nContent.includes('loadPath:');
  
  console.log(`  ${hasBackend ? '✅' : '❌'} HTTP backend configured`);
  console.log(`  ${hasDetector ? '✅' : '❌'} Language detector configured`);
  console.log(`  ${hasReactI18next ? '✅' : '❌'} React i18next initialized`);
  console.log(`  ${hasLoadPath ? '✅' : '❌'} Load path configured`);
  
} catch (error) {
  console.log(`  ❌ Error reading i18n config: ${error.message}`);
}

console.log('\n🏁 Test complete!\n');
console.log('To test in browser:');
console.log('1. Navigate to http://localhost:5173/zh-TW');
console.log('2. Check browser console for i18n debug messages');
console.log('3. Look for the debug panel in the top-right corner');
console.log('4. Verify that text appears in Traditional Chinese');
