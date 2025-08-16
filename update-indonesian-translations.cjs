const fs = require('fs');
const path = require('path');

try {
  console.log('Starting Indonesian translation update...');
  
  // Read the Indonesian translation content
  const translationContent = fs.readFileSync('sales-marketing-id-translations.txt', 'utf8');
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

  // Read existing Indonesian locale file
  const idPath = 'public/locales/id.json';
  let idContent = {};

  try {
    idContent = JSON.parse(fs.readFileSync(idPath, 'utf8'));
    console.log('Existing Indonesian locale file loaded');
  } catch (error) {
    console.log('Creating new Indonesian locale file');
    idContent = {};
  }

  // Create backup
  const backupPath = idPath.replace('.json', '.backup.' + Date.now() + '.json');
  fs.writeFileSync(backupPath, JSON.stringify(idContent, null, 2));
  console.log('Backup created:', backupPath);

  // Apply translations
  let updatedCount = 0;
  Object.keys(translations).forEach(key => {
    const keys = key.split('.');
    let current = idContent;
    
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
  fs.writeFileSync(idPath, JSON.stringify(idContent, null, 2));
  console.log('Successfully updated Indonesian locale file');

  // Validate JSON
  try {
    JSON.parse(fs.readFileSync(idPath, 'utf8'));
    console.log('JSON validation: PASSED');
  } catch (error) {
    console.log('JSON validation: FAILED -', error.message);
  }

  console.log('Indonesian translation update completed successfully!');

} catch (error) {
  console.log('Script error:', error.message);
  console.log('Stack trace:', error.stack);
}
