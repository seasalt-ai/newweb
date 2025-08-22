import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import your route configuration and supported languages
const SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'];

// Helper function to convert PascalCase to kebab-case
function toKebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

// Function to generate routes from directory structure
function generateRoutesFromDir(baseDir, prefix = '') {
  const routes = new Set();
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(baseDir, entry.name);
    if (entry.isDirectory()) {
      const nestedRoutes = generateRoutesFromDir(fullPath, `${prefix}/${entry.name}`);
      nestedRoutes.forEach(route => routes.add(route));
    } else if (entry.name.endsWith('.tsx')) {
      const pageName = entry.name.replace(/\.tsx$/, '').replace(/Page$/, '');
      const kebabCaseName = toKebabCase(pageName);
      
      if (kebabCaseName === 'index' || kebabCaseName === 'home') {
        routes.add(prefix || '/');
      } else {
        routes.add(`${prefix}/${kebabCaseName}`);
      }
    }
  }
  return Array.from(routes);
}


// Define your static routes (without dynamic parameters)
function getStaticRoutes(lang) {
  const prefix = `/${lang}`;
  
  const pageRoutes = generateRoutesFromDir(path.join(__dirname, '..', 'src', 'pages'));
  const seavoicePageRoutes = generateRoutesFromDir(path.join(__dirname, '..', 'src', 'seavoice', 'pages'), '/seavoice');

  const allBaseRoutes = [
    ...pageRoutes,
    ...seavoicePageRoutes,
    // Add any other manually defined routes here if necessary
    '/seachat',
    '/seachat/pricing',
    '/seachat/features',
    '/seachat/integrations',
    '/seachat/templates',
    '/seachat/use-cases',
    '/seachat/industries',
    '/seachat/channels',
    '/seachat/compare',
    '/seax',
    '/seax/pricing',
    '/seax/features',
    '/seax/integrations',
    '/seax/use-cases',
    '/seax/industries',
    '/seax/channels',
    '/seax/compare',
  ];

  // Filter out dynamic routes that might have been picked up
  const staticRoutes = allBaseRoutes.filter(route => !route.includes('['));

  return staticRoutes.map(route => {
    if (route === '/') return `${prefix}`;
    // Handle root index case for seavoice
    if (route === '/seavoice/') return `${prefix}/seavoice`;
    return `${prefix}${route.startsWith('/') ? '' : '/'}${route}`
  }).map(route => route.endsWith('/') && route.length > 1 ? route.slice(0, -1) : route);
}

// Get all blog post slugs from the content directory
function getBlogPostSlugs() {
  const blogSlugs = new Set();
  const contentDir = path.join(__dirname, '..', 'content', 'blog');
  
  if (!fs.existsSync(contentDir)) {
    console.log('📝 No blog content directory found, skipping blog routes');
    return [];
  }
  
  try {
    // Scan each language directory for blog posts
    SUPPORTED_LANGUAGES.forEach(lang => {
      const langDir = path.join(contentDir, lang);
      if (fs.existsSync(langDir)) {
        const files = fs.readdirSync(langDir).filter(file => file.endsWith('.md'));
        files.forEach(file => {
          const slug = file.replace('.md', '');
          blogSlugs.add(slug);
        });
      }
    });
    
    console.log(`📚 Found ${blogSlugs.size} unique blog post slugs`);
    return Array.from(blogSlugs);
  } catch (error) {
    console.error('Error scanning blog posts:', error.message);
    return [];
  }
}

// Generate blog routes for all languages
function getBlogRoutes() {
  const blogSlugs = getBlogPostSlugs();
  const blogRoutes = [];
  
  SUPPORTED_LANGUAGES.forEach(lang => {
    blogSlugs.forEach(slug => {
      blogRoutes.push(`/${lang}/blog/${slug}`);
    });
  });
  
  return blogRoutes;
}

// Generate language-agnostic routes that default to English
function getLanguageAgnosticRoutes() {
  const pageRoutes = generateRoutesFromDir(path.join(__dirname, '..', 'src', 'pages'));
  const seavoicePageRoutes = generateRoutesFromDir(path.join(__dirname, '..', 'src', 'seavoice', 'pages'), '/seavoice');

  const baseRoutes = [
    ...pageRoutes,
    ...seavoicePageRoutes,
    '/seachat',
    '/seax',
    '/seavoice',
    '/privacy',
    '/terms',
    '/blog',
  ].filter(route => !route.includes('['));

  // Also add blog routes without language prefix
  const blogSlugs = getBlogPostSlugs();
  blogSlugs.forEach(slug => {
    baseRoutes.push(`/blog/${slug}`);
  });
  
  console.log(`🌐 Generated ${baseRoutes.length} language-agnostic routes`);
  return baseRoutes.map(route => route.endsWith('/') && route.length > 1 ? route.slice(0, -1) : route);
}

// Main function to generate all static routes
export function generateAllStaticRoutes() {
  // Get all routes (static + blog + language-agnostic)
  const allRoutes = new Set();
  
  // Generate language-agnostic routes first (these will redirect to /en/... via the React app)
  const languageAgnosticRoutes = getLanguageAgnosticRoutes();
  languageAgnosticRoutes.forEach(route => allRoutes.add(route));
  
  // Generate static routes for each language
  SUPPORTED_LANGUAGES.forEach(lang => {
    const routes = getStaticRoutes(lang);
    routes.forEach(route => allRoutes.add(route));
  });
  
  // Add blog routes
  const blogRoutes = getBlogRoutes();
  blogRoutes.forEach(route => allRoutes.add(route));
  
  const uniqueRoutes = Array.from(allRoutes);
  console.log(`🎯 Total routes generated: ${uniqueRoutes.length}`);
  return uniqueRoutes;
}

// If this script is run directly, output the routes
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(generateAllStaticRoutes(), null, 2));
}
