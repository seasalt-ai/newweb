import fs from 'fs';

function validateJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(content);
    
    const issues = [];
    
    // Check for duplicate keys at each level
    function findDuplicateKeys(obj, path = '') {
      if (typeof obj !== 'object' || obj === null) return;
      
      const keys = Object.keys(obj);
      const seen = new Set();
      
      for (const key of keys) {
        if (seen.has(key)) {
          issues.push(`Duplicate key "${key}" at path: ${path || 'root'}`);
        }
        seen.add(key);
        
        findDuplicateKeys(obj[key], path ? `${path}.${key}` : key);
      }
    }
    
    // Check for trailing commas (this would fail JSON.parse anyway)
    const trailingCommaRegex = /,(\s*[}\]])/g;
    const matches = content.match(trailingCommaRegex);
    if (matches) {
      issues.push(`Found ${matches.length} trailing commas`);
    }
    
    // Check for missing commas (basic check)
    const lines = content.split('\n');
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.endsWith('"') && lines[index + 1]?.trim().startsWith('"')) {
        if (!line.includes(',')) {
          issues.push(`Possible missing comma at line ${index + 1}: ${line.trim()}`);
        }
      }
    });
    
    findDuplicateKeys(parsed);
    
    if (issues.length === 0) {
      console.log(`✅ ${filePath} is valid JSON with no structural issues`);
      return true;
    } else {
      console.log(`❌ ${filePath} has ${issues.length} issues:`);
      issues.forEach(issue => console.log(`  - ${issue}`));
      return false;
    }
    
  } catch (error) {
    console.log(`❌ ${filePath} is invalid JSON:`, error.message);
    return false;
  }
}

// Usage
const filePath = process.argv[2] || './public/locales/en.json';
validateJSON(filePath);
