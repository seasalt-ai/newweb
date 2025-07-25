# Hugo YAML Frontmatter Support

The blog system now supports Hugo-style YAML frontmatter fields, making it compatible with existing Hugo blog posts.

## Supported Hugo Fields

### Field Mappings

The following Hugo fields are automatically mapped to the internal blog system:

| Hugo Field | Internal Field | Description |
|------------|----------------|-------------|
| `description` | `meta_description` | Post meta description for SEO |
| `image` | `image_thumbnail` | Featured image for the post |
| `url` | `url` | Custom URL path for the post |
| `canonicalURL` | `url` | Alternative canonical URL field |
| `metatitle` | `title` | Alternative title field (fallback) |
| `date` | `date` | Publication date (supports Hugo datetime format) |
| `draft` | `draft` | Draft status (hides from production) |

### Standard Fields

These fields work the same in both systems:

- `title` - Post title
- `author` - Post author name
- `tags` - Array of post tags
- `weight` - Post weight (currently ignored, sorted by date)

## Date Format Support

The system now handles multiple date formats:

```yaml
# Hugo datetime format (recommended)
date: 2020-08-04T10:46:07-07:00

# ISO date string
date: "2020-08-04"

# Standard date formats
date: "2020-08-04 10:46:07"
```

All dates are normalized to `YYYY-MM-DD` format internally.

## Example Hugo Frontmatter

```yaml
---
title: "8 Seasalt.ai Cloud Happy Hours This Summer: Failures and Successes"
metatitle: "8 Seasalt.ai Cloud Happy Hours: Failures and Successes"
date: 2020-08-04T10:46:07-07:00
author: "Xuchen Yao"
image: "images/blog/1-cloud-happy-hour/Cloud Happy Hour 744x400.png"
draft: false
description: "In this blog, we explore the insights we have gained at Seasalt.ai running our Friday Happy Hour lunches this summer."
tags: ["Culture", "English"]
weight: 1
canonicalURL: "/blog/cloud-happy-hour/"
url: "/blog/cloud-happy-hour/"
---
```

## Draft Post Handling

Posts with `draft: true` are:
- **Hidden in production** builds (`NODE_ENV=production`)
- **Visible in development** for preview and editing
- **Filtered out** from blog listing pages in production
- **Return 404** when accessed directly in production

## Sorting and Display

- Posts are sorted by `date` in **reverse chronological order** (newest first)
- The `weight` field is currently ignored but preserved for future use
- Draft posts are excluded from sorting in production environments

## Migration from Hugo

To migrate existing Hugo blog posts:

1. **Copy markdown files** to the appropriate `content/blog/{lang}/` directory
2. **Update image paths** if necessary (relative to `public/` directory)
3. **Test in development** to ensure proper parsing
4. **Verify URLs** work as expected with the `url` field

## Custom URL Handling

The `url` field allows for custom post URLs:

```yaml
# This post will be accessible at /blog/cloud-happy-hour/
url: "/blog/cloud-happy-hour/"

# Or with language prefix: /en/blog/cloud-happy-hour/
```

**Note**: Currently, custom URLs are stored but routing still uses the filename-based slug. Full custom URL routing may be implemented in a future update.

## Backward Compatibility

The system maintains full backward compatibility:

- **Existing posts** using the original field names continue to work
- **Mixed field usage** is supported (Hugo fields take precedence)
- **No breaking changes** to existing blog functionality

## Development vs Production

### Development Mode
- All posts visible (including drafts)
- Detailed error logging for parsing issues
- Live reload when posts are modified

### Production Mode
- Draft posts automatically hidden
- Optimized parsing and caching
- Error handling for missing posts

## Best Practices

1. **Use Hugo datetime format** for the `date` field for consistency
2. **Set `draft: false`** explicitly for published posts
3. **Include `description`** field for better SEO
4. **Use relative paths** for images starting from `public/`
5. **Test locally** before deploying to production

## Troubleshooting

### Common Issues

1. **Post not appearing**: Check if `draft: true` is set
2. **Date parsing errors**: Ensure date format is valid
3. **Image not loading**: Verify image path relative to `public/`
4. **URL conflicts**: Ensure custom URLs don't conflict with existing routes

### Debugging

Enable detailed logging in development:

```javascript
// In browser console
localStorage.setItem('debug', 'blog:*');
```

This will show detailed information about post parsing and loading.
