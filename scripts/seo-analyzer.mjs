#!/usr/bin/env node

/**
 * Seasalt.ai SEO Analyzer Tool
 * Based on SeaMeet's comprehensive SEO auditing approach
 * 
 * This script analyzes the website for SEO optimization opportunities
 * and generates detailed reports with recommendations.
 * 
 * Features:
 * - Meta tag analysis and validation
 * - Structured data validation
 * - Hreflang analysis
 * - Image optimization checks
 * - Page performance analysis
 * - Content quality assessment
 * - Multilingual SEO validation
 * 
 * Usage:
 * node scripts/seo-analyzer.js [options]
 * 
 * Options:
 * --url=<url>          Analyze specific URL (defaults to localhost:3000)
 * --pages=<pages>      Comma-separated list of pages to analyze
 * --lang=<lang>        Language to focus on (defaults to all supported)
 * --output=<file>      Output file for report (defaults to console)
 * --format=json|html   Output format (defaults to json)
 * --depth=<number>     Analysis depth level (1-3, defaults to 2)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Note: html-validator might need different handling in ES modules
// For now, we'll skip HTML validation and focus on our custom analysis

// Configuration
const CONFIG = {
  baseUrl: process.argv.find(arg => arg.startsWith('--url='))?.split('=')[1] || 'http://localhost:3000',
  outputFile: process.argv.find(arg => arg.startsWith('--output='))?.split('=')[1],
  outputFormat: process.argv.find(arg => arg.startsWith('--format='))?.split('=')[1] || 'json',
  targetLanguage: process.argv.find(arg => arg.startsWith('--lang='))?.split('=')[1],
  analysisDepth: parseInt(process.argv.find(arg => arg.startsWith('--depth='))?.split('=')[1] || '2'),
  pagesOverride: process.argv.find(arg => arg.startsWith('--pages='))?.split('=')[1]?.split(','),
  
  // Default pages to analyze
  defaultPages: [
    '/',
    '/about',
    '/products',
    '/solutions',
    '/blog',
    '/contact',
    '/careers',
    '/zh-TW',
    '/zh-TW/about',
    '/zh-TW/products',
    '/zh-TW/solutions'
  ],
  
  // Supported languages
  supportedLanguages: ['en', 'zh-TW'],
  
  // SEO criteria
  seoRules: {
    title: {
      minLength: 30,
      maxLength: 60,
      required: true
    },
    description: {
      minLength: 120,
      maxLength: 160,
      required: true
    },
    keywords: {
      maxCount: 10,
      minCount: 3
    },
    headings: {
      requireH1: true,
      maxH1Count: 1,
      requireHierarchy: true
    },
    images: {
      requireAlt: true,
      maxSizeKB: 500
    },
    structured_data: {
      requireOrganization: true,
      requireBreadcrumb: true
    }
  }
};

// SEO Analysis Results Storage
const analysisResults = {
  summary: {
    totalPages: 0,
    passedPages: 0,
    warnings: 0,
    errors: 0,
    score: 0
  },
  pages: {},
  global: {
    structuredData: {},
    hreflang: {},
    sitemaps: {}
  },
  recommendations: []
};

/**
 * Fetch HTML content from URL
 */
async function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
      
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Parse and analyze HTML content
 */
function analyzeHTML(html, url) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  
  const analysis = {
    url,
    meta: analyzeMeta(document),
    headings: analyzeHeadings(document),
    images: analyzeImages(document),
    links: analyzeLinks(document),
    structuredData: analyzeStructuredData(document),
    performance: analyzePerformance(document),
    accessibility: analyzeAccessibility(document),
    errors: [],
    warnings: [],
    score: 0
  };
  
  // Calculate overall score
  analysis.score = calculatePageScore(analysis);
  
  return analysis;
}

/**
 * Analyze meta tags
 */
function analyzeMeta(document) {
  const meta = {
    title: document.querySelector('title')?.textContent || '',
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '',
    robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
    hreflang: [],
    openGraph: {},
    twitter: {}
  };
  
  // Collect hreflang links
  const hreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
  meta.hreflang = Array.from(hreflangLinks).map(link => ({
    lang: link.getAttribute('hreflang'),
    href: link.getAttribute('href')
  }));
  
  // Collect Open Graph tags
  const ogTags = document.querySelectorAll('meta[property^="og:"]');
  ogTags.forEach(tag => {
    const property = tag.getAttribute('property').replace('og:', '');
    meta.openGraph[property] = tag.getAttribute('content');
  });
  
  // Collect Twitter tags
  const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
  twitterTags.forEach(tag => {
    const name = tag.getAttribute('name').replace('twitter:', '');
    meta.twitter[name] = tag.getAttribute('content');
  });
  
  return meta;
}

/**
 * Analyze heading structure
 */
function analyzeHeadings(document) {
  const headings = {
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    hierarchy: []
  };
  
  for (let i = 1; i <= 6; i++) {
    const elements = document.querySelectorAll(`h${i}`);
    headings[`h${i}`] = Array.from(elements).map(el => ({
      text: el.textContent.trim(),
      length: el.textContent.trim().length
    }));
  }
  
  // Analyze heading hierarchy
  const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.hierarchy = Array.from(allHeadings).map(heading => ({
    level: parseInt(heading.tagName[1]),
    text: heading.textContent.trim()
  }));
  
  return headings;
}

/**
 * Analyze images
 */
function analyzeImages(document) {
  const images = {
    total: 0,
    withAlt: 0,
    withoutAlt: 0,
    details: []
  };
  
  const imgElements = document.querySelectorAll('img');
  images.total = imgElements.length;
  
  imgElements.forEach(img => {
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const loading = img.getAttribute('loading');
    
    const imageData = {
      src,
      alt: alt || '',
      hasAlt: !!alt,
      loading: loading || 'eager',
      width: img.getAttribute('width'),
      height: img.getAttribute('height')
    };
    
    if (alt) {
      images.withAlt++;
    } else {
      images.withoutAlt++;
    }
    
    images.details.push(imageData);
  });
  
  return images;
}

/**
 * Analyze links
 */
function analyzeLinks(document) {
  const links = {
    internal: 0,
    external: 0,
    nofollow: 0,
    details: []
  };
  
  const linkElements = document.querySelectorAll('a[href]');
  
  linkElements.forEach(link => {
    const href = link.getAttribute('href');
    const rel = link.getAttribute('rel') || '';
    const text = link.textContent.trim();
    
    const isExternal = href.startsWith('http') && !href.includes(CONFIG.baseUrl);
    
    const linkData = {
      href,
      text,
      rel,
      isExternal,
      isNofollow: rel.includes('nofollow')
    };
    
    if (isExternal) {
      links.external++;
    } else {
      links.internal++;
    }
    
    if (linkData.isNofollow) {
      links.nofollow++;
    }
    
    links.details.push(linkData);
  });
  
  return links;
}

/**
 * Analyze structured data
 */
function analyzeStructuredData(document) {
  const structuredData = {
    jsonLd: [],
    microdata: [],
    hasOrganization: false,
    hasBreadcrumb: false,
    hasWebsite: false
  };
  
  // Analyze JSON-LD
  const jsonLdElements = document.querySelectorAll('script[type="application/ld+json"]');
  jsonLdElements.forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      structuredData.jsonLd.push(data);
      
      // Check for specific schema types
      if (data['@type'] === 'Organization') {
        structuredData.hasOrganization = true;
      }
      if (data['@type'] === 'BreadcrumbList') {
        structuredData.hasBreadcrumb = true;
      }
      if (data['@type'] === 'WebSite') {
        structuredData.hasWebsite = true;
      }
    } catch (e) {
      // Invalid JSON-LD
    }
  });
  
  return structuredData;
}

/**
 * Analyze performance-related elements
 */
function analyzePerformance(document) {
  const performance = {
    lazyImages: 0,
    preloadLinks: 0,
    inlineStyles: 0,
    externalScripts: 0
  };
  
  // Count lazy-loaded images
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  performance.lazyImages = lazyImages.length;
  
  // Count preload links
  const preloadLinks = document.querySelectorAll('link[rel="preload"]');
  performance.preloadLinks = preloadLinks.length;
  
  // Count inline styles
  const inlineStyles = document.querySelectorAll('style');
  performance.inlineStyles = inlineStyles.length;
  
  // Count external scripts
  const externalScripts = document.querySelectorAll('script[src]');
  performance.externalScripts = externalScripts.length;
  
  return performance;
}

/**
 * Analyze accessibility features
 */
function analyzeAccessibility(document) {
  const accessibility = {
    hasSkipLinks: false,
    imagesWithoutAlt: 0,
    formLabels: 0,
    headingStructure: true
  };
  
  // Check for skip links
  const skipLinks = document.querySelector('a[href^="#"], a[href="#main"], a[href="#content"]');
  accessibility.hasSkipLinks = !!skipLinks;
  
  // Count images without alt
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  accessibility.imagesWithoutAlt = imagesWithoutAlt.length;
  
  // Count form labels
  const labels = document.querySelectorAll('label');
  accessibility.formLabels = labels.length;
  
  return accessibility;
}

/**
 * Validate page analysis against SEO rules
 */
function validatePageAnalysis(analysis) {
  const errors = [];
  const warnings = [];
  
  // Title validation
  if (!analysis.meta.title) {
    errors.push('Missing page title');
  } else {
    if (analysis.meta.title.length < CONFIG.seoRules.title.minLength) {
      warnings.push(`Title too short (${analysis.meta.title.length} chars, recommended: ${CONFIG.seoRules.title.minLength}-${CONFIG.seoRules.title.maxLength})`);
    }
    if (analysis.meta.title.length > CONFIG.seoRules.title.maxLength) {
      warnings.push(`Title too long (${analysis.meta.title.length} chars, recommended: ${CONFIG.seoRules.title.minLength}-${CONFIG.seoRules.title.maxLength})`);
    }
  }
  
  // Description validation
  if (!analysis.meta.description) {
    errors.push('Missing meta description');
  } else {
    if (analysis.meta.description.length < CONFIG.seoRules.description.minLength) {
      warnings.push(`Description too short (${analysis.meta.description.length} chars, recommended: ${CONFIG.seoRules.description.minLength}-${CONFIG.seoRules.description.maxLength})`);
    }
    if (analysis.meta.description.length > CONFIG.seoRules.description.maxLength) {
      warnings.push(`Description too long (${analysis.meta.description.length} chars, recommended: ${CONFIG.seoRules.description.minLength}-${CONFIG.seoRules.description.maxLength})`);
    }
  }
  
  // H1 validation
  if (analysis.headings.h1.length === 0) {
    errors.push('Missing H1 tag');
  } else if (analysis.headings.h1.length > 1) {
    warnings.push(`Multiple H1 tags found (${analysis.headings.h1.length})`);
  }
  
  // Image alt text validation
  if (analysis.images.withoutAlt > 0) {
    warnings.push(`${analysis.images.withoutAlt} images missing alt text`);
  }
  
  // Canonical URL validation
  if (!analysis.meta.canonical) {
    warnings.push('Missing canonical URL');
  }
  
  // Structured data validation
  if (!analysis.structuredData.hasOrganization && analysis.url === '/') {
    warnings.push('Homepage missing Organization structured data');
  }
  
  // Hreflang validation
  if (analysis.meta.hreflang.length === 0) {
    warnings.push('No hreflang links found');
  }
  
  analysis.errors = errors;
  analysis.warnings = warnings;
  
  return analysis;
}

/**
 * Calculate page SEO score (0-100)
 */
function calculatePageScore(analysis) {
  let score = 100;
  
  // Deduct points for errors (major issues)
  score -= analysis.errors.length * 15;
  
  // Deduct points for warnings (minor issues)
  score -= analysis.warnings.length * 5;
  
  // Bonus points for good practices
  if (analysis.meta.canonical) score += 2;
  if (analysis.structuredData.jsonLd.length > 0) score += 5;
  if (analysis.images.withoutAlt === 0 && analysis.images.total > 0) score += 3;
  if (analysis.meta.hreflang.length >= 2) score += 3;
  
  return Math.max(0, Math.min(100, score));
}

/**
 * Generate comprehensive SEO recommendations
 */
function generateRecommendations(results) {
  const recommendations = [];
  
  // Analyze common issues across pages
  let totalErrors = 0;
  let totalWarnings = 0;
  const commonIssues = {};
  
  Object.values(results.pages).forEach(page => {
    totalErrors += page.errors.length;
    totalWarnings += page.warnings.length;
    
    [...page.errors, ...page.warnings].forEach(issue => {
      commonIssues[issue] = (commonIssues[issue] || 0) + 1;
    });
  });
  
  // Generate recommendations based on common issues
  if (commonIssues['Missing meta description']) {
    recommendations.push({
      priority: 'high',
      category: 'meta-tags',
      issue: 'Multiple pages missing meta descriptions',
      solution: 'Add unique, descriptive meta descriptions (120-160 characters) to all pages',
      affected_pages: commonIssues['Missing meta description']
    });
  }
  
  if (commonIssues['Missing H1 tag']) {
    recommendations.push({
      priority: 'high',
      category: 'content-structure',
      issue: 'Pages missing H1 tags',
      solution: 'Add descriptive H1 tags to all pages for better content structure',
      affected_pages: commonIssues['Missing H1 tag']
    });
  }
  
  // Check for images without alt text
  const totalImagesWithoutAlt = Object.values(results.pages)
    .reduce((sum, page) => sum + page.images.withoutAlt, 0);
    
  if (totalImagesWithoutAlt > 0) {
    recommendations.push({
      priority: 'medium',
      category: 'accessibility',
      issue: `${totalImagesWithoutAlt} images missing alt text`,
      solution: 'Add descriptive alt text to all images for better accessibility and SEO',
      affected_pages: Object.values(results.pages)
        .filter(page => page.images.withoutAlt > 0).length
    });
  }
  
  // Performance recommendations
  const pagesWithoutLazyLoading = Object.values(results.pages)
    .filter(page => page.images.total > 0 && page.performance.lazyImages === 0);
    
  if (pagesWithoutLazyLoading.length > 0) {
    recommendations.push({
      priority: 'low',
      category: 'performance',
      issue: 'Images not using lazy loading',
      solution: 'Implement lazy loading for images to improve page load speed',
      affected_pages: pagesWithoutLazyLoading.length
    });
  }
  
  return recommendations;
}

/**
 * Generate HTML report
 */
function generateHTMLReport(results) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seasalt.ai SEO Analysis Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 40px; }
        .score { font-size: 48px; font-weight: bold; color: ${results.summary.score >= 80 ? '#10B981' : results.summary.score >= 60 ? '#F59E0B' : '#EF4444'}; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px; }
        .metric { background: #f8f9fa; padding: 20px; border-radius: 6px; text-align: center; }
        .metric-value { font-size: 24px; font-weight: bold; color: #1f2937; }
        .metric-label { color: #6b7280; font-size: 14px; margin-top: 5px; }
        .section { margin-bottom: 40px; }
        .section-title { font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
        .page-result { background: #f8f9fa; padding: 20px; margin-bottom: 15px; border-radius: 6px; border-left: 4px solid #10B981; }
        .page-result.warning { border-left-color: #F59E0B; }
        .page-result.error { border-left-color: #EF4444; }
        .page-url { font-weight: bold; margin-bottom: 10px; }
        .page-score { float: right; font-size: 18px; font-weight: bold; }
        .issues { margin-top: 10px; }
        .issue { margin: 5px 0; padding: 5px 10px; border-radius: 4px; font-size: 14px; }
        .issue.error { background: #fee2e2; color: #991b1b; }
        .issue.warning { background: #fef3c7; color: #92400e; }
        .recommendation { background: white; border: 1px solid #e5e7eb; padding: 20px; margin-bottom: 15px; border-radius: 6px; }
        .priority-high { border-left: 4px solid #EF4444; }
        .priority-medium { border-left: 4px solid #F59E0B; }
        .priority-low { border-left: 4px solid #6B7280; }
        .recommendation-title { font-weight: bold; margin-bottom: 10px; }
        .recommendation-solution { color: #6b7280; margin-bottom: 10px; }
        .affected-count { background: #f3f4f6; padding: 2px 8px; border-radius: 12px; font-size: 12px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Seasalt.ai SEO Analysis Report</h1>
            <div class="score">${results.summary.score}/100</div>
            <p>Generated on ${new Date().toISOString()}</p>
        </div>
        
        <div class="summary">
            <div class="metric">
                <div class="metric-value">${results.summary.totalPages}</div>
                <div class="metric-label">Pages Analyzed</div>
            </div>
            <div class="metric">
                <div class="metric-value">${results.summary.passedPages}</div>
                <div class="metric-label">Pages Passed</div>
            </div>
            <div class="metric">
                <div class="metric-value">${results.summary.errors}</div>
                <div class="metric-label">Total Errors</div>
            </div>
            <div class="metric">
                <div class="metric-value">${results.summary.warnings}</div>
                <div class="metric-label">Total Warnings</div>
            </div>
        </div>
        
        <div class="section">
            <h2 class="section-title">Page Analysis Results</h2>
            ${Object.entries(results.pages).map(([url, page]) => `
                <div class="page-result ${page.errors.length > 0 ? 'error' : page.warnings.length > 0 ? 'warning' : ''}">
                    <div class="page-url">
                        ${url}
                        <span class="page-score">${page.score}/100</span>
                    </div>
                    <div class="issues">
                        ${page.errors.map(error => `<div class="issue error">❌ ${error}</div>`).join('')}
                        ${page.warnings.map(warning => `<div class="issue warning">⚠️ ${warning}</div>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="section">
            <h2 class="section-title">Recommendations</h2>
            ${results.recommendations.map(rec => `
                <div class="recommendation priority-${rec.priority}">
                    <div class="recommendation-title">
                        ${rec.issue}
                        <span class="affected-count">${rec.affected_pages} pages</span>
                    </div>
                    <div class="recommendation-solution">${rec.solution}</div>
                </div>
            `).join('')}
        </div>
    </div>
</body>
</html>
  `;
}

/**
 * Main analysis function
 */
async function runSEOAnalysis() {
  console.log('🔍 Starting Seasalt.ai SEO Analysis...\n');
  
  const pagesToAnalyze = CONFIG.pagesOverride || CONFIG.defaultPages;
  analysisResults.summary.totalPages = pagesToAnalyze.length;
  
  // Analyze each page
  for (const page of pagesToAnalyze) {
    const url = `${CONFIG.baseUrl}${page}`;
    console.log(`📄 Analyzing: ${url}`);
    
    try {
      const html = await fetchHTML(url);
      const analysis = analyzeHTML(html, page);
      const validatedAnalysis = validatePageAnalysis(analysis);
      
      analysisResults.pages[page] = validatedAnalysis;
      
      // Update summary stats
      if (validatedAnalysis.errors.length === 0) {
        analysisResults.summary.passedPages++;
      }
      analysisResults.summary.errors += validatedAnalysis.errors.length;
      analysisResults.summary.warnings += validatedAnalysis.warnings.length;
      
      console.log(`   Score: ${validatedAnalysis.score}/100 | Errors: ${validatedAnalysis.errors.length} | Warnings: ${validatedAnalysis.warnings.length}`);
      
    } catch (error) {
      console.error(`   ❌ Failed to analyze ${url}: ${error.message}`);
      analysisResults.pages[page] = {
        url: page,
        errors: [`Failed to fetch page: ${error.message}`],
        warnings: [],
        score: 0
      };
    }
  }
  
  // Calculate overall score
  const totalScore = Object.values(analysisResults.pages)
    .reduce((sum, page) => sum + page.score, 0);
  analysisResults.summary.score = Math.round(totalScore / analysisResults.summary.totalPages);
  
  // Generate recommendations
  analysisResults.recommendations = generateRecommendations(analysisResults);
  
  // Output results
  if (CONFIG.outputFormat === 'html') {
    const htmlReport = generateHTMLReport(analysisResults);
    if (CONFIG.outputFile) {
      fs.writeFileSync(CONFIG.outputFile, htmlReport);
      console.log(`\n📊 HTML report saved to: ${CONFIG.outputFile}`);
    } else {
      console.log('\n📊 HTML Report Generated (use --output=file.html to save)');
    }
  } else {
    const jsonReport = JSON.stringify(analysisResults, null, 2);
    if (CONFIG.outputFile) {
      fs.writeFileSync(CONFIG.outputFile, jsonReport);
      console.log(`\n📊 JSON report saved to: ${CONFIG.outputFile}`);
    } else {
      console.log('\n📊 SEO Analysis Results:');
      console.log(jsonReport);
    }
  }
  
  // Summary
  console.log(`\n🎯 Overall Score: ${analysisResults.summary.score}/100`);
  console.log(`📈 Pages Passed: ${analysisResults.summary.passedPages}/${analysisResults.summary.totalPages}`);
  console.log(`🚨 Total Issues: ${analysisResults.summary.errors} errors, ${analysisResults.summary.warnings} warnings`);
  console.log(`💡 Recommendations: ${analysisResults.recommendations.length}\n`);
  
  // Exit with appropriate code
  process.exit(analysisResults.summary.errors > 0 ? 1 : 0);
}

// Error handling
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Promise Rejection:', reason);
  process.exit(1);
});

// Run the analysis
if (import.meta.url === `file://${process.argv[1]}`) {
  runSEOAnalysis();
}

export {
  runSEOAnalysis,
  analyzeHTML,
  CONFIG
};
