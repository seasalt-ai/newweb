import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateAllStaticRoutes, SUPPORTED_LANGUAGES } from './generate-static-routes.mjs';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://seasalt.ai';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Generate sitemap XML
function generateSitemap() {
  const allRoutes = generateAllStaticRoutes();
  const groupedRoutes = {};

  const langRegex = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})`);

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

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const baseRoute in groupedRoutes) {
    const alternateUrls = groupedRoutes[baseRoute];
    const englishUrl = alternateUrls.find(url => url.startsWith('/en')) || alternateUrls[0];

    alternateUrls.forEach(url => {
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}${url}</loc>\n`;

      alternateUrls.forEach(altUrl => {
        const langMatch = altUrl.match(langRegex);
        if (langMatch) {
          const lang = langMatch[1];
          xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${altUrl}" />\n`;
        }
      });

      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${englishUrl}" />\n`;
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += '  </url>\n';
    });
  }

  xml += '</urlset>';

  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`Sitemap generated at ${OUTPUT_PATH}`);
}

generateSitemap();
