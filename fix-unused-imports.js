const fs = require('fs');
const path = require('path');

// Get all TypeScript files in src directory
function getAllTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix unused React imports
function fixUnusedReactImports(content) {
  // Remove unused React import when React is not used
  if (content.includes("import React from 'react';") && !content.includes('<') && !content.includes('React.')) {
    content = content.replace(/import React from 'react';\n?/g, '');
  }
  
  // Remove unused React from imports when only hooks are used
  if (content.includes("import React, { ") && !content.includes('<') && !content.includes('React.')) {
    content = content.replace(/import React, { (.+) } from 'react';/g, "import { $1 } from 'react';");
  }
  
  return content;
}

// Fix unused named imports
function fixUnusedNamedImports(content) {
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for import statements with named imports
    const importMatch = line.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = imports.filter(imp => {
        const importName = imp.split(' as ')[0].trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        const matches = content.match(regex);
        return matches && matches.length > 1; // More than just the import line
      });
      
      if (usedImports.length === 0) {
        // Remove entire import line
        lines[i] = '';
      } else if (usedImports.length < imports.length) {
        // Update import line with only used imports
        lines[i] = `import { ${usedImports.join(', ')} } from '${importMatch[2]}';`;
      }
    }
  }
  
  return lines.join('\n');
}

// Fix unused variables
function fixUnusedVariables(content) {
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Fix unused destructured variables
    if (line.includes('const { ') && line.includes(' } = ')) {
      const match = line.match(/const\s+{\s*([^}]+)\s*}\s*=\s*(.+);/);
      if (match) {
        const variables = match[1].split(',').map(v => v.trim());
        const usedVariables = variables.filter(variable => {
          const varName = variable.split(':')[0].trim();
          const regex = new RegExp(`\\b${varName}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1;
        });
        
        if (usedVariables.length === 0) {
          // Comment out or remove the line
          lines[i] = `  // ${line.trim()}`;
        } else if (usedVariables.length < variables.length) {
          // Update with only used variables
          lines[i] = `  const { ${usedVariables.join(', ')} } = ${match[2]};`;
        }
      }
    }
  }
  
  return lines.join('\n');
}

// Main function to fix file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply fixes
    content = fixUnusedReactImports(content);
    content = fixUnusedNamedImports(content);
    content = fixUnusedVariables(content);
    
    // Clean up empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Run the script
const srcDir = path.join(__dirname, 'src');
const tsFiles = getAllTsFiles(srcDir);

console.log(`Found ${tsFiles.length} TypeScript files`);

for (const file of tsFiles) {
  fixFile(file);
}

console.log('Done!');
