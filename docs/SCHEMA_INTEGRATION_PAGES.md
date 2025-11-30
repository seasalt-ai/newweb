# Schema.org Implementation for Integration Pages

## Overview
This document describes the structured data (JSON-LD) implementation for the Zapier integration pages following the hub-spoke model (`/[lang]/integrations/[app]/[action]`).

## Implemented Schemas

### 1. BreadcrumbList Schema
**Automatically generated** by the SEO component from the `breadcrumbs` prop.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://seasalt.ai/en/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Integrations",
      "item": "https://seasalt.ai/en/integrations/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Google Calendar",
      "item": "https://seasalt.ai/en/integrations/google-calendar/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "WhatsApp",
      "item": "https://seasalt.ai/en/integrations/google-calendar/whatsapp"
    }
  ]
}
```

### 2. SoftwareApplication Schema
Represents the integration itself as a software application.

**Key Features:**
- Dynamic title: `{AppName} to {ActionName} Integration | Automated {ActionName} from {AppName}`
- Includes offers, pricing, and rating information
- Points to the specific integration URL

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Google Calendar to WhatsApp Integration | Automated WhatsApp from Google Calendar",
  "operatingSystem": "Cloud",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
    "description": "Free trial available"
  },
  "description": "Enterprise-grade messaging platform for WhatsApp, SMS, and Voice automation.",
  "featureList": "Integration with Google Calendar via Zapier to send WhatsApp.",
  "url": "https://seasalt.ai/en/integrations/google-calendar/whatsapp",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "500"
  }
}
```

### 3. HowTo Schema
Provides step-by-step instructions for setting up the integration.

**Key Features:**
- Title format: `How to connect {AppName} to {ActionName} using Seasalt.ai`
- Includes tools required (Zapier, Seasalt.ai, and the trigger app)
- Four-step setup process with images and anchor links
- Estimated time: 5 minutes

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to connect Google Calendar to WhatsApp using Seasalt.ai",
  "description": "A step-by-step guide to automatically send WhatsApp messages via Seasalt.ai whenever a specific event happens in Google Calendar.",
  "totalTime": "PT5M",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Zapier Account"
    },
    {
      "@type": "HowToTool",
      "name": "Seasalt.ai Account"
    },
    {
      "@type": "HowToTool",
      "name": "Google Calendar"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Select the Trigger",
      "text": "Choose Google Calendar as your trigger app in Zapier and select the specific event (e.g., 'New Lead' or 'New Event').",
      "image": "https://seasalt.ai/app_images/google-calendar.png",
      "url": "https://seasalt.ai/en/integrations/google-calendar/whatsapp#step1"
    },
    {
      "@type": "HowToStep",
      "name": "Select Seasalt.ai Action",
      "text": "Choose Seasalt.ai as your action app and select 'WhatsApp' (e.g., Send WhatsApp Message).",
      "image": "https://seasalt.ai/seasalt-ai-icon.png",
      "url": "https://seasalt.ai/en/integrations/google-calendar/whatsapp#step2"
    },
    {
      "@type": "HowToStep",
      "name": "Map the Data",
      "text": "Map the phone number and message content fields from Google Calendar into the Seasalt.ai action block.",
      "url": "https://seasalt.ai/en/integrations/google-calendar/whatsapp#step3"
    },
    {
      "@type": "HowToStep",
      "name": "Activate Workflow",
      "text": "Test the step to ensure the WhatsApp is delivered, then turn on your Zap.",
      "url": "https://seasalt.ai/en/integrations/google-calendar/whatsapp#step4"
    }
  ]
}
```

## Implementation Details

### File Location
`src/pages/[lang]/integrations/[app]/[action].astro`

### Schema Generation
Schemas are generated in the Astro component frontmatter using JavaScript template literals and passed to the Layout component via the `customJsonLd` prop.

### String Replacement
All translation strings use `.replaceAll()` instead of `.replace()` to ensure multiple occurrences of placeholders like `{appName}` and `{actionName}` are properly replaced. This is critical for titles and meta tags that contain the same placeholder multiple times.

### Image Handling
- App images are sourced from `public/app_images/` directory
- Falls back to Seasalt.ai icon if app image is not available
- Images are converted to absolute URLs for schema.org compliance

### SEO Component Integration
The schemas are injected into the page via the SEO component:
- `breadcrumbs` prop → automatically generates BreadcrumbList schema
- `customJsonLd` prop → adds SoftwareApplication and HowTo schemas

## Benefits

1. **SEO Enhancement**: Rich snippets in search results
2. **Better Discoverability**: HowTo schema can appear as step-by-step guides in search
3. **Schema Validation**: All schemas follow schema.org specifications
4. **Dynamic Generation**: Scales automatically across all integration pages
5. **No Duplication**: Breadcrumb schema handled by SEO component, not duplicated

## Testing

To validate the schemas:
1. Build the site: `npm run build`
2. Test with Google's Rich Results Test: https://search.google.com/test/rich-results
3. Verify with Schema.org validator: https://validator.schema.org/

## Maintenance

When adding new integration pages:
- No manual schema creation needed
- Schemas auto-generate from app and action data
- Ensure app images exist in `public/app_images/` for optimal HowTo schema
