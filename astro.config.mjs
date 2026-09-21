// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import fs from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';

/**
 * Inject intrinsic width/height into markdown images that reference local
 * files under public/. Without dimensions the browser cannot reserve layout
 * space, which was the main CLS driver on blog posts (GSC Core Web Vitals:
 * CLS > 0.1 on 22 URLs, largest group vi/blog/26). Also marks body images
 * lazy + async-decoded; remote images are left untouched.
 *
 * Handles BOTH syntaxes:
 * - `![]()` markdown images → hast element nodes (set properties)
 * - raw HTML `<img>` (most posts use this) → 'raw' nodes; patched as string
 *   (no rehype-raw re-parsing, to avoid altering the other 466 posts' HTML)
 *
 * Perf notes: Astro re-compiles a markdown entry per localized page, so this
 * must stay cheap — synchronous tree walk and a module-level dimension cache
 * keyed by src (each unique image file is read once per build).
 */
const localImageDimensions = new Map();

function getLocalDimensions(src) {
  if (!localImageDimensions.has(src)) {
    let dim = null;
    try {
      const fsPath = path.join('./public', src);
      if (fs.existsSync(fsPath)) {
        dim = imageSize(fs.readFileSync(fsPath));
      }
    } catch {
      /* unreadable image: leave as-is */
    }
    localImageDimensions.set(src, dim);
  }
  return localImageDimensions.get(src);
}

function rehypeLocalImageSize() {
  // The first content image of a post is a common LCP element on mobile
  // (GSC reports LCP > 4s on 10 URLs) — keep it eager + high priority.
  let firstImgSeen = false;

  const patchRawImgTag = (tag) => {
    const srcMatch = tag.match(/\ssrc="(\/[^"]+)"/);
    if (!srcMatch || srcMatch[1].startsWith('//')) return tag;
    let out = tag;
    const dim = getLocalDimensions(srcMatch[1]);
    if (dim && dim.width && dim.height) {
      const hasW = /\swidth="/.test(out);
      const hasH = /\sheight="/.test(out);
      // "550" and "400px" both count as author intent (pure digits are used);
      // non-numeric values (e.g. "100%") cannot derive an aspect pair
      const wAttr = out.match(/\swidth="(\d+)(px)?"/);
      const hAttr = out.match(/\sheight="(\d+)(px)?"/);
      if (hasW && !hasH && wAttr) {
        const h = Math.round(parseInt(wAttr[1], 10) * dim.height / dim.width);
        out = out.replace(/\s*\/?>\s*$/, ` height="${h}"$&`);
      } else if (hasH && !hasW && hAttr) {
        const w = Math.round(parseInt(hAttr[1], 10) * dim.width / dim.height);
        out = out.replace(/\s*\/?>\s*$/, ` width="${w}"$&`);
      } else if (!hasW && !hasH) {
        out = out.replace(/\s*\/?>\s*$/, ` width="${dim.width}" height="${dim.height}"$&`);
      }
      // normalize invalid "Npx" attribute values — browsers ignore them entirely
      if (wAttr && wAttr[2]) out = out.replace(`width="${wAttr[1]}px"`, `width="${wAttr[1]}"`);
      if (hAttr && hAttr[2]) out = out.replace(`height="${hAttr[1]}px"`, `height="${hAttr[1]}"`);
    }
    if (!/\sloading=/.test(out)) {
      out = out.replace(/\s*\/?>\s*$/, firstImgSeen ? ` loading="lazy"$&` : ` fetchpriority="high"$&`);
    }
    if (!/\sdecoding=/.test(out)) {
      out = out.replace(/\s*\/?>\s*$/, ` decoding="async"$&`);
    }
    firstImgSeen = true;
    return out;
  };

  return (tree) => {
    // the transformer instance is reused across markdown files —
    // reset so each post gets exactly one eager/high-priority first image
    firstImgSeen = false;
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
        const src = node.properties?.src;
        if (typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')) {
          const dim = getLocalDimensions(src);
          if (dim && dim.width && dim.height) {
            node.properties.width = dim.width;
            node.properties.height = dim.height;
          }
          if (firstImgSeen) {
            node.properties.loading = 'lazy';
          } else {
            node.properties.fetchpriority = 'high';
          }
          node.properties.decoding = 'async';
          firstImgSeen = true;
        }
      } else if (node.type === 'raw' && typeof node.value === 'string' && node.value.includes('<img')) {
        node.value = node.value.replace(/<img\b[^>]*>/g, (tag) => patchRawImgTag(tag));
      }
      if (Array.isArray(node.children)) {
        for (const child of node.children) visit(child);
      }
    };
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://seasalt.ai',
  output: 'static',
  integrations: [react(), mdx()],
  markdown: {
    rehypePlugins: [rehypeLocalImageSize]
  },

  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'es', 'zh-TW', 'zh-CN', 'ja', 'ko', 'fr', 'de', 'ar', 'fa', 
      'fil', 'hi', 'id', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'ro'
    ],
    routing: {
      prefixDefaultLocale: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
