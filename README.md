# Seasalt.ai Website

This repository contains the source code for the Seasalt.ai website, a React-based application built with Vite and TypeScript. The website showcases Seasalt.ai's omni-channel contact center solutions for small businesses.

## Table of Contents

- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
- [Building and Deployment](#building-and-deployment)
  - [Building for Production](#building-for-production)
  - [Deployment Options](#deployment-options)
- [SEO Optimization](#seo-optimization)
  - [Sitemap Generation](#sitemap-generation)
  - [Robots.txt](#robotstxt)
  - [Meta Tags](#meta-tags)
  - [Structured Data](#structured-data)
  - [SEO Best Practices](#seo-best-practices)
- [Blog Management](#blog-management)
  - [Adding New Blog Posts](#adding-new-blog-posts)
  - [Blog Post Format](#blog-post-format)
  - [Images and Media](#images-and-media)
- [Internationalization (i18n)](#internationalization-i18n)
  - [Adding a New Language](#adding-a-new-language)
  - [Translation Files](#translation-files)
  - [Translating Blog Posts](#translating-blog-posts)
- [Automated Multilingual Blog System](#automated-multilingual-blog-system)
- [Contributing](#contributing)

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/seasalt-website.git
   cd seasalt-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the website.

### Project Structure

```
seasalt-website/
├── content/                # Blog content in markdown format
│   ├── en/                 # English blog posts
│   ├── es/                 # Spanish blog posts
│   └── zh-TW/              # Traditional Chinese blog posts
├── public/                 # Static assets
│   ├── locales/            # Translation files
│   │   ├── en.json
│   │   ├── es.json
│   │   └── ...
│   ├── robots.txt          # Generated robots.txt
│   └── sitemap.xml         # Generated sitemap
├── scripts/                # Build and utility scripts
│   ├── generate-robots.js  # Script to generate robots.txt
│   └── generate-sitemap.js # Script to generate sitemap.xml
├── src/
│   ├── components/         # React components
│   ├── data/               # Static data files
│   ├── pages/              # Page components
│   │   ├── channels/       # Channel-specific pages
│   │   ├── compare/        # Comparison pages
│   │   ├── industries/     # Industry-specific pages
│   │   └── solutions/      # Solution-specific pages
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   ├── i18n.ts             # i18n configuration
│   └── main.tsx            # Application entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check for code issues
- `npm run generate-sitemap`: Generate the sitemap.xml file
- `npm run generate-robots`: Generate the robots.txt file
- `npm run seo-update`: Run both sitemap and robots.txt generation

## Building and Deployment

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` directory with the optimized production build.

### Deployment Options

#### Netlify

1. Connect your repository to Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `dist`
4. Configure environment variables if needed

#### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Set environment variables if needed

#### Manual Deployment

1. Build the application: `npm run build`
2. Deploy the contents of the `dist` directory to your web server

## SEO Optimization

The website is optimized for search engines with various SEO features.

### Sitemap Generation

The sitemap is automatically generated using the `generate-sitemap.js` script. It includes:

- All pages in all supported languages
- All blog posts with their respective language versions
- Proper hreflang tags for language alternates

To update the sitemap after adding new content:

```bash
npm run generate-sitemap
```

### Robots.txt

The robots.txt file is generated using the `generate-robots.js` script. It includes:

- Allow directives for search engines
- Disallow directives for admin and API routes
- Reference to the sitemap

To update the robots.txt file:

```bash
npm run generate-robots
```

### Meta Tags

Each page includes proper meta tags for SEO:

- Title and description
- Open Graph tags for social sharing
- Twitter card tags
- Canonical URLs
- hreflang tags for language alternates

The `SEOHelmet` component is used to manage these tags consistently across the site.

### Structured Data

Structured data (JSON-LD) is included for:

- Blog posts (Article schema)
- Blog listing pages (ItemList schema)
- Organization information

### SEO Best Practices

- Use descriptive, keyword-rich titles and meta descriptions
- Ensure all images have alt text
- Use semantic HTML elements
- Create descriptive URLs
- Implement proper heading hierarchy (H1, H2, etc.)
- Ensure mobile responsiveness

## Blog Management

### Adding New Blog Posts

1. Create a new markdown file in the appropriate language directory under `content/`
   - For English: `content/en/your-post-slug.md`
   - For Spanish: `content/es/your-post-slug.md`
   - For Chinese: `content/zh-TW/your-post-slug.md`

2. Include the required frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
meta_description: "A compelling description of your blog post for SEO purposes."
author: "Your Name"
tags: ["Tag1", "Tag2", "Tag3"]
date: "YYYY-MM-DD"
image_thumbnail: "https://example.com/image.jpg"
---

# Your Blog Post Title

Your content goes here...
```

3. Write your blog post content in markdown format

4. Update the sitemap to include the new blog post:

```bash
npm run seo-update
```

### Blog Post Format

- Use markdown for formatting
- Start with an H1 heading (# Title)
- Use H2 (## Subtitle) and H3 (### Section) for sections
- Use bullet points and numbered lists where appropriate
- Include relevant images to break up text

### Images and Media

- Store images in a CDN or use external image hosting (like Pexels)
- Use responsive images with appropriate dimensions
- Always include alt text for images
- Optimize images for web (compression, proper format)

## Internationalization (i18n)

The website supports multiple languages through the i18next library.

### Adding a New Language

1. Create a new translation file in `public/locales/`:

```bash
touch public/locales/[language-code].json
```

2. Copy the structure from an existing language file (e.g., `en.json`) and translate the values

3. Add the new language to the language selector in `src/components/Header.tsx`

### Translation Files

Translation files are JSON files located in `public/locales/`. Each file contains key-value pairs where:

- Keys are structured in a nested format (e.g., `header.products`)
- Values are the translated strings

Example:

```json
{
  "header": {
    "products": "Products",
    "solutions": "Solutions"
  },
  "footer": {
    "copyright": "© 2025 Seasalt.ai. All rights reserved."
  }
}
```

### Translating Blog Posts

To create a translated version of a blog post:

1. Create a new markdown file in the appropriate language directory with the same filename as the original

2. Translate the frontmatter and content

3. Ensure the `date` and `image_thumbnail` fields match the original post

4. Update the sitemap to include the new translation:

```bash
npm run seo-update
```

## Automated Multilingual Blog System

This project includes a comprehensive automated multilingual blog system that supports AI-powered translation to all 20 supported languages with zero human intervention.

### 📚 Documentation

- **[Automated Multilingual Blog System Guide](docs/AUTOMATED_MULTILINGUAL_BLOG_SYSTEM.md)** - Overview and workflow for the AI translation system
- **[Technical Implementation Guide](docs/MULTILINGUAL_BLOG_TECHNICAL_GUIDE.md)** - Detailed technical documentation with complete implementation details
- **[Blog System Guide](docs/BLOG_SYSTEM_GUIDE.md)** - Comprehensive guide to the enhanced blog system features

### Key Features

- **Automated AI Translation**: Write in English, automatically translate to 19 other languages
- **Zero Human Intervention**: Fully automated workflow from source to deployment
- **SEO Optimized**: Proper hreflang tags, multilingual sitemaps, and structured data
- **Cost Effective**: Estimated $1.52-$4.56 per article for all translations
- **Quality Monitoring**: Built-in quality scoring and performance metrics
- **Smart Fallbacks**: Graceful handling of missing translations

### Quick Start

1. Write your blog post in English under `content/blog/en/`
2. Run the automated translation:
   ```bash
   npm run blog:translate-all your-post-slug
   ```
3. Deploy to all languages:
   ```bash
   npm run blog:deploy-multilingual your-post-slug
   ```

For detailed implementation instructions, see the [Technical Implementation Guide](docs/MULTILINGUAL_BLOG_TECHNICAL_GUIDE.md).

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

---

For any questions or support, please contact the Seasalt.ai team.