import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'];

const ROUTER_FILES = {
  'src/App.tsx': '',
  'src/components/SeaChatRouter.tsx': '/seachat',
  'src/seax/utils/SeaXRouter.tsx': '/seax',
  'src/seavoice/utils/SeaVoiceRouter.tsx': '/seavoice'
};

function extractAllRoutes() {
  const routes = new Set();
  const routeRegex = /path="([^"]+)"/g;

  for (const [file, prefix] of Object.entries(ROUTER_FILES)) {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      let match;
      while ((match = routeRegex.exec(content)) !== null) {
        if (!match[1].includes('*') && !match[1].includes(':')) {
          // Normalize the path by removing leading/trailing slashes before joining
          const cleanedPath = match[1].replace(/^\/|\/$/g, '');
          const finalPath = prefix ? `${prefix}/${cleanedPath}` : `/${cleanedPath}`;
          routes.add(finalPath.replace(/\/\//g, '/')); // Avoid double slashes
        }
      }
    }
  }
  return Array.from(routes);
}

function getStaticRoutes(lang) {
  const prefix = `/${lang}`;
  const allBaseRoutes = extractAllRoutes();
  
  return allBaseRoutes.map(route => `${prefix}${route}`);
}

function getBlogPostSlugs() {
  const blogSlugs = new Set();
  const contentDir = path.join(__dirname, '..', 'content', 'blog');
  
  if (!fs.existsSync(contentDir)) {
    console.log('📝 No blog content directory found, skipping blog routes');
    return [];
  }
  
  try {
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

function getLanguageAgnosticRoutes() {
  const baseRoutes = extractAllRoutes();
  
  const blogSlugs = getBlogPostSlugs();
  blogSlugs.forEach(slug => {
    baseRoutes.push(`/blog/${slug}`);
  });
  
  console.log(`🌐 Generated ${baseRoutes.length} language-agnostic routes`);
  return baseRoutes;
}

export function generateAllStaticRoutes() {
  const allRoutes = new Set();
  
  const languageAgnosticRoutes = getLanguageAgnosticRoutes();
  languageAgnosticRoutes.forEach(route => allRoutes.add(route));
  
  SUPPORTED_LANGUAGES.forEach(lang => {
    const routes = getStaticRoutes(lang);
    routes.forEach(route => allRoutes.add(route));
  });
  
  const blogRoutes = getBlogRoutes();
  blogRoutes.forEach(route => allRoutes.add(route));
  
  const uniqueRoutes = Array.from(allRoutes).sort();
  console.log(`🎯 Total routes generated: ${uniqueRoutes.length}`);
  return uniqueRoutes;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(generateAllStaticRoutes(), null, 2));
}
