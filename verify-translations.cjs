const fs = require('fs');

// Define the locales to verify
const locales = ['fil', 'hi', 'id', 'ms', 'pl', 'ru', 'ta', 'zh-CN'];

// Expected translation keys to verify
const expectedKeys = [
  'solutions.salesMarketing.seo.title',
  'solutions.salesMarketing.hero.title1',
  'solutions.salesMarketing.hero.titleGradient',
  'solutions.salesMarketing.solutions.title',
  'solutions.salesMarketing.cta.title',
  'solutions.salesMarketing.cta.disclaimer'
];

console.log('🔍 Verifying Sales & Marketing Translations...\n');

function verifyLocale(localeCode) {
  try {
    const filePath = `public/locales/${localeCode}.json`;
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    console.log(`📋 Checking ${localeCode.toUpperCase()}:`);
    
    let allKeysPresent = true;
    expectedKeys.forEach(key => {
      const keys = key.split('.');
      let current = content;
      let found = true;
      
      for (const k of keys) {
        if (current[k]) {
          current = current[k];
        } else {
          found = false;
          break;
        }
      }
      
      if (found && typeof current === 'string' && current.length > 0) {
        console.log(`   ✅ ${key}: "${current.substring(0, 50)}${current.length > 50 ? '...' : ''}"`);
      } else {
        console.log(`   ❌ ${key}: MISSING or EMPTY`);
        allKeysPresent = false;
      }
    });
    
    console.log(`   📊 Status: ${allKeysPresent ? '✅ ALL KEYS PRESENT' : '❌ MISSING KEYS'}\n`);
    return allKeysPresent;
    
  } catch (error) {
    console.log(`   ❌ Error reading ${localeCode}: ${error.message}\n`);
    return false;
  }
}

// Verify all locales
let successCount = 0;
locales.forEach(locale => {
  if (verifyLocale(locale)) {
    successCount++;
  }
});

console.log('==================================================');
console.log(`🎯 VERIFICATION SUMMARY:`);
console.log(`   Locales verified: ${successCount}/${locales.length}`);
console.log(`   Success rate: ${((successCount / locales.length) * 100).toFixed(1)}%`);

if (successCount === locales.length) {
  console.log(`   🎉 ALL TRANSLATIONS VERIFIED SUCCESSFULLY!`);
} else {
  console.log(`   ⚠️  ${locales.length - successCount} locale(s) have issues`);
}

console.log('==================================================');
