# Zapier Integration Sitemap

## Overview
A dedicated sitemap (`sitemap-zapier.xml`) has been created for all Zapier integration pages, making it easier for search engines to discover and index the extensive integration catalog.

## Why a Separate Sitemap?

1. **Scale**: With 1,560 apps × 3 actions = 4,680+ integration pages, plus hub pages
2. **Organization**: Easier to manage and monitor integration-specific crawling
3. **Language Isolation**: Integration pages are English-only, separate from multilingual content
4. **Performance**: Dedicated sitemap allows for better crawl budget optimization

## Sitemap Structure

### sitemap-zapier.xml
- **Total URLs**: 6,241
- **Language**: English only (`/en/`)
- **Update Frequency**: Weekly
- **File Size**: ~1.1 MB

### URL Hierarchy

1. **Main Index** (Priority: 0.9)
   - `/en/integrations`

2. **Hub Pages** (Priority: 0.8)
   - `/en/integrations/{app-slug}`
   - Example: `/en/integrations/google-calendar`
   - Total: 1,560 URLs

3. **Spoke Pages** (Priority: 0.7)
   - `/en/integrations/{app-slug}/{action-slug}`
   - Example: `/en/integrations/google-calendar/whatsapp`
   - Total: 4,680 URLs

## URL Examples

```xml
<!-- Main Index -->
<url>
  <loc>https://seasalt.ai/en/integrations</loc>
  <lastmod>2025-11-30</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>

<!-- Hub Page -->
<url>
  <loc>https://seasalt.ai/en/integrations/google-calendar</loc>
  <lastmod>2025-11-30</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>

<!-- Spoke Page -->
<url>
  <loc>https://seasalt.ai/en/integrations/google-calendar/whatsapp</loc>
  <lastmod>2025-11-30</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>
```

## Sitemap Index Integration

The Zapier sitemap is included in the main sitemap index:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://seasalt.ai/sitemap.xml</loc>
    <lastmod>2025-11-30</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://seasalt.ai/sitemap-hreflang.xml</loc>
    <lastmod>2025-11-30</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://seasalt.ai/sitemap-zapier.xml</loc>
    <lastmod>2025-11-30</lastmod>
  </sitemap>
</sitemapindex>
```

## Generation

### Automatic Generation
The Zapier sitemap is automatically generated when running the sitemap generation script:

```bash
node scripts/generate-sitemap.js
```

### Output Locations
- **Production**: `dist/sitemap-zapier.xml`
- **Development**: `public/sitemap-zapier.xml`

### Data Sources
The sitemap generator reads from:
- `zapier/data/curated-apps.json` - List of 1,560 curated apps
- `zapier/data/actions.json` - List of 3 actions (SMS, WhatsApp, Phone Call)

## Implementation Details

### Code Location
`scripts/generate-sitemap.js` - `generateZapierSitemap()` function

### Key Features
1. **Dynamic Generation**: Automatically creates URLs based on available apps and actions
2. **English-Only**: Only generates `/en/` URLs (integrations not yet translated)
3. **Prioritization**: 
   - Main index: 0.9 (highest)
   - Hub pages: 0.8 (high)
   - Spoke pages: 0.7 (medium-high)
4. **Update Frequency**: All marked as `weekly`

### Algorithm
```javascript
// 1. Add main index
urls.push('/en/integrations')

// 2. For each app
apps.forEach(app => {
  // Add hub page
  urls.push(`/en/integrations/${app.slug}`)
  
  // 3. For each action
  actions.forEach(action => {
    // Add spoke page
    urls.push(`/en/integrations/${app.slug}/${action.slug}`)
  })
})
```

## SEO Benefits

1. **Comprehensive Coverage**: All 6,241 integration pages indexed
2. **Clear Structure**: Hub-spoke model reflected in priority levels
3. **Regular Updates**: Weekly change frequency signals fresh content
4. **Separate Monitoring**: Can track integration page indexing separately in GSC
5. **Crawl Efficiency**: Dedicated sitemap helps search engines discover new integrations

## Monitoring

### Google Search Console
1. Submit `sitemap-index.xml` (includes all sitemaps)
2. Or submit `sitemap-zapier.xml` directly
3. Monitor coverage reports for integration pages
4. Track indexing progress over time

### Key Metrics to Watch
- **Discovered**: How many URLs Google found
- **Crawled**: How many URLs Google visited
- **Indexed**: How many URLs appear in search results
- **Errors**: Any crawl or indexing issues

### Expected Indexing
Given the scale (6,241 URLs), expect:
- Initial discovery: 1-2 weeks
- Full crawl: 2-4 weeks
- Complete indexing: 4-8 weeks

## Maintenance

### When to Regenerate
- New apps added to `curated-apps.json`
- New actions added to `actions.json`
- App slugs changed
- Schema updates to integration pages

### Regeneration Frequency
- **Development**: After any data changes
- **Production**: As part of deployment pipeline
- **Manual**: Run `npm run sitemap` or `node scripts/generate-sitemap.js`

## Future Enhancements

1. **Multi-language Support**: When integrations are translated
2. **Image Sitemaps**: Add app logos and screenshots
3. **Video Sitemaps**: If demo videos are added
4. **Dynamic Priorities**: Based on app popularity or relevance score
5. **Category Sitemaps**: Separate sitemaps per app category

## robots.txt Configuration

Ensure `robots.txt` points to the sitemap index:

```
User-agent: *
Allow: /

Sitemap: https://seasalt.ai/sitemap-index.xml
```

## Related Documentation
- [Sitemap Implementation Guide](./SITEMAP_IMPLEMENTATION.md)
- [SEO Complete Guide](./SEO_COMPLETE_GUIDE.md)
- [Schema Integration Pages](./SCHEMA_INTEGRATION_PAGES.md)
