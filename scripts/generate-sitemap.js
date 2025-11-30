import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://seasalt.ai';
// Output to dist folder after build, and also to public for development
const OUTPUT_DIR = path.join(__dirname, '../dist');
const PUBLIC_DIR = path.join(__dirname, '../public');

// For development, also copy to public directory
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const DEV_OUTPUT = isDevelopment ? PUBLIC_DIR : null;

// Supported languages from astro.config.mjs
export const SUPPORTED_LANGUAGES = [
  'en', 'es', 'zh-TW', 'zh-CN', 'ja', 'ko', 'fr', 'de', 'ar', 'fa', 
  'fil', 'hi', 'id', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'ro'
];

// External URLs to include in sitemap (not served by this repo)
const EXTERNAL_URLS = [
  {
    url: 'https://voice.seasalt.ai/discord/',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://voice.seasalt.ai/discord/zh-tw',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://suite.seasalt.ai/',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://suite.seasalt.ai/stt',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: 'https://suite.seasalt.ai/tts',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Ensure output directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (DEV_OUTPUT && !fs.existsSync(DEV_OUTPUT)) {
  fs.mkdirSync(DEV_OUTPUT, { recursive: true });
}

/**
 * Write file to both production and development locations
 */
function writeToAllLocations(filename, content) {
  const prodPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(prodPath, content);
  
  if (DEV_OUTPUT) {
    const devPath = path.join(DEV_OUTPUT, filename);
    fs.writeFileSync(devPath, content);
  }
  
  return prodPath;
}

/**
 * Extract routes from Astro pages directory
 */
function extractAstroRoutes() {
  const routes = new Set();
  const pagesDir = path.join(__dirname, '../src/pages');
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const itemPath = path.join(dir, item.name);
      const routePath = basePath + '/' + item.name;
      
      if (item.isDirectory()) {
        // Handle [lang] dynamic directory
        if (item.name === '[lang]') {
          scanDirectory(itemPath, '');
        } else {
          scanDirectory(itemPath, routePath);
        }
      } else if (item.isFile() && item.name.endsWith('.astro')) {
        let route = routePath.replace('.astro', '');
        
        // Skip the root index.astro (it's just a redirect)
        // But allow /index from [lang] directory as it becomes the homepage
        if (route === '/index' && basePath !== '') {
          continue;
        }
        
        // Convert index.astro to directory path (including homepage)
        if (route.endsWith('/index')) {
          route = route.replace('/index', '') || '/';
        }
        
        // Special case: if route is exactly '/index' from [lang]/index.astro, it becomes '/'
        if (route === '/index') {
          route = '/';
        }
        
        // Skip dynamic blog routes ([...slug].astro) - we'll handle these separately
        if (route.includes('[') && route.includes(']')) {
          continue;
        }
        
        routes.add(route);
      }
    }
  }
  
  scanDirectory(pagesDir);
  return Array.from(routes).sort();
}

/**
 * Extract blog posts from content directory
 */
function extractBlogRoutes() {
  const routes = new Set();
  const blogContentDir = path.join(__dirname, '../src/content/blog');
  
  // Check if blog content directory exists
  if (!fs.existsSync(blogContentDir)) {
    console.log('📝 No blog content directory found, skipping blog routes');
    return [];
  }
  
  try {
    // Get all language directories
    const langDirs = fs.readdirSync(blogContentDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    // Process each language directory
    langDirs.forEach(lang => {
      const langDir = path.join(blogContentDir, lang);
      
      // Get all .md files in the language directory
      const mdFiles = fs.readdirSync(langDir)
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''));
      
      // Create routes for each blog post
      mdFiles.forEach(slug => {
        // Convert language code to match the SUPPORTED_LANGUAGES format
        let routeLang = lang;
        if (lang === 'zh-cn') routeLang = 'zh-CN';
        if (lang === 'zh-tw') routeLang = 'zh-TW';
        
        // Skip if this language is not in our supported languages list
        if (!SUPPORTED_LANGUAGES.includes(routeLang)) {
          return;
        }
        
        routes.add(`/${routeLang}/blog/${slug}`);
      });
    });
    
    console.log(`📚 Found ${routes.size} blog posts across ${langDirs.length} languages`);
    return Array.from(routes).sort();
    
  } catch (error) {
    console.error('Error scanning blog posts:', error.message);
    return [];
  }
}

/**
 * Get metadata for a route (lastmod, changefreq, priority)
 */
function getRouteMeta(route) {
  const now = new Date().toISOString().split('T')[0];
  let lastmod = now;
  let changefreq = 'weekly';
  let priority = 0.8;

  // Special cases based on route patterns
  if (route === '/' || route.endsWith('/')) {
    priority = 1.0;
    changefreq = 'weekly';
  } else if (route.includes('/pricing')) {
    priority = 0.9;
    changefreq = 'monthly';
  } else if (route.includes('/terms') || route.includes('/privacy')) {
    changefreq = 'monthly';
    priority = 0.3;
  } else if (route.includes('/seachat') || route.includes('/seax') || route.includes('/seavoice')) {
    priority = 0.9;
    changefreq = 'weekly';
  } else if (route.includes('/blog')) {
    priority = 0.7;
    changefreq = 'monthly';
  } else if (route.includes('/compare/') || route.includes('/solutions/') || route.includes('/industries/')) {
    priority = 0.8;
    changefreq = 'weekly';
  } else if (route.includes('/channels/') || route.includes('/features/') || route.includes('/integrations/')) {
    priority = 0.7;
    changefreq = 'weekly';
  }

  return { lastmod, changefreq, priority };
}

/**
 * Generate all routes with language prefixes
 */
function generateAllRoutes() {
  const baseRoutes = extractAstroRoutes();
  const blogRoutes = extractBlogRoutes();
  const allRoutes = [];

  // Add base routes for each language
  SUPPORTED_LANGUAGES.forEach(lang => {
    baseRoutes.forEach(route => {
      allRoutes.push(`/${lang}${route}`);
    });
  });
  
  // Add blog routes (these already include language prefixes)
  blogRoutes.forEach(route => {
    allRoutes.push(route);
  });

  // Add special zh-TW LINE Call Plus route (Taiwan-specific landing page)
  allRoutes.push('/zh-TW/channels/line-call-plus');

  console.log(`📄 Generated ${allRoutes.length} total routes`);
  console.log(`🌐 Base routes: ${baseRoutes.length} × ${SUPPORTED_LANGUAGES.length} languages = ${baseRoutes.length * SUPPORTED_LANGUAGES.length}`);
  console.log(`📚 Blog routes: ${blogRoutes.length}`);
  
  return allRoutes;
}

/**
 * Generate the main sitemap without hreflang tags
 */
function generateMainSitemap() {
  const allRoutes = generateAllRoutes();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add internal routes
  allRoutes.forEach(route => {
    const { lastmod, changefreq, priority } = getRouteMeta(route);
    
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  // Add external URLs
  EXTERNAL_URLS.forEach(external => {
    xml += `  <url>\n`;
    xml += `    <loc>${external.url}</loc>\n`;
    xml += `    <lastmod>${external.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${external.changefreq}</changefreq>\n`;
    xml += `    <priority>${external.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  const outputPath = writeToAllLocations('sitemap.xml', xml);
  
  const stats = fs.statSync(outputPath);
  const fileSizeInKB = stats.size / 1024;
  
  const totalUrls = allRoutes.length + EXTERNAL_URLS.length;
  console.log(`✅ Main sitemap generated at ${outputPath}`);
  console.log(`  - Internal URLs: ${allRoutes.length}`);
  console.log(`  - External URLs: ${EXTERNAL_URLS.length}`);
  console.log(`  - Total URLs: ${totalUrls}`);
  console.log(`  - File Size: ${fileSizeInKB.toFixed(2)} KB`);
  
  return totalUrls;
}

/**
 * Generate the hreflang sitemap with language mappings
 */
function generateHreflangSitemap() {
  const baseRoutes = extractAstroRoutes();
  const blogRoutes = extractBlogRoutes();
  const groupedRoutes = {};
  
  // Group routes by base path with all language variants
  baseRoutes.forEach(baseRoute => {
    groupedRoutes[baseRoute] = SUPPORTED_LANGUAGES.map(lang => `/${lang}${baseRoute}`);
  });
  
  // Group blog posts by slug to create hreflang relationships
  const blogGroupedRoutes = {};
  blogRoutes.forEach(blogRoute => {
    // Extract slug from route like "/en/blog/my-post" -> "my-post"
    const parts = blogRoute.split('/');
    const slug = parts[parts.length - 1];
    const lang = parts[1];
    
    if (!blogGroupedRoutes[slug]) {
      blogGroupedRoutes[slug] = [];
    }
    blogGroupedRoutes[slug].push(blogRoute);
  });
  
  // Only include blog posts that have multiple language versions
  // (single language posts will just be in the main sitemap without hreflang)
  Object.keys(blogGroupedRoutes).forEach(slug => {
    const routes = blogGroupedRoutes[slug];
    if (routes.length > 1) {
      groupedRoutes[`blog:${slug}`] = routes;
    }
  });
  
  // Add external URL hreflang mappings for Discord (which has zh-tw variant)
  const externalHreflangGroups = {
    'external:discord': [
      { url: 'https://voice.seasalt.ai/discord/', lang: 'en' },
      { url: 'https://voice.seasalt.ai/discord/zh-tw', lang: 'zh-TW' }
    ]
  };
  
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
      const lang = altUrl.split('/')[1]; // Extract language from URL
      xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${altUrl}" />\n`;
    });
    
    // Add x-default
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${englishUrl}" />\n`;
    xml += `  </url>\n`;
  }
  
  // Add external URLs with hreflang support
  for (const groupKey in externalHreflangGroups) {
    const urls = externalHreflangGroups[groupKey];
    const defaultUrl = urls.find(u => u.lang === 'en') || urls[0];
    
    xml += `  <url>\n`;
    xml += `    <loc>${defaultUrl.url}</loc>\n`;
    
    // Add hreflang links for all variants
    urls.forEach(urlInfo => {
      xml += `    <xhtml:link rel="alternate" hreflang="${urlInfo.lang}" href="${urlInfo.url}" />\n`;
    });
    
    // Add x-default
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl.url}" />\n`;
    xml += `  </url>\n`;
  }
  
  xml += `</urlset>`;
  
  const outputPath = writeToAllLocations('sitemap-hreflang.xml', xml);
  
  const stats = fs.statSync(outputPath);
  const fileSizeInKB = stats.size / 1024;
  
  const totalUniquePages = Object.keys(groupedRoutes).length + Object.keys(externalHreflangGroups).length;
  
  console.log(`✅ Hreflang sitemap generated at ${outputPath}`);
  console.log(`  - Internal Unique Pages: ${Object.keys(groupedRoutes).length}`);
  console.log(`  - External Pages with hreflang: ${Object.keys(externalHreflangGroups).length}`);
  console.log(`  - Total Unique Pages: ${totalUniquePages}`);
  console.log(`  - File Size: ${fileSizeInKB.toFixed(2)} KB`);
  
  return totalUniquePages;
}

/**
 * Generate Zapier integrations sitemap
 */
function generateZapierSitemap() {
  console.log('\n📱 Generating Zapier integrations sitemap...');
  
  const now = new Date().toISOString().split('T')[0];
  const zapierDataPath = path.join(__dirname, '../zapier/data/curated-apps.json');
  const actionsDataPath = path.join(__dirname, '../zapier/data/actions.json');
  
  // Load Zapier data
  let apps = [];
  let actions = [];
  
  try {
    const zapierData = JSON.parse(fs.readFileSync(zapierDataPath, 'utf8'));
    apps = zapierData.apps || [];
    
    const actionsData = JSON.parse(fs.readFileSync(actionsDataPath, 'utf8'));
    actions = actionsData.actions || [];
    
    console.log(`   Found ${apps.length} apps and ${actions.length} actions`);
  } catch (error) {
    console.error('   ⚠️  Could not load Zapier data:', error.message);
    return 0;
  }
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  const urls = [];
  
  // Add main integrations index page (English only)
  urls.push({
    loc: `${SITE_URL}/en/integrations`,
    lastmod: now,
    changefreq: 'weekly',
    priority: 0.9
  });
  
  // Add hub pages for each app (English only)
  apps.forEach(app => {
    urls.push({
      loc: `${SITE_URL}/en/integrations/${app.slug}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8
    });
    
    // Add spoke pages for each app-action combination
    actions.forEach(action => {
      urls.push({
        loc: `${SITE_URL}/en/integrations/${app.slug}/${action.slug}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.7
      });
    });
  });
  
  // Add all URLs to sitemap
  urls.forEach(({ loc, lastmod, changefreq, priority }) => {
    xml += `  <url>\n`;
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>`;
  
  const outputPath = writeToAllLocations('sitemap-zapier.xml', xml);
  
  console.log(`   ✅ Zapier sitemap generated with ${urls.length} URLs`);
  console.log(`   📍 Main index: 1 URL`);
  console.log(`   📍 Hub pages: ${apps.length} URLs`);
  console.log(`   📍 Spoke pages: ${apps.length * actions.length} URLs`);
  console.log(`   💾 Saved to ${outputPath}`);
  
  if (DEV_OUTPUT) {
    console.log(`   💾 Also copied to ${path.join(DEV_OUTPUT, 'sitemap-zapier.xml')} for development`);
  }
  
  return urls.length;
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
  
  // Zapier integrations sitemap
  xml += `  <sitemap>\n`;
  xml += `    <loc>${SITE_URL}/sitemap-zapier.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `  </sitemap>\n`;
  
  xml += `</sitemapindex>`;
  
  const outputPath = writeToAllLocations('sitemap-index.xml', xml);
  
  console.log(`\u2705 Sitemap index generated at ${outputPath}`);
  if (DEV_OUTPUT) {
    console.log(`\u2705 Also copied to ${path.join(DEV_OUTPUT, 'sitemap-index.xml')} for development`);  
  }
}

/**
 * Main execution function
 */
function main() {
  console.log('🚀 Generating Sitemaps for Astro SeaSalt.ai Website');
  console.log('===============================================\n');
  
  // Generate sitemaps
  const totalUrls = generateMainSitemap();
  const uniquePages = generateHreflangSitemap();
  const zapierUrls = generateZapierSitemap();
  generateSitemapIndex();
  
  console.log('\n🎉 Sitemap Generation Complete!');
  console.log('===============================================');
  console.log(`📊 Total URLs: ${totalUrls}`);
  console.log(`📋 Unique pages: ${uniquePages}`);
  console.log(`📱 Zapier integration URLs: ${zapierUrls}`);
  console.log(`🌍 Languages: ${SUPPORTED_LANGUAGES.length}`);
  
  console.log('\n📌 Next Steps:');
  console.log('1. Submit sitemap-index.xml to Google Search Console');
  console.log('2. Update robots.txt to point to sitemap-index.xml');
  console.log('3. Verify all URLs are accessible');
  console.log('4. Monitor crawl stats in Search Console');
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateAllRoutes, generateMainSitemap, generateHreflangSitemap, generateZapierSitemap, generateSitemapIndex };