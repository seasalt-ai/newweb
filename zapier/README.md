# Seasalt.ai Zapier Integration Pages - Programmable SEO Framework

This directory contains the data and scripts for generating programmatic SEO pages for Seasalt.ai's Zapier integrations.

## Overview

This framework generates hub-and-spoke pages for Seasalt.ai's **Agentic Send** feature across popular Zapier trigger apps:

- **Hub pages**: `/[lang]/integrations/{app}/` (e.g., `/en/integrations/google-calendar/`)
- **Spoke pages**: `/[lang]/integrations/{app}/{action}/` (e.g., `/en/integrations/google-calendar/sms/`)

## Structure

```
zapier/
├── data/
│   ├── actions.json          # Agentic Send actions (SMS, WhatsApp, Phone Call)
│   └── curated-apps.json     # Curated list of 20 popular Zapier apps
├── scripts/
│   └── (future expansion scripts)
└── README.md
```

## Data Files

### actions.json
Defines the three Agentic Send actions:
- **SMS**: Automated SMS messages with AI-powered content
- **WhatsApp**: Meta-approved template messages  
- **Phone Call**: AI-generated voice messages

### curated-apps.json
Contains 20 popular Zapier apps across categories:
- **Calendar**: Google Calendar, Microsoft Outlook, Calendly
- **Forms**: Typeform, Jotform, Google Forms
- **CRM**: HubSpot, Salesforce
- **Spreadsheets**: Google Sheets, Airtable
- **Ecommerce**: Shopify, Stripe, WooCommerce
- **Project Management**: Trello, Asana
- **Communication**: Slack, Zoom, Microsoft Teams, Twilio
- **Email Marketing**: Mailchimp

Each app includes:
- Name, slug, category
- Description
- Use cases
- Example triggers

## Page Generation

Pages are generated at build time using Astro's `getStaticPaths()`:

**Total pages per language**: 
- 20 hub pages (one per app)
- 60 spoke pages (20 apps × 3 actions)
- **80 pages × 20 languages = 1,600 total pages**

## Implementation

Pages are located in:
- `src/pages/[lang]/integrations/[app]/index.astro` (hub)
- `src/pages/[lang]/integrations/[app]/[action].astro` (spoke)

Translations are in:
- `src/i18n/locales/{lang}.json` under the `integrations` key

## SEO Features

Each page includes:
- Unique meta title and description
- Open Graph and Twitter Card tags
- JSON-LD structured data:
  - Breadcrumb navigation
  - Product schema (Agentic Send)
  - HowTo schema (setup instructions)
- Proper internal linking
- hreflang tags for all 20 languages

## Execution Instructions

### Step 1: Setup Python Environment
```bash
cd zapier/scripts
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Step 2: Configure Authentication
```bash
cp .env.example .env
# Edit .env and add your Zapier Client ID or OAuth token
```

### Step 3: Fetch Categories
```bash
python 1_fetch_categories.py
```
Output: `../data/raw/categories.json`

### Step 4: Fetch Apps by Category
```bash
python 2_fetch_apps_by_category.py
```
Output:
- `../data/raw/apps_by_category/*.json` (one file per category)
- `../data/zapier-apps.json` (consolidated)

### Step 5: Curate Apps
```bash
python 3_curate_apps.py
```
Output: `../data/curated-apps.json`

### Step 6: Review and Build
1. Review `curated-apps.json`
2. Manually adjust if needed
3. Run: `npm run build` from project root

## Development

To add more apps:
1. Re-run curation script or manually edit `curated-apps.json`
2. Add translations to all language files
3. Rebuild: `npm run build`

To modify actions:
1. Update `actions.json`
2. Update translations
3. Rebuild

## Agentic Send Feature

The Agentic Send feature simplifies Zapier workflows from 5+ steps to just 2:
1. **Trigger**: Event from any of 8,000+ Zapier apps
2. **Action**: Agentic Send (AI handles extraction, validation, formatting)

Key benefits:
- Reduces fragile multi-step workflows
- AI-powered data extraction and formatting
- Automatic phone number validation (e.164 format)
- Works with all 8,000+ Zapier trigger apps
