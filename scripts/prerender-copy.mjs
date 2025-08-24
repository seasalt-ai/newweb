/**
 * Simple Copy-Based Prerendering for GitHub Pages
 * 
 * HOW IT WORKS:
 * 1. Reads the main index.html file (contains the React app bundle)
 * 2. Copies it to every route directory (e.g., /en/pricing/index.html, /zh-TW/blog/post/index.html)
 * 3. Creates proper directory structure so GitHub Pages serves each route with 200 OK
 * 
 * WHY WE USE THIS METHOD:
 * - Solves the fundamental SPA problem: prevents 404 errors on direct navigation
 * - GitHub Pages serves /en/pricing/ → returns dist/en/pricing/index.html (200 OK)
 * - React app boots up, sees pathname "/en/pricing/", navigates to correct route
 * - Modern search engines (Google, Bing) execute JavaScript and see unique content
 * - Much faster than Puppeteer-based prerendering (pure file copying vs browser automation)
 * - Perfect for static hosting: no server config needed, works out of the box
 * 
 * RESULT: Clean URLs + SEO success + No 404 errors + Fast builds
 */

import fs from 'fs/promises';
import path from 'path';
import { generateAllStaticRoutes } from './generate-static-routes.mjs';

const routes = generateAllStaticRoutes();
const distPath = path.resolve(process.cwd(), 'dist');

async function prerenderByCopy() {
  console.log(`🚀 Starting simple copy-based prerendering for ${routes.length} routes...`);
  const startTime = Date.now();
  
  // Read the main index.html file once
  const mainIndexPath = path.join(distPath, 'index.html');
  
  try {
    const indexContent = await fs.readFile(mainIndexPath, 'utf8');
    console.log(`📄 Read main index.html (${indexContent.length} characters)`);
    
    let processedCount = 0;
    
    for (const route of routes) {
      // Handle special cases for root routes
      if (route === '' || route === '/') {
        // Skip root routes - they already have index.html
        continue;
      }
      
      // Create the directory structure for this route
      const routePath = path.join(distPath, route);
      await fs.mkdir(routePath, { recursive: true });
      
      // Copy the index.html content to this route's index.html
      const routeIndexPath = path.join(routePath, 'index.html');
      await fs.writeFile(routeIndexPath, indexContent);
      
      processedCount++;
      
      // Progress logging
      if (processedCount % 100 === 0 || processedCount <= 5) {
        console.log(`✅ Copied (${processedCount}/${routes.length - 2}): ${route} -> ${path.relative(distPath, routeIndexPath)}`);
      }
    }
    
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`🎉 Copy-based prerendering complete in ${totalTime}s! Processed ${processedCount} routes.`);

    const totalTimeNum = parseFloat(totalTime);
    if (totalTimeNum > 0) {
      console.log(`📊 Performance: ${(processedCount / totalTimeNum).toFixed(1)} routes/second`);
    }
    
  } catch (error) {
    console.error('❌ Error during copy-based prerendering:', error.message);
    process.exit(1);
  }
}

prerenderByCopy();