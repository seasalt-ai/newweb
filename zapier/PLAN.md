# Programmable SEO Framework for Seasalt.ai Zapier Integrations

## Problem Statement
Build a scalable programmatic SEO framework to generate hub and spoke pages for Seasalt.ai's Zapier integrations across all popular apps and Agentic Send actions (SMS, WhatsApp, Phone Call).

## Current State
* Astro 5.x SSG website with 20-language i18n support
* No existing Zapier integration pages
* Seasalt.ai offers Agentic Send actions via Zapier: SMS, WhatsApp, Phone Call
* Need to generate pages for pattern: `/[lang]/integrations/{trigger_app}/` (hub) and `/[lang]/integrations/{trigger_app}/{action}/` (spokes)

## Proposed Solution

### 1. Data Collection & Curation
* **Fetch all Zapier categories** using `/v1/categories` endpoint
* **Fetch top apps per category** using `/v2/apps?category={slug}` endpoint
* Filter apps that make sense with Agentic Send actions (communication, CRM, forms, calendars, sheets, etc.)
* Generate structured data file with app metadata (name, slug, description, category, logo, images)
* Manually curate final list to ensure quality and relevance

### 2. Content Generation System
* Create templates for hub pages (app overview + all 3 action links)
* Create templates for spoke pages (specific app + action combination)
* Build content generator that produces SEO-optimized copy using LLM or templates
* Include key elements: title, meta description, H1, benefits, use cases, setup steps

### 3. Page Generation Framework
* Create Astro dynamic route: `src/pages/[lang]/integrations/[app]/index.astro` (hub)
* Create Astro dynamic route: `src/pages/[lang]/integrations/[app]/[action].astro` (spoke)
* Implement `getStaticPaths()` to generate all combinations
* Use layout system with proper SEO meta tags and JSON-LD schema

### 4. Translation System
* Add translation keys to all 20 language files
* Structure keys: `integrations.hub.{section}`, `integrations.spoke.{section}`
* Include app names, action names, and dynamic content
* Use parameterized translations for app-specific content

### 5. SEO Optimization
* Generate unique meta titles and descriptions per page
* Implement breadcrumb JSON-LD schema
* Add Product schema for Agentic Send feature
* Create HowTo schema for setup instructions
* Implement proper internal linking between hub and spokes

## Implementation Structure

```
zapier/
├── scripts/
│   ├── 1_fetch_categories.py         # Fetch all Zapier categories
│   ├── 2_fetch_apps_by_category.py   # Fetch apps for each category
│   ├── 3_curate_apps.py              # Filter and curate relevant apps
│   └── requirements.txt              # Python dependencies
├── data/
│   ├── raw/
│   │   ├── categories.json           # Raw category data from API
│   │   └── apps_by_category/        # Raw app data per category
│   │       ├── crm.json
│   │       ├── forms.json
│   │       └── ...
│   ├── zapier-apps.json              # All processed apps
│   ├── curated-apps.json             # Filtered, relevant apps
│   └── actions.json                   # Agentic Send actions
├── templates/
│   ├── hub-content.md                # Hub page content template
│   └── spoke-content.md              # Spoke page content template
├── PLAN.md                           # This document
└── README.md                         # Documentation

src/pages/[lang]/integrations/
├── [app]/
│   ├── index.astro                   # Hub page
│   └── [action].astro                # Spoke pages
```

## Expected Output
* Hub pages: ~50-100 apps (e.g., `/en/integrations/google-calendar/`)
* Spoke pages: ~150-300 pages (50-100 apps × 3 actions)
* Total: ~200-400 pages × 20 languages = 4,000-8,000 new pages
* All pages fully SEO-optimized with structured data
* Complete i18n support across all 20 languages

## Methodology

### Phase 1: Data Collection (Python Scripts)
1. Fetch all categories from Zapier API
2. For each relevant category, fetch top 50 apps (sorted by popularity)
3. Save all raw API responses to disk for future reference
4. Respect API rate limits (add delays between requests)

### Phase 2: Data Curation
1. Load all fetched apps
2. Filter for apps that make sense with Agentic Send:
   - Calendar apps (Google Calendar, Outlook, Calendly)
   - Form apps (Typeform, Jotform, Google Forms)
   - CRM apps (HubSpot, Salesforce, Pipedrive)
   - Spreadsheet apps (Google Sheets, Airtable)
   - Communication apps (Slack, Teams, Discord)
   - E-commerce apps (Shopify, Stripe, WooCommerce)
   - Project management apps (Trello, Asana, Monday.com)
3. Select top 20 apps per relevant category
4. Output final curated list

### Phase 3: Page Generation
1. Use curated app list to generate Astro pages
2. Implement i18n translations
3. Add SEO schemas
4. Build and test

## API Authentication
The scripts will need either:
- OAuth token (for full access)
- Client ID (for public app directory access)

Store credentials in environment variables or config file (not committed to git).
