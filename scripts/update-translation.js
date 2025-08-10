import fs from 'fs';
import path from 'path';

function updateTranslation(filePath, keyPath, newValue, options = {}) {
  const { backup = true, validate = true, skipBackupMessage = false } = options;
  
  try {
    // Create backup
    if (backup) {
      const backupPath = `${filePath}.backup.${Date.now()}`;
      fs.copyFileSync(filePath, backupPath);
      if (!skipBackupMessage) {
        console.log(`✅ Backup created: ${backupPath}`);
      }
    }
    
    // Read and parse JSON
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Navigate to the key path
    const keys = keyPath.split('.');
    let current = data;
    
    // Navigate to parent object
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current)) {
        // Create nested structure if it doesn't exist
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    
    const lastKey = keys[keys.length - 1];
    const oldValue = current[lastKey];
    
    // Update the value
    current[lastKey] = newValue;
    
    // Write back to file with proper formatting
    const updatedContent = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, updatedContent);
    
    console.log(`✅ Updated ${keyPath}:`);
    console.log(`   Old: ${JSON.stringify(oldValue)}`);
    console.log(`   New: ${JSON.stringify(newValue)}`);
    
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
    console.log('❌ Update failed:', error.message);
    return false;
  }
}

// CLI usage
if (process.argv[1] && process.argv[1].endsWith('update-translation.js')) {
  const args = process.argv.slice(2);
  const noBackup = args.includes('--no-backup');
  const filteredArgs = args.filter(arg => arg !== '--no-backup');
  
  const [filePath, keyPath, newValue] = filteredArgs;
  
  if (!filePath || !keyPath || !newValue) {
    console.log('Usage: node update-translation.js <file> <key.path> <new-value> [--no-backup]');
    console.log('Example: node update-translation.js en.json "home.hero.title.line1" "New Title"');
    console.log('  --no-backup: Skip creating backup (useful for batch operations)');
    process.exit(1);
  }
  
  updateTranslation(filePath, keyPath, newValue, { backup: !noBackup });
}

export { updateTranslation };
