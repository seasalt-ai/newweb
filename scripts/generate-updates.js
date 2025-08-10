import fs from 'fs';

/**
 * Generate nested JSON structure from dot-notation keys
 * @param {Array} keyValuePairs - Array of [key, value] pairs
 * @returns {Object} Nested JSON object
 */
function generateNestedJson(keyValuePairs) {
  const result = {};
  
  keyValuePairs.forEach(([key, value]) => {
    const keys = key.split('.');
    let current = result;
    
    // Navigate to the parent object
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    
    // Set the final value
    const lastKey = keys[keys.length - 1];
    current[lastKey] = value;
  });
  
  return result;
}

/**
 * Parse a text file with key=value pairs into nested JSON
 * @param {string} inputFile - Path to input file
 * @param {string} outputFile - Path to output JSON file
 */
function generateUpdatesFromFile(inputFile, outputFile) {
  try {
    const content = fs.readFileSync(inputFile, 'utf8');
    const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('#'));
    
    const keyValuePairs = lines.map(line => {
      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('=').replace(/^["']|["']$/g, ''); // Remove quotes
      return [key.trim(), value.trim()];
    });
    
    const nestedJson = generateNestedJson(keyValuePairs);
    
    fs.writeFileSync(outputFile, JSON.stringify(nestedJson, null, 2));
    console.log(`✅ Generated ${outputFile} with ${keyValuePairs.length} translations`);
    
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

// CLI usage
if (process.argv[1] && process.argv[1].endsWith('generate-updates.js')) {
  const [,, inputFile, outputFile] = process.argv;
  
  if (!inputFile || !outputFile) {
    console.log('Usage: node generate-updates.js <input-file> <output-json>');
    console.log('\nInput file format (key=value pairs):');
    console.log('channels.inPerson.hero.title=In-Person + SeaMeet');
    console.log('channels.inPerson.hero.subtitle=Transform your meetings');
    console.log('channels.inPerson.features.speakerId.title=Advanced Speaker ID');
    console.log('\nExample:');
    console.log('node generate-updates.js translations.txt updates.json');
    process.exit(1);
  }
  
  generateUpdatesFromFile(inputFile, outputFile);
}

export { generateNestedJson, generateUpdatesFromFile };
