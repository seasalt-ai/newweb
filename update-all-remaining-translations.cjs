const fs = require('fs');
const path = require('path');

// Define the locales and their corresponding translation files
const locales = [
  { code: 'fil', file: 'sales-marketing-fil-translations.txt', name: 'Filipino' },
  { code: 'ms', file: 'sales-marketing-ms-translations.txt', name: 'Malay' },
  { code: 'pl', file: 'sales-marketing-pl-translations.txt', name: 'Polish' },
  { code: 'ru', file: 'sales-marketing-ru-translations.txt', name: 'Russian' },
  { code: 'ta', file: 'sales-marketing-ta-translations.txt', name: 'Tamil' },
  { code: 'zh-CN', file: 'sales-marketing-zh-CN-translations.txt', name: 'Simplified Chinese' }
];

function updateLocale(locale) {
  try {
    console.log(`\n========== Starting ${locale.name} (${locale.code}) translation update ==========`);
    
    // Read the translation content
    const translationContent = fs.readFileSync(locale.file, 'utf8');
    console.log('Translation file read successfully');

    // Parse the translation file
    const translations = {};
    translationContent.split('\n').forEach(line => {
      if (line.trim() && line.includes('=')) {
        const equalIndex = line.indexOf('=');
        const key = line.substring(0, equalIndex).trim();
        const value = line.substring(equalIndex + 1).trim();
        if (key && value) {
          translations[key] = value;
        }
      }
    });

    console.log('Parsed translations count:', Object.keys(translations).length);

    // Read existing locale file
    const localePath = `public/locales/${locale.code}.json`;
    let localeContent = {};

    try {
      localeContent = JSON.parse(fs.readFileSync(localePath, 'utf8'));
      console.log(`Existing ${locale.name} locale file loaded`);
    } catch (error) {
      console.log(`Creating new ${locale.name} locale file`);
      localeContent = {};
    }

    // Create backup
    const backupPath = localePath.replace('.json', '.backup.' + Date.now() + '.json');
    fs.writeFileSync(backupPath, JSON.stringify(localeContent, null, 2));
    console.log('Backup created:', backupPath);

    // Apply translations
    let updatedCount = 0;
    Object.keys(translations).forEach(key => {
      const keys = key.split('.');
      let current = localeContent;
      
      // Navigate to the correct nested location
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      
      // Set the final value
      const finalKey = keys[keys.length - 1];
      current[finalKey] = translations[key];
      updatedCount++;
    });

    console.log('Updated translations:', updatedCount);

    // Write updated content
    fs.writeFileSync(localePath, JSON.stringify(localeContent, null, 2));
    console.log(`Successfully updated ${locale.name} locale file`);

    // Validate JSON
    try {
      JSON.parse(fs.readFileSync(localePath, 'utf8'));
      console.log('JSON validation: PASSED');
    } catch (error) {
      console.log('JSON validation: FAILED -', error.message);
      return false;
    }

    console.log(`${locale.name} translation update completed successfully!`);
    return true;

  } catch (error) {
    console.log(`Script error for ${locale.name}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting bulk translation updates for remaining locales...');
console.log('Locales to process:', locales.map(l => l.name).join(', '));

let successCount = 0;
let totalCount = locales.length;

locales.forEach(locale => {
  const success = updateLocale(locale);
  if (success) {
    successCount++;
  }
});

console.log(`\n========== BULK UPDATE SUMMARY ==========`);
console.log(`Successfully updated: ${successCount}/${totalCount} locales`);
console.log('Completed locales:', locales.slice(0, successCount).map(l => l.name).join(', '));

if (successCount === totalCount) {
  console.log('✅ All translation updates completed successfully!');
} else {
  console.log(`❌ ${totalCount - successCount} locale(s) failed to update`);
}
