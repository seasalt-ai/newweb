import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://seasalt.ai';
const LANGUAGES = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ru', 'ar', 'zh-TW', 'ja', 'ko', 'vi', 'th', 'hi'];
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Get all blog posts
function getBlogPosts() {
  const blogPosts = [];
  
  // Get all markdown files in the content directory
  const contentFiles = glob.sync('content/**/*.md');
  
  contentFiles.forEach(file => {
    // Only process files like content/en/blog-post.md
    const pathParts = file.split('/');
    if (pathParts.length === 3) {
      const lang = pathParts[1];
      const slug = pathParts[2].replace('.md', '');
      blogPosts.push({ lang, slug });
    }
  });
  
  return blogPosts;
}

// Generate sitemap XML
function generateSitemap() {
  const blogPosts = getBlogPosts();
  
  // Start XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  // Add static pages for each language
  LANGUAGES.forEach(lang => {
    // Home page
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/${lang}</loc>\n`;
    
    // Add alternate language versions
    LANGUAGES.forEach(alternateLang => {
      xml += `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${SITE_URL}/${alternateLang}" />\n`;
    });
    
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>1.0</priority>\n';
    xml += '  </url>\n';
    
    // Other static pages
    const staticPages = [
      'pricing',
      'channels-overview',
      'compare-us-overview',
      'blog'
    ];
    
    staticPages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}/${lang}/${page}</loc>\n`;
      
      // Add alternate language versions
      LANGUAGES.forEach(alternateLang => {
        xml += `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${SITE_URL}/${alternateLang}/${page}" />\n`;
      });
      
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += '  </url>\n';
    });
  });
  
  // Add blog posts
  blogPosts.forEach(post => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/${post.lang}/blog/${post.slug}</loc>\n`;
    
    // Add alternate language versions if they exist
    const alternateVersions = blogPosts.filter(p => p.slug === post.slug && p.lang !== post.lang);
    alternateVersions.forEach(alt => {
      xml += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${SITE_URL}/${alt.lang}/blog/${alt.slug}" />\n`;
    });
    
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });
  
  // Close XML
  xml += '</urlset>';
  
  // Write to file
  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`Sitemap generated at ${OUTPUT_PATH}`);
}

// Run the generator
generateSitemap();