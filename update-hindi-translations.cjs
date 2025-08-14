const fs = require('fs');
const path = require('path');

try {
  console.log('Starting Hindi translation update...');
  
  // Read the Hindi translation content
  const translationContent = fs.readFileSync('sales-marketing-hi-translations.txt', 'utf8');
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

  // Read existing Hindi locale file
  const hiPath = 'public/locales/hi.json';
  let hiContent = {};

  try {
    hiContent = JSON.parse(fs.readFileSync(hiPath, 'utf8'));
    console.log('Existing Hindi locale file loaded');
  } catch (error) {
    console.log('Creating new Hindi locale file');
    hiContent = {};
  }

  // Create backup
  const backupPath = hiPath.replace('.json', '.backup.' + Date.now() + '.json');
  fs.writeFileSync(backupPath, JSON.stringify(hiContent, null, 2));
  console.log('Backup created:', backupPath);

  // Apply translations
  let updatedCount = 0;
  Object.keys(translations).forEach(key => {
    const keys = key.split('.');
    let current = hiContent;
    
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
  fs.writeFileSync(hiPath, JSON.stringify(hiContent, null, 2));
  console.log('Successfully updated Hindi locale file');

  // Validate JSON
  try {
    JSON.parse(fs.readFileSync(hiPath, 'utf8'));
    console.log('JSON validation: PASSED');
  } catch (error) {
    console.log('JSON validation: FAILED -', error.message);
  }

  console.log('Hindi translation update completed successfully!');

} catch (error) {
  console.log('Script error:', error.message);
  console.log('Stack trace:', error.stack);
}
