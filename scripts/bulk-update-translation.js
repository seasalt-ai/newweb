import fs from 'fs';
import path from 'path';

function bulkUpdateTranslation(filePath, updates, options = {}) {
  const { backup = true, validate = true } = options;
  
  try {
    // Create ONE backup before any changes
    if (backup) {
      const timestamp = Date.now();
      const backupPath = `${filePath}.backup.${timestamp}`;
      fs.copyFileSync(filePath, backupPath);
      console.log(`✅ Single backup created: ${backupPath}`);
    }
    
    // Read and parse JSON
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    let changeCount = 0;
    
    // Deep merge function to handle nested objects
    function deepMerge(target, source, currentPath = '') {
      for (const key in source) {
        const fullPath = currentPath ? `${currentPath}.${key}` : key;
        
        if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
          // Handle nested objects
          if (!target[key] || typeof target[key] !== 'object') {
            target[key] = {};
          }
          deepMerge(target[key], source[key], fullPath);
        } else {
          // Handle primitive values and arrays
          const oldValue = target[key];
          target[key] = source[key];
          
          if (oldValue !== source[key]) {
            console.log(`✅ Updated ${fullPath}:`);
            console.log(`   Old: ${JSON.stringify(oldValue)}`);
            console.log(`   New: ${JSON.stringify(source[key])}`);
            changeCount++;
          }
        }
      }
    }
    
    // Apply all updates
    deepMerge(data, updates);
    
    // Write back to file with proper formatting
    const updatedContent = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, updatedContent);
    
    console.log(`\n🎉 Bulk update completed: ${changeCount} changes made`);
    
    // Validate the result
    if (validate) {
      try {
        JSON.parse(fs.readFileSync(filePath, 'utf8'));
        console.log('✅ JSON validation passed');
      } catch (error) {
        console.log('❌ JSON validation failed:', error.message);
        return false;
      }
    }
    
    return true;
    
  } catch (error) {
    console.log('❌ Bulk update failed:', error.message);
    return false;
  }
}

// CLI usage
if (process.argv[1] && process.argv[1].endsWith('bulk-update-translation.js')) {
  const [,, filePath, updatesFile] = process.argv;
  
  if (!filePath || !updatesFile) {
    console.log('Usage: node bulk-update-translation.js <file> <updates-json-file>');
    console.log('Example: node bulk-update-translation.js en.json updates.json');
    console.log('\nAlternatively, you can import and use programmatically:');
    console.log('import { bulkUpdateTranslation } from "./bulk-update-translation.js";');
    console.log('bulkUpdateTranslation("en.json", { key: "value", nested: { key: "value" } });');
    process.exit(1);
  }
  
  try {
    const updates = JSON.parse(fs.readFileSync(updatesFile, 'utf8'));
    bulkUpdateTranslation(filePath, updates);
  } catch (error) {
    console.log('❌ Error reading updates file:', error.message);
    process.exit(1);
  }
}

export { bulkUpdateTranslation };
