import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://seasalt.ai';
const OUTPUT_PATH = path.join(__dirname, '../public/robots.txt');

// Generate robots.txt
function generateRobots() {
  let content = '';
  
  // Allow all robots
  content += 'User-agent: *\n';
  content += 'Allow: /\n\n';
  
  // Disallow admin paths (if any)
  content += 'Disallow: /admin/\n';
  content += 'Disallow: /api/\n\n';
  
  // Add sitemap location
  content += `Sitemap: ${SITE_URL}/sitemap.xml\n`;
  
  // Write to file
  fs.writeFileSync(OUTPUT_PATH, content);
  console.log(`Robots.txt generated at ${OUTPUT_PATH}`);
}

// Run the generator
generateRobots();