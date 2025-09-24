# Language Redirect System Documentation

## Overview

The SeaSalt.ai website implements a sophisticated multi-stage language detection and redirect system that automatically directs users to their preferred language version of the site. This system supports 21 languages and handles complex browser language scenarios with fallback mechanisms.

## Architecture

The redirect system consists of several interconnected components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   User visits   │───▶│ Language        │───▶│ Redirect to     │
│   /pricing      │    │ Detection       │    │ /en/pricing     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ Multi-stage     │
                    │ Detection:      │
                    │ 1. URL Params   │
                    │ 2. localStorage │
                    │ 3. Browser Lang │
                    │ 4. Timezone     │
                    │ 5. Fallback     │
                    └─────────────────┘
```

## Components

### 1. Root Index Page (`src/pages/index.astro`)
- **Purpose**: Handles homepage redirects with comprehensive language detection
- **Features**: 
  - Advanced browser language parsing
  - Timezone-based fallback detection
  - Debug mode support (`?debug=1`)
  - Language preference caching

### 2. 404 Handler (`src/pages/404.astro`)
- **Purpose**: Catches non-localized paths in development mode
- **Behavior**: Redirects to `redirect.html` with path parameter

### 3. Production 404 (`public/404.html`)
- **Purpose**: Handles 404 errors in production builds
- **Behavior**: Same logic as Astro 404 but for static hosting

### 4. Redirect Helper (`public/redirect.html`)
- **Purpose**: Performs the actual language detection and redirection
- **Features**: Enhanced language mapping and timezone fallback

## Supported Languages

The system supports **21 languages** with the following language codes:

| Language | Code | Variants Supported |
|----------|------|-------------------|
| English | `en` | en-US, en-GB, en-CA, en-AU |
| Spanish | `es` | es-ES, es-MX, es-AR, es-CL |
| Traditional Chinese | `zh-TW` | zh-Hant, zh-HK, zh-MO, zh |
| Simplified Chinese | `zh-CN` | zh-Hans, zh-SG, zh-CN |
| Japanese | `ja` | ja-JP |
| Korean | `ko` | ko-KR |
| French | `fr` | fr-FR, fr-CA, fr-BE |
| German | `de` | de-DE, de-AT, de-CH |
| Arabic | `ar` | ar-SA, ar-EG, ar-AE |
| Persian | `fa` | fa-IR |
| Filipino | `fil` | fil-PH, tl |
| Hindi | `hi` | hi-IN |
| Indonesian | `id` | id-ID |
| Malay | `ms` | ms-MY |
| Polish | `pl` | pl-PL |
| Portuguese | `pt` | pt-BR, pt-PT |
| Russian | `ru` | ru-RU |
| Tamil | `ta` | ta-IN |
| Thai | `th` | th-TH |
| Vietnamese | `vi` | vi-VN |
| Romanian | `ro` | ro-RO |

## Detection Process

### Stage 1: URL Parameter Override
Highest priority - allows manual language selection:
```
https://seasalt.ai/?lang=es  → Forces Spanish
https://seasalt.ai/?lang=ja  → Forces Japanese
https://seasalt.ai/?debug=1  → Shows detection debug info
```

### Stage 2: Saved User Preference
Checks `localStorage` for previously selected language:
```javascript
localStorage.getItem('seasalt-preferred-language')
// Returns: 'zh-TW', 'es', 'fr', etc.
```

### Stage 3: Browser Language Analysis
Processes `navigator.languages` array with sophisticated mapping:

#### Direct Matches
```javascript
navigator.languages = ['es', 'en'] → Spanish
navigator.languages = ['fr', 'en'] → French
```

#### Language Mapping
```javascript
navigator.languages = ['zh-Hans'] → zh-CN (Simplified Chinese)
navigator.languages = ['zh-Hant'] → zh-TW (Traditional Chinese)
navigator.languages = ['zh-HK']  → zh-TW (Hong Kong → Traditional)
navigator.languages = ['zh-SG']  → zh-CN (Singapore → Simplified)
navigator.languages = ['fil-PH'] → fil (Filipino Philippines)
navigator.languages = ['tl']     → fil (Tagalog → Filipino)
navigator.languages = ['fa-IR']  → fa (Persian Iran)
navigator.languages = ['ms-MY']  → ms (Malay Malaysia)
navigator.languages = ['ta-IN']  → ta (Tamil India)
navigator.languages = ['hi-IN']  → hi (Hindi India)
navigator.languages = ['id-ID']  → id (Indonesian Indonesia)
navigator.languages = ['th-TH']  → th (Thai Thailand)
navigator.languages = ['vi-VN']  → vi (Vietnamese Vietnam)
```

#### Prefix Matching
```javascript
navigator.languages = ['en-US'] → en (English)
navigator.languages = ['es-MX'] → es (Spanish Mexico)
navigator.languages = ['fr-CA'] → fr (French Canada)
navigator.languages = ['de-AT'] → de (German Austria)
navigator.languages = ['pt-BR'] → pt (Portuguese Brazil)
```

#### Special Chinese Handling
```javascript
navigator.languages = ['zh-cn']     → zh-CN
navigator.languages = ['zh-hans']   → zh-CN  
navigator.languages = ['zh-sg']     → zh-CN
navigator.languages = ['zh-tw']     → zh-TW
navigator.languages = ['zh-hant']   → zh-TW
navigator.languages = ['zh-hk']     → zh-TW
navigator.languages = ['zh']        → zh-TW (default)
```

### Stage 4: Timezone Fallback
When browser language detection fails, uses system timezone:

```javascript
const timezoneMap = {
  'Asia/Tokyo': 'ja',           // Japan → Japanese
  'Asia/Seoul': 'ko',           // South Korea → Korean
  'Asia/Shanghai': 'zh-CN',     // China → Simplified Chinese
  'Asia/Hong_Kong': 'zh-TW',    // Hong Kong → Traditional Chinese
  'Asia/Taipei': 'zh-TW',       // Taiwan → Traditional Chinese
  'Asia/Singapore': 'zh-CN',    // Singapore → Simplified Chinese
  'Asia/Bangkok': 'th',         // Thailand → Thai
  'Asia/Ho_Chi_Minh': 'vi',     // Vietnam → Vietnamese
  'Asia/Jakarta': 'id',         // Indonesia → Indonesian
  'Asia/Kuala_Lumpur': 'ms',    // Malaysia → Malay
  'Asia/Manila': 'fil',         // Philippines → Filipino
  'Asia/Kolkata': 'hi',         // India → Hindi
  'Asia/Karachi': 'hi',         // Pakistan → Hindi
  'Asia/Tehran': 'fa',          // Iran → Persian
  'Asia/Dubai': 'ar',           // UAE → Arabic
  'Asia/Riyadh': 'ar',          // Saudi Arabia → Arabic
  'Europe/London': 'en',        // UK → English
  'Europe/Berlin': 'de',        // Germany → German
  'Europe/Paris': 'fr',         // France → French
  'Europe/Madrid': 'es',        // Spain → Spanish
  'Europe/Rome': 'es',          // Italy → Spanish (closest supported)
  'Europe/Warsaw': 'pl',        // Poland → Polish
  'Europe/Moscow': 'ru',        // Russia → Russian
  'America/New_York': 'en',     // USA East → English
  'America/Los_Angeles': 'en',  // USA West → English
  'America/Chicago': 'en',      // USA Central → English
  'America/Toronto': 'en',      // Canada → English
  'America/Mexico_City': 'es',  // Mexico → Spanish
  'America/Sao_Paulo': 'pt',    // Brazil → Portuguese
  'Australia/Sydney': 'en',     // Australia → English
  'Africa/Cairo': 'ar'          // Egypt → Arabic
};
```

### Stage 5: English Fallback
If all detection methods fail:
```javascript
return 'en'; // Default to English
```

## Redirect Flow Examples

### Example 1: US User visits `/pricing`
```
1. Browser: navigator.languages = ['en-US', 'en']
2. Detection: en-US → en (prefix match)
3. Redirect: /pricing → /en/pricing
4. Cache: localStorage['seasalt-preferred-language'] = 'en'
```

### Example 2: Hong Kong User visits `/about`
```
1. Browser: navigator.languages = ['zh-HK', 'zh', 'en']
2. Detection: zh-HK → zh-TW (language mapping)
3. Redirect: /about → /zh-TW/about
4. Cache: localStorage['seasalt-preferred-language'] = 'zh-TW'
```

### Example 3: Mexico User visits `/contact`
```
1. Browser: navigator.languages = ['es-MX', 'es', 'en']
2. Detection: es-MX → es (prefix match)
3. Redirect: /contact → /es/contact
4. Cache: localStorage['seasalt-preferred-language'] = 'es'
```

### Example 4: Philippines User (Tagalog browser)
```
1. Browser: navigator.languages = ['tl', 'en']
2. Detection: tl → fil (language mapping - Tagalog to Filipino)
3. Redirect: /services → /fil/services
4. Cache: localStorage['seasalt-preferred-language'] = 'fil'
```

### Example 5: User in Japan (timezone fallback)
```
1. Browser: navigator.languages = ['unknown-lang']
2. Browser Detection: Failed
3. Timezone: Asia/Tokyo → ja
4. Redirect: /pricing → /ja/pricing
5. Cache: localStorage['seasalt-preferred-language'] = 'ja'
```

## Development vs Production

### Development Mode (`npm run dev`)
- Uses `src/pages/404.astro` for unmatched routes
- Sitemaps served from `public/` directory
- Language detection works immediately

### Production Mode (Static Build)
- Uses `public/404.html` for unmatched routes
- Sitemaps served from build output (`dist/`)
- Optimized for static hosting (Netlify, Vercel, etc.)

## Configuration Files

### Required Updates for New Languages
When adding a new language, update these files:

1. **`astro.config.mjs`** - Add to `locales` array
2. **`src/pages/index.astro`** - Add to `supportedLocales` array
3. **`src/pages/404.astro`** - Add to `supported` array  
4. **`public/404.html`** - Add to `supported` array
5. **`public/redirect.html`** - Add to `supported` array
6. **`scripts/generate-sitemap.js`** - Add to `SUPPORTED_LANGUAGES` array
7. **`src/i18n/locales/`** - Create `{lang}.json` translation file

### Language Mapping Customization
To add custom language mappings, update the `languageMap` object in:
- `src/pages/index.astro`
- `public/redirect.html`

Example:
```javascript
const languageMap = {
  'custom-variant': 'target-language',
  'pt-AO': 'pt',  // Portuguese Angola → Portuguese
  'ar-MA': 'ar',  // Arabic Morocco → Arabic
};
```

### Timezone Mapping Customization
To add timezone-based detection, update `timezoneToLanguage` in:
- `src/pages/index.astro`

## Debug Mode

Enable debug mode to see detection process:
```
https://localhost:4321/?debug=1
```

This will log the detection steps to browser console:
```
URL param: es
Browser direct: en-US
Browser prefix: fr-CA → fr
Timezone: Asia/Tokyo → ja
Fallback: en
```

## Testing

### Manual Testing
1. Change browser language settings
2. Visit non-localized URLs (e.g., `/pricing`)
3. Verify redirect to correct language version
4. Check localStorage for cached preference

### Browser Language Testing
Use browser dev tools to simulate different languages:
- Chrome: Settings → Languages → Add languages
- Firefox: about:config → intl.accept_languages
- Safari: Preferences → Advanced → Languages

### Common Test Scenarios
```
en-US user → /pricing → /en/pricing
es-MX user → /pricing → /es/pricing
zh-Hans user → /pricing → /zh-CN/pricing
zh-Hant user → /pricing → /zh-TW/pricing
fil-PH user → /pricing → /fil/pricing
User in Asia/Tokyo → /pricing → /ja/pricing
```

## Performance Considerations

### Optimization Features
- **Preload English**: `<link rel="preload" href="/en/" as="document">`
- **Instant Redirect**: `window.location.replace()` prevents back button issues
- **Cached Preference**: localStorage reduces detection overhead on repeat visits
- **Minimal JavaScript**: Inline scripts, no external dependencies

### Load Time Impact
- **First Visit**: ~50ms for language detection + redirect
- **Repeat Visit**: ~10ms using cached preference
- **Fallback Chain**: Maximum ~100ms if all detection methods used

## Troubleshooting

### Common Issues

#### 1. Redirect Loops
**Symptom**: Browser keeps redirecting
**Cause**: Already localized path being processed again
**Solution**: Check `hasLocalePrefix()` function

#### 2. Language Not Detected
**Symptom**: Always defaults to English
**Cause**: Browser language not in supported list or mapping
**Solution**: Add to `languageMap` or `supported` array

#### 3. 404 in Development
**Symptom**: No redirect in `npm run dev`
**Cause**: Astro 404 page not handling redirect
**Solution**: Ensure `src/pages/404.astro` exists with inline script

#### 4. Sitemap Not Accessible
**Symptom**: `/sitemap-index.xml` returns 404
**Cause**: Sitemap not copied to `public/` for development
**Solution**: Run sitemap generation script

### Debugging Steps
1. Open browser console
2. Add `?debug=1` to URL
3. Check detection log output
4. Verify localStorage cached value
5. Test with different browser languages

## Browser Compatibility

### Supported Browsers
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Fallback for Older Browsers
```html
<noscript>
  <meta http-equiv="refresh" content="0; url=/en/">
</noscript>
```

## Security Considerations

### Safe Practices
- ✅ All redirects use relative URLs
- ✅ Input validation on language codes
- ✅ XSS prevention with proper encoding
- ✅ No external script dependencies

### Potential Vulnerabilities
- ❌ Open redirect (mitigated by relative URLs only)
- ❌ XSS via URL parameters (mitigated by validation)

## Maintenance

### Regular Tasks
1. **Monitor Analytics**: Check language distribution in Google Analytics
2. **Update Mappings**: Add new browser language variants as needed
3. **Test New Browsers**: Verify compatibility with browser updates
4. **Performance Review**: Monitor redirect timing in Core Web Vitals

### When to Update
- New language support added to site
- New browser language variants discovered in analytics
- User feedback about incorrect language detection
- Performance optimization opportunities

---

## Quick Reference

### File Locations
```
src/pages/index.astro          # Root page redirect
src/pages/404.astro            # Development 404 handler  
public/404.html                # Production 404 handler
public/redirect.html           # Main redirect logic
astro.config.mjs              # Language configuration
```

### Key Functions
```javascript
detectLanguage()              # Main detection logic
buildRedirectTarget()         # Constructs redirect URL
hasLocalePrefix()            # Checks if path already localized
```

### Debug Commands
```bash
# Enable debug mode
?debug=1

# Force specific language
?lang=es

# Test redirect logic
curl -I http://localhost:4321/pricing
```

This comprehensive redirect system ensures users always see the SeaSalt.ai website in their preferred language with minimal friction and maximum compatibility.