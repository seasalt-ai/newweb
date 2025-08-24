import fs from 'fs/promises';
import path from 'path';
import puppeteer from 'puppeteer';
import { generateAllStaticRoutes } from './generate-static-routes.mjs';

const routes = generateAllStaticRoutes();
const distPath = path.resolve(process.cwd(), 'dist');

async function prerender() {
  console.log(`🚀 Starting fast prerendering for ${routes.length} routes...`);
  const startTime = Date.now();
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const url = `file://${distPath}/index.html#${route}`;
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait longer for React to fully render and navigate
      await new Promise(resolve => setTimeout(resolve, 3000));

      const content = await page.content();
      
      // Handle special cases for root routes
      let routePath;
      if (route === '' || route === '/') {
        routePath = distPath;
      } else {
        routePath = path.join(distPath, route);
        await fs.mkdir(routePath, { recursive: true });
      }
      
      const htmlPath = route === '' || route === '/' ? 
        path.join(distPath, 'index.html') : 
        path.join(routePath, 'index.html');
        
      await fs.writeFile(htmlPath, content);

      if (i % 100 === 0 || i < 5) {
        console.log(`✅ Prerendered (${i + 1}/${routes.length}): ${route || '/'} -> ${path.relative(distPath, htmlPath)}`);
      }
    } catch (error) {
      console.error(`❌ Error prerendering ${route}:`, error.message);
      // Continue with next route instead of failing completely
    }
  }

  await browser.close();
  
  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`🎉 Prerendering complete in ${totalTime}s! All ${routes.length} routes processed.`);
}

prerender().catch(error => {
  console.error('❌ Prerendering failed:', error);
  process.exit(1);
});