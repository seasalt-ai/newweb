#!/usr/bin/env node

/**
 * Generate redirect stub pages for legacy URLs.
 *
 * GitHub Pages cannot issue server-side 301s, so we emit real HTML files
 * (HTTP 200) that act as redirects:
 *   1. <script> language detection (runs before meta refresh) -> /{lang}/path
 *   2. <meta http-equiv="refresh" content="0"> fallback -> /en/path
 *   3. <link rel="canonical"> -> /en/path (consolidates SEO signals)
 *
 * Stub sources:
 *   A) dist scan (post astro build): every existing /{lang}/page/ becomes a
 *      language-detecting stub at /page/ (root entry, no lang prefix)
 *   B) missing-language blog posts: /{lang}/blog/{slug} -> /en/blog/{slug}
 *      when the EN version exists but the translated one does not
 *   C) optional scripts/gsc-404-urls.txt: one URL per line from the GSC
 *      Coverage -> 404 export; each is mapped through the rule engine
 *   D) fixed special mappings (signup/signin -> meet.seasalt.ai, ...)
 *
 * Long-tail integration URLs (/{lang}/integrations/** and nested
 * /{lang}/seachat/integrations/**) are NOT stubbed (would be 31k+ files);
 * they are handled client-side by public/404.html -> public/redirect.html.
 *
 * Safety: never overwrites an existing real page (dist/{path}/index.html),
 * and never writes outside dist/.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://seasalt.ai';
// DIST_DIR can be overridden (e.g. testing with a fixture directory)
const DIST_DIR = process.env.DIST_DIR
  ? path.resolve(process.env.DIST_DIR)
  : path.join(__dirname, '../dist');
const GSC_LIST = path.join(__dirname, 'gsc-404-urls.txt');

const SUPPORTED_LANGS = [
  'en', 'es', 'zh-TW', 'zh-CN', 'ja', 'ko', 'fr', 'de', 'ar', 'fa',
  'fil', 'hi', 'id', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'ro'
];
const LANG_SET = new Set(SUPPORTED_LANGS.map(l => l.toLowerCase()));

const ZAPIER_ACTIONS = ['sms', 'whatsapp', 'phone-call'];

// ---------------------------------------------------------------------------
// Stub HTML template
// ---------------------------------------------------------------------------

// Compact language detector (mirrors public/redirect.html logic, no logging)
const DETECT_JS = `
var S=${JSON.stringify(SUPPORTED_LANGS)};
var L={};S.forEach(function(x){L[x.toLowerCase()]=x;});
var M={"zh-hans":"zh-CN","zh-hant":"zh-TW","zh-hk":"zh-TW","zh-mo":"zh-TW","zh-sg":"zh-CN","zh":"zh-TW","tl":"fil","fil-ph":"fil","fa-ir":"fa","ms-my":"ms","ta-in":"ta","hi-in":"hi","id-id":"id","th-th":"th","vi-vn":"vi"};
var T={"asia/tokyo":"ja","asia/seoul":"ko","asia/shanghai":"zh-CN","asia/hong_kong":"zh-TW","asia/taipei":"zh-TW","asia/singapore":"zh-CN","asia/bangkok":"th","asia/ho_chi_minh":"vi","asia/jakarta":"id","asia/kuala_lumpur":"ms","asia/manila":"fil","asia/kolkata":"hi","asia/tehran":"fa","asia/dubai":"ar","asia/riyadh":"ar","europe/berlin":"de","europe/paris":"fr","europe/madrid":"es","europe/rome":"es","europe/warsaw":"pl","europe/moscow":"ru","america/mexico_city":"es","america/sao_paulo":"pt"};
function d(){try{var s=localStorage.getItem("seasalt-preferred-language");if(s&&L[s.toLowerCase()])return L[s.toLowerCase()]}catch(e){}
var a=navigator.languages||[navigator.language||""];for(var i=0;i<a.length;i++){var x=String(a[i]||"").trim(),lo=x.toLowerCase();
if(L[lo])return L[lo];if(M[lo]&&L[M[lo]])return M[lo];
var p=lo.split("-")[0];if(L[p])return L[p];
if(p==="zh")return(lo.indexOf("cn")>-1||lo.indexOf("hans")>-1)?"zh-CN":"zh-TW";}
try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();if(T[t])return T[t]}catch(e){}
return "en";}
`.trim();

/**
 * Build a stub HTML document.
 * @param {string} basePath  e.g. '/blog/16-foo/' (used with available langs)
 * @param {string[]} avail   languages in which this page exists
 * @param {string} primary   absolute fallback/canonical target URL path ('/en/...')
 */
function buildDetectStub(basePath, avail, primary) {
  const availJson = JSON.stringify(avail);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${SITE_URL}${primary}">
<script>
(function(){
${DETECT_JS}
var A=${availJson};
var P=${JSON.stringify(basePath)};
var d0=d();
var t=A.indexOf(d0)>-1?"/"+d0+P:(A.indexOf("en")>-1?"/en"+P:"/"+A[0]+P);
location.replace(t);
})();
</script>
<meta http-equiv="refresh" content="0; url=${primary}">
</head>
<body><p>Redirecting&hellip; <a href="${primary}">Continue</a></p></body>
</html>
`;
}

/** Static stub: always goes to one target (internal path or absolute URL). */
function buildFixedStub(target, { canonical = true } = {}) {
  const isAbsolute = /^https?:\/\//.test(target);
  const canonTag = canonical && !isAbsolute
    ? `<link rel="canonical" href="${SITE_URL}${target}">`
    : (canonical && isAbsolute ? `<link rel="canonical" href="${target}">` : '<meta name="robots" content="noindex">');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
${canonTag}
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace("${target}");</script>
</head>
<body><p>Redirecting&hellip; <a href="${target}">Continue</a></p></body>
</html>
`;
}

// ---------------------------------------------------------------------------
// dist scanning
// ---------------------------------------------------------------------------

/** Walk dist/ and collect localized page paths ('/en/careers/') that have index.html */
function scanExistingPages() {
  const found = [];
  const queue = [{ dir: DIST_DIR, prefix: '' }];
  while (queue.length) {
    const { dir, prefix } = queue.shift();
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    if (entries.some(e => e.isFile() && e.name === 'index.html')) {
      found.push(prefix + '/');
    }
    for (const e of entries) {
      if (e.isDirectory() && e.name !== '_astro') {
        queue.push({ dir: path.join(dir, e.name), prefix: prefix + '/' + e.name });
      }
    }
  }
  return found;
}

/** Group existing localized pages by base path (lang stripped). */
function groupByBase(localizedPaths) {
  const map = new Map(); // basePath -> Set(langs)
  for (const p of localizedPaths) {
    const parts = p.split('/').filter(Boolean);
    if (!parts.length) continue;
    const lang = parts[0];
    if (!LANG_SET.has(lang.toLowerCase())) continue;
    const base = '/' + parts.slice(1).join('/') + '/';
    if (!map.has(base)) map.set(base, new Set());
    map.get(base).add(SUPPORTED_LANGS.find(l => l.toLowerCase() === lang.toLowerCase()));
  }
  return map;
}

// ---------------------------------------------------------------------------
// GSC list rule engine
// ---------------------------------------------------------------------------

const GARBAGE_PREFIX_RE = new RegExp(
  '^(?:' + SUPPORTED_LANGS.join('|') + ')(?:l|lutions|dustries|annels)$', 'i'
);

function isGarbagePath(pathname) {
  const seg = pathname.split('/').filter(Boolean);
  if (!seg.length) return false;
  const first = seg[0];
  if (first.toLowerCase() === 'https:') return true; // double-protocol junk
  if (LANG_SET.has(first.toLowerCase())) return false;
  if (GARBAGE_PREFIX_RE.test(first)) return true; // /arl /kol /ardustries ...
  return false;
}

/** Rewrite an integration-ish path to its /en/integrations/ equivalent. */
function rewriteIntegrations(p) {
  // /{lang}/seachat/integrations/... | /{lang}/seax/integrations/... | /{lang}/integrations/... | /integrations/...
  const m = p.match(/^\/(?:[a-zA-Z-]+\/)?(?:(?:seachat|seax)\/)?integrations\/?(.*)$/i);
  if (!m) return null;
  // verify optional first segment was actually a lang (or absent)
  const firstSeg = (p.match(/^\/([a-zA-Z-]+)\//) || [])[1];
  if (firstSeg && !LANG_SET.has(firstSeg.toLowerCase()) && firstSeg !== 'integrations'
      && !/^(seachat|seax)$/i.test(firstSeg)) return null;
  let rest = m[1].replace(/\/app_images(\/.*)?$/i, '').replace(/\/+$/, '');
  const parts = rest.split('/').filter(Boolean);
  if (parts.length >= 2 && !ZAPIER_ACTIONS.includes(parts[1])) {
    // old channel slug that no longer exists -> keep hub page only
    parts.splice(1);
  }
  const target = '/en/integrations' + (parts.length ? '/' + parts.join('/') : '') + '/';
  return target;
}

/**
 * Compute a stub target for a legacy URL.
 * Returns { target, fixed } or null when no rule applies.
 */
function computeRedirect(pathname) {
  let p = pathname.replace(/\/app_images(\/.*)?$/i, '').replace(/\/+$/, '') || '/';

  // signup / signin -> meet.seasalt.ai
  if (/^\/(?:[a-zA-Z-]{2,7}\/)?signup$/.test(p)) {
    return { target: 'https://meet.seasalt.ai/signup', fixed: true, canonical: false };
  }
  if (/^\/(?:[a-zA-Z-]{2,7}\/)?signin$/.test(p)) {
    return { target: 'https://meet.seasalt.ai/signin', fixed: true, canonical: false };
  }
  // contact-ish legacy pages -> pricing (closest current page)
  if (/^\/(?:[a-zA-Z-]{2,7}\/)?(?:contact|contact-sales|contactus|contact-us)$/.test(p)) {
    return { target: '/en/pricing/', fixed: true };
  }

  // integrations (any language / nested product prefix)
  const integ = rewriteIntegrations(p);
  if (integ) return { target: integ, fixed: true };

  return null; // fall back to generic handling by caller
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function writeStub(relPath, html, stats) {
  const abs = path.join(DIST_DIR, relPath);
  const dir = path.dirname(abs);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(abs, html);
  stats.written++;
}

function main() {
  console.log('🔗 Generating redirect stubs...');
  if (!fs.existsSync(DIST_DIR)) {
    console.error('   ❌ dist/ not found — run `astro build` first.');
    process.exit(1);
  }

  const stats = { written: 0, skippedReal: 0, gscTotal: 0, gscGarbage: 0, gscMapped: 0, gscNoRule: 0 };

  const existing = new Set(scanExistingPages());
  const byBase = groupByBase([...existing]);
  console.log(`   📄 Existing localized pages in dist: ${existing.size} (${byBase.size} unique base paths)`);

  // --- A) root entry stubs (language-detecting) --------------------------
  for (const [base, langSet] of byBase) {
    if (base === '/') continue; // homepage handled by index.astro
    const rootDir = path.join(DIST_DIR, base);
    if (fs.existsSync(path.join(rootDir, 'index.html'))) {
      stats.skippedReal++; // a real unprefixed page exists
      continue;
    }
    const avail = SUPPORTED_LANGS.filter(l => langSet.has(l));
    const primary = avail.includes('en') ? '/en' + base : '/' + avail[0] + base;
    writeStub(base.slice(1) + 'index.html', buildDetectStub(base, avail, primary), stats);
  }
  console.log(`   ✅ Root entry stubs: ${stats.written} (skipped ${stats.skippedReal} real pages)`);

  // --- B) missing-language blog stubs ------------------------------------
  const before = stats.written;
  const enSlugs = [];
  // collect EN blog slugs from dist structure
  const enBlogDir = path.join(DIST_DIR, 'en/blog');
  if (fs.existsSync(enBlogDir)) {
    for (const e of fs.readdirSync(enBlogDir, { withFileTypes: true })) {
      if (e.isDirectory()) enSlugs.push(e.name);
    }
  }
  const langHasSlug = (lang, slug) =>
    existing.has(`/${lang}/blog/${slug}/`);
  for (const lang of SUPPORTED_LANGS) {
    if (lang === 'en') continue;
    for (const slug of enSlugs) {
      const stubPath = `/${lang}/blog/${slug}/`;
      if (existing.has(stubPath)) continue;
      if (fs.existsSync(path.join(DIST_DIR, stubPath, 'index.html'))) continue;
      writeStub(`${lang}/blog/${slug}/index.html`,
        buildFixedStub(`/en/blog/${slug}/`), stats);
    }
  }
  console.log(`   ✅ Missing-language blog stubs: ${stats.written - before} (EN posts: ${enSlugs.length})`);

  // --- C) fixed special stubs --------------------------------------------
  const beforeFixed = stats.written;
  const FIXED = [
    ['/channels/line-call-plus/', '/zh-TW/channels/line-call-plus/'],
  ];
  for (const [from, to] of FIXED) {
    if (fs.existsSync(path.join(DIST_DIR, from, 'index.html'))) continue;
    writeStub(from.slice(1) + 'index.html', buildFixedStub(to), stats);
  }
  console.log(`   ✅ Fixed special stubs: ${stats.written - beforeFixed}`);

  // --- D) GSC 404 list (optional) -----------------------------------------
  if (fs.existsSync(GSC_LIST)) {
    const urls = fs.readFileSync(GSC_LIST, 'utf8')
      .split('\n').map(l => l.trim())
      .filter(l => l && !l.startsWith('#'));
    stats.gscTotal = urls.length;
    for (const line of urls) {
      let pathname;
      try {
        const u = new URL(line, SITE_URL);
        pathname = u.pathname;
      } catch { stats.gscNoRule++; continue; }

      if (isGarbagePath(pathname)) { stats.gscGarbage++; continue; }

      // strip app_images noise
      const clean = pathname.replace(/\/app_images(\/.*)?$/i, '').replace(/\/+$/, '') || '/';
      const stubDir = path.join(DIST_DIR, clean);
      if (fs.existsSync(path.join(stubDir, 'index.html'))) continue; // already served

      const r = computeRedirect(clean);
      if (r && r.fixed) {
        writeStub(clean.slice(1) + '/index.html',
          buildFixedStub(r.target, { canonical: r.canonical !== false }), stats);
        stats.gscMapped++;
        continue;
      }

      // generic: /{path} matching a known base path -> detect stub
      const base = clean + '/';
      if (byBase.has(base) && !fs.existsSync(path.join(DIST_DIR, base, 'index.html'))) {
        const avail = SUPPORTED_LANGS.filter(l => byBase.get(base).has(l));
        const primary = avail.includes('en') ? '/en' + base : '/' + avail[0] + base;
        writeStub(base.slice(1) + 'index.html', buildDetectStub(base, avail, primary), stats);
        stats.gscMapped++;
        continue;
      }

      // /blog/{slug} without lang prefix
      const bm = clean.match(/^\/blog\/(.+)$/);
      if (bm && langHasSlug('en', bm[1])) {
        writeStub(`blog/${bm[1]}/index.html`, buildFixedStub(`/en/blog/${bm[1]}/`), stats);
        stats.gscMapped++;
        continue;
      }
      stats.gscNoRule++;
    }
    console.log(`   ✅ GSC list: ${stats.gscTotal} URLs -> ${stats.gscMapped} stubs, ${stats.gscGarbage} garbage (kept 404), ${stats.gscNoRule} no rule`);
    console.log('      (no-rule URLs are handled client-side by 404.html rewrite engine)');
  } else {
    console.log('   ℹ️  No scripts/gsc-404-urls.txt found (optional full GSC 404 export)');
  }

  console.log(`\n🎉 Stub generation complete: ${stats.written} stub files written to dist/`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateRedirectStubs };
