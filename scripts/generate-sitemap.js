import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateAllStaticRoutes, SUPPORTED_LANGUAGES, ROUTER_FILES } from './generate-static-routes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://seasalt.ai';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

function getRouteMeta(route) {
  const now = new Date().toISOString().split('T')[0];
  let lastmod = now;
  let changefreq = 'weekly';
  let priority = 0.8;

  const langRegex = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})`);
  const langMatch = route.match(langRegex);
  const baseRoute = langMatch ? (route.substring(langMatch[0].length) || '/') : route;

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

  if (baseRoute === '/') {
    priority = 1.0;
    changefreq = 'daily';
  } else if (baseRoute.includes('pricing')) {
    priority = 0.9;
    changefreq = 'monthly';
  }

  return { lastmod, changefreq, priority };
}

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

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  for (const baseRoute in groupedRoutes) {
    const alternateUrls = groupedRoutes[baseRoute];
    const englishUrl = alternateUrls.find(url => url.startsWith('/en')) || alternateUrls[0];

    alternateUrls.forEach(url => {
      const { lastmod, changefreq, priority } = getRouteMeta(url);
      xml += `  <url>
`;
      xml += `    <loc>${SITE_URL}${url}</loc>
`;
      xml += `    <lastmod>${lastmod}</lastmod>
`;

      alternateUrls.forEach(altUrl => {
        const langMatch = altUrl.match(langRegex);
        if (langMatch) {
          const lang = langMatch[1];
          xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${altUrl}" />
`;
        }
      });

      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${englishUrl}" />
`;
      xml += `    <changefreq>${changefreq}</changefreq>
`;
      xml += `    <priority>${priority}</priority>
`;
      xml += `  </url>
`;
    });
  }

  xml += `</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`Sitemap generated at ${OUTPUT_PATH}`);
  console.log('--- Sitemap Stats ---');
  console.log(`Total URLs: ${allRoutes.length}`);
  console.log(`Unique Pages: ${Object.keys(groupedRoutes).length}`);
  console.log(`Languages: ${SUPPORTED_LANGUAGES.length}`);
  console.log('---------------------');
}

generateSitemap();
