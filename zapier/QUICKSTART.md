# Zapier Integration Framework - Quick Start Guide

## Overview
This framework systematically fetches Zapier categories and apps via their official API, then curates the most relevant apps for Seasalt.ai's Agentic Send feature.

## What You'll Get
- **Data-driven app selection** from Zapier's official API
- **~50 curated apps** across relevant categories (CRM, Forms, Calendar, etc.)
- **~200 pages** (50 apps × 4 pages each) × 20 languages = **~4,000 total pages**
- **Complete app metadata** including images, descriptions, categories, and popularity

## Prerequisites
- Python 3.7+
- Zapier API credentials (Client ID or OAuth token)
- Internet connection for API requests

## Quick Start (5 minutes)

### 1. Setup Environment
```bash
cd zapier/scripts

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure API Access
```bash
# Copy example env file
cp .env.example .env

# Edit .env and add your credentials
# Get your Client ID from: https://developer.zapier.com/
nano .env
```

Add to `.env`:
```
ZAPIER_CLIENT_ID=your_client_id_here
REQUEST_DELAY=1.5
```

### 3. Run Data Collection
```bash
# Option A: Run all steps automatically
./run_all.sh

# Option B: Run steps manually
python 1_fetch_categories.py      # ~30 seconds
python 2_fetch_apps_by_category.py  # ~5-10 minutes (respects rate limits)
python 3_curate_apps.py            # ~10 seconds
```

### 4. Review Output
```bash
# Check curated apps
cat ../data/curated-apps.json

# See summary
ls -lh ../data/
```

## What Each Script Does

### 1_fetch_categories.py
- Fetches **all Zapier categories** from `/v1/categories` endpoint
- No authentication required
- Saves to: `data/raw/categories.json`
- Identifies ~15 relevant categories for Agentic Send

### 2_fetch_apps_by_category.py
- Fetches **top 100 apps** per relevant category
- Uses `/v2/apps?category={slug}` endpoint
- Requires authentication (Client ID or OAuth)
- Respects rate limits with 1.5s delay between requests
- Saves raw responses to: `data/raw/apps_by_category/*.json`
- Creates consolidated file: `data/zapier-apps.json`

### 3_curate_apps.py
- Filters apps by **relevance score** (priority, category, keywords, triggers)
- Ensures **category diversity** (max 8 apps per category)
- Generates **use cases** and **trigger examples** per app
- Outputs final curated list: `data/curated-apps.json`

## Output Files

```
zapier/data/
├── raw/
│   ├── categories.json           # All Zapier categories
│   └── apps_by_category/         # Raw app data per category
│       ├── crm.json
│       ├── calendar.json
│       ├── forms.json
│       └── ...
├── zapier-apps.json              # All fetched apps (consolidated)
├── curated-apps.json             # Final curated list ✓
└── actions.json                  # Agentic Send actions (SMS, WhatsApp, Phone)
```

## Curated App Structure

Each curated app includes:
```json
{
  "name": "Google Calendar",
  "slug": "google-calendar",
  "category": "Calendar",
  "description": "Keep track of events and schedules",
  "useCases": [
    "Meeting reminders 15 minutes before events",
    "Event confirmations to attendees",
    "Schedule change notifications"
  ],
  "triggerExamples": ["Event starts", "New event created", "Event updated"],
  "images": {
    "url_16x16": "https://...",
    "url_128x128": "https://..."
  },
  "hex_color": "4285f4",
  "api_id": "1e4fcbf4-...",
  "relevance_score": 85.0
}
```

## Rate Limiting

The scripts respect Zapier's API rate limits:
- **1.5 second delay** between requests (configurable via `REQUEST_DELAY`)
- **50 apps per page** (Zapier's recommendation)
- **Max 100 apps** per category (top apps sorted by popularity)

Total time: ~5-10 minutes depending on number of categories.

## Troubleshooting

### Authentication Errors
```
Error 401: Unauthorized
```
**Solution**: Check your `ZAPIER_CLIENT_ID` in `.env`

### Rate Limit Errors
```
Error 429: Too Many Requests
```
**Solution**: Increase `REQUEST_DELAY` in `.env` (try 2.0 or 3.0)

### No Apps Fetched
```
WARNING: No authentication configured!
```
**Solution**: You can still fetch categories, but apps require authentication.

## Next Steps

After running these scripts:

1. **Review** `data/curated-apps.json`
2. **Manually adjust** if needed (add/remove apps)
3. **Add translations** to `src/i18n/locales/*.json`
4. **Build pages**: `npm run build` from project root
5. **Test locally**: `npm run preview`

## Customization

### Adjust Number of Apps
Edit `3_curate_apps.py`:
```python
curated = curate_apps(apps, max_apps=50)  # Change 50 to desired number
```

### Add Priority Apps
Edit `3_curate_apps.py`:
```python
PRIORITY_APPS = {
    "your-app-slug",
    "another-app-slug"
}
```

### Change Relevant Categories
Edit `2_fetch_apps_by_category.py`:
```python
RELEVANT_CATEGORIES = [
    "crm",
    "calendar",
    "your-new-category"
]
```

## File Structure Summary

```
zapier/
├── QUICKSTART.md          ← You are here
├── PLAN.md                # Detailed implementation plan
├── README.md              # Project documentation
├── scripts/
│   ├── 1_fetch_categories.py
│   ├── 2_fetch_apps_by_category.py
│   ├── 3_curate_apps.py
│   ├── run_all.sh         # Execute all scripts
│   ├── requirements.txt
│   ├── .env.example
│   └── .env               # Your credentials (not in git)
└── data/
    ├── raw/               # Raw API responses (not in git)
    ├── zapier-apps.json   # Consolidated apps
    ├── curated-apps.json  # Final output ✓
    └── actions.json       # Agentic Send actions

src/pages/[lang]/integrations/
├── [app]/
│   ├── index.astro        # Hub page (already created)
│   └── [action].astro     # Spoke pages (already created)
```

## Support

- Zapier API Docs: https://platform.zapier.com/embed/partner-api
- Get Client ID: https://developer.zapier.com/
- Rate Limits: https://platform.zapier.com/embed/partner-api#rate-limits
