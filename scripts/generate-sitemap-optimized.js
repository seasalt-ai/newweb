import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateAllStaticRoutes, SUPPORTED_LANGUAGES, ROUTER_FILES } from './generate-static-routes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://seasalt.ai';
const OUTPUT_DIR = path.join(__dirname, '../public');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Get metadata for a route (lastmod, changefreq, priority)
 */
function getRouteMeta(route) {
  const now = new Date().toISOString().split('T')[0];
  let lastmod = now;
  let changefreq = 'weekly';
  let priority = 0.8;

  const langRegex = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})`);
  const langMatch = route.match(langRegex);
  const baseRoute = langMatch ? (route.substring(langMatch[0].length) || '/') : route;

  // Blog posts
  if (baseRoute.startsWith('/blog/')) {
    const slug = baseRoute.replace('/blog/', '');
    const lang = langMatch ? langMatch[1] : 'en';
    const filePath = path.join(__dirname, '..', 'content', 'blog', lang, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      lastmod = fs.statSync(filePath).mtime.toISOString().split('T')[0];
    }
    changefreq = 'monthly';
    priority = 0.7;
  } else {
    // Check for file modification time based on router files
    for (const [file, prefix] of Object.entries(ROUTER_FILES)) {
      if (baseRoute.startsWith(prefix)) {
        const filePath = path.join(__dirname, '..', file);
        if (fs.existsSync(filePath)) {
          lastmod = fs.statSync(filePath).mtime.toISOString().split('T')[0];
        }
        break;
      }
    }
  }

  // Special cases
  if (baseRoute === '/') {
    priority = 1.0;
    changefreq = 'weekly'; // More realistic than 'daily'
  } else if (baseRoute.includes('pricing')) {
    priority = 0.9;
    changefreq = 'monthly';
  } else if (baseRoute.includes('terms') || baseRoute.includes('privacy')) {
    changefreq = 'monthly'; // More realistic for legal pages
    priority = 0.3;
  } else if (baseRoute.includes('seachat') || baseRoute.includes('seax') || baseRoute.includes('seavoice')) {
    priority = 0.9;
    changefreq = 'weekly';
  }

  return { lastmod, changefreq, priority };
}

/**
 * Generate the main sitemap without hreflang tags
 */
function generateMainSitemap() {
  const allRoutes = generateAllStaticRoutes();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  allRoutes.forEach(route => {
    const { lastmod, changefreq, priority } = getRouteMeta(route);
    
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  const outputPath = path.join(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  
  const stats = fs.statSync(outputPath);
  const fileSizeInKB = stats.size / 1024;
  
  console.log(`Main sitemap generated at ${outputPath}`);
  console.log(`  - Total URLs: ${allRoutes.length}`);
  console.log(`  - File Size: ${fileSizeInKB.toFixed(2)} KB`);
  
  return allRoutes.length;
}

/**
 * Generate the hreflang sitemap with language mappings
 */
function generateHreflangSitemap() {
  const allRoutes = generateAllStaticRoutes();
  const groupedRoutes = {};
  
  const langRegex = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})`);
  
  // Group routes by base path
  allRoutes.forEach(route => {
    const match = route.match(langRegex);
    if (match) {
      const baseRoute = route.substring(match[0].length) || '/';
      if (!groupedRoutes[baseRoute]) {
        groupedRoutes[baseRoute] = [];
      }
      groupedRoutes[baseRoute].push(route);
    }
  });
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  
  // For each unique page, create one entry with all hreflang links
  for (const baseRoute in groupedRoutes) {
    const alternateUrls = groupedRoutes[baseRoute];
    const englishUrl = alternateUrls.find(url => url.startsWith('/en')) || alternateUrls[0];
    
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${englishUrl}</loc>\n`;
    
    // Add hreflang links for all language versions
    alternateUrls.forEach(altUrl => {
      const langMatch = altUrl.match(langRegex);
      if (langMatch) {
        const lang = langMatch[1];
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${altUrl}" />\n`;
      }
    });
    
    // Add x-default
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${englishUrl}" />\n`;
    xml += `  </url>\n`;
  }
  
  xml += `</urlset>`;
  
  const outputPath = path.join(OUTPUT_DIR, 'sitemap-hreflang.xml');
  fs.writeFileSync(outputPath, xml);
  
  const stats = fs.statSync(outputPath);
  const fileSizeInKB = stats.size / 1024;
  
  console.log(`Hreflang sitemap generated at ${outputPath}`);
  console.log(`  - Unique Pages: ${Object.keys(groupedRoutes).length}`);
  console.log(`  - File Size: ${fileSizeInKB.toFixed(2)} KB`);
  
  return Object.keys(groupedRoutes).length;
}

/**
 * Generate the sitemap index file
 */
function generateSitemapIndex() {
  const now = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  // Main sitemap
  xml += `  <sitemap>\n`;
  xml += `    <loc>${SITE_URL}/sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `  </sitemap>\n`;
  
  // Hreflang sitemap
  xml += `  <sitemap>\n`;
  xml += `    <loc>${SITE_URL}/sitemap-hreflang.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `  </sitemap>\n`;
  
  xml += `</sitemapindex>`;
  
  const outputPath = path.join(OUTPUT_DIR, 'sitemap-index.xml');
  fs.writeFileSync(outputPath, xml);
  
  console.log(`Sitemap index generated at ${outputPath}`);
}

/**
 * Generate language-specific sitemaps (optional, for even better optimization)
 */
function generateLanguageSitemaps() {
  const allRoutes = generateAllStaticRoutes();
  const langRegex = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})`);
  const routesByLanguage = {};
  
  // Group routes by language
  allRoutes.forEach(route => {
    const match = route.match(langRegex);
    if (match) {
      const lang = match[1];
      if (!routesByLanguage[lang]) {
        routesByLanguage[lang] = [];
      }
      routesByLanguage[lang].push(route);
    }
  });
  
  // Generate a sitemap for each language
  Object.entries(routesByLanguage).forEach(([lang, routes]) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    routes.forEach(route => {
      const { lastmod, changefreq, priority } = getRouteMeta(route);
      
      xml += `  <url>\n`;
      xml += `    <loc>${SITE_URL}${route}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    });
    
    xml += `</urlset>`;
    
    const outputPath = path.join(OUTPUT_DIR, `sitemap-${lang}.xml`);
    fs.writeFileSync(outputPath, xml);
    
    const stats = fs.statSync(outputPath);
    const fileSizeInKB = stats.size / 1024;
    
    console.log(`  Language sitemap for '${lang}' generated: ${routes.length} URLs, ${fileSizeInKB.toFixed(2)} KB`);
  });
  
  return routesByLanguage;
}

/**
 * Generate an advanced sitemap index with language-specific sitemaps
 */
function generateAdvancedSitemapIndex() {
  const now = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  // Hreflang sitemap (for language mappings)
  xml += `  <sitemap>\n`;
  xml += `    <loc>${SITE_URL}/sitemap-hreflang.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `  </sitemap>\n`;
  
  // Individual language sitemaps
  SUPPORTED_LANGUAGES.forEach(lang => {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${SITE_URL}/sitemap-${lang}.xml</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  });
  
  xml += `</sitemapindex>`;
  
  const outputPath = path.join(OUTPUT_DIR, 'sitemap-index-advanced.xml');
  fs.writeFileSync(outputPath, xml);
  
  console.log(`Advanced sitemap index generated at ${outputPath}`);
}

/**
 * Main execution function
 */
function main() {
  console.log('===============================================');
  console.log('Generating Optimized Sitemaps (Option 2)');
  console.log('===============================================\n');
  
  // Option 2A: Simple approach (main + hreflang)
  console.log('Option 2A: Simple Approach (Recommended)');
  console.log('-----------------------------------------');
  const totalUrls = generateMainSitemap();
  const uniquePages = generateHreflangSitemap();
  generateSitemapIndex();
  
  console.log('\n');
  
  // Option 2B: Advanced approach (language-specific sitemaps)
  console.log('Option 2B: Advanced Approach (Maximum Optimization)');
  console.log('---------------------------------------------------');
  console.log('Generating language-specific sitemaps...');
  const languageSitemaps = generateLanguageSitemaps();
  generateAdvancedSitemapIndex();
  
  // Calculate and display savings
  console.log('\n===============================================');
  console.log('Optimization Results');
  console.log('===============================================');
  
  const originalSize = 12 * 1024; // 12MB in KB
  const mainSitemapSize = fs.statSync(path.join(OUTPUT_DIR, 'sitemap.xml')).size / 1024;
  const hreflangSitemapSize = fs.statSync(path.join(OUTPUT_DIR, 'sitemap-hreflang.xml')).size / 1024;
  const totalNewSize = mainSitemapSize + hreflangSitemapSize;
  const savings = ((originalSize - totalNewSize) / originalSize * 100).toFixed(1);
  
  console.log(`Original sitemap size: ${(originalSize / 1024).toFixed(2)} MB`);
  console.log(`New total size (Option 2A): ${(totalNewSize / 1024).toFixed(2)} MB`);
  console.log(`Size reduction: ${savings}%`);
  console.log(`\nTotal URLs: ${totalUrls}`);
  console.log(`Unique pages: ${uniquePages}`);
  console.log(`Languages: ${SUPPORTED_LANGUAGES.length}`);
  
  console.log('\n📌 Next Steps:');
  console.log('1. Submit sitemap-index.xml to Google Search Console');
  console.log('2. Update robots.txt to point to sitemap-index.xml');
  console.log('3. Remove the old 12MB sitemap.xml after confirming everything works');
  console.log('4. Monitor crawl stats in Search Console for improvements');
}

// Run the script
main();
