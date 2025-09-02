# Arabic Translation Documentation

This document describes the automated Arabic translation process for the `ar.json` internationalization file.

## Overview

The Arabic translation system uses automated scripts to translate English content to Arabic while preserving company names, technical terms, and maintaining JSON structure integrity.

## Translation Scripts

### Main Script: `fixed_arabic_translator.py`

The primary script for translating content to Arabic with comprehensive preservation rules.

**Location**: `/fixed_arabic_translator.py`

**Usage**:
```bash
python3 fixed_arabic_translator.py
```

**Features**:
- Preserves company names (Seasalt.ai, SeaChat, SeaMeet, SeaX, SeaHealth, SeaVoice)
- Preserves technical terms (API, SDK, JSON, HTML, etc.)
- Preserves URLs, email addresses, phone numbers
- Maintains JSON structure and validity
- Creates automatic backups
- Provides detailed logging and statistics

## Translation Rules

### What Gets Translated

1. **UI Text**: Navigation items, button labels, form fields
2. **Content Text**: Descriptions, help text, user-facing messages  
3. **Business Terms**: Generic business terminology
4. **Common Phrases**: Greetings, CTAs, status messages

### What Gets Preserved (Never Translated)

1. **Company Names**: 
   - Seasalt.ai, SeaChat, SeaMeet, SeaX, SeaHealth, SeaVoice
   - Third-party companies: Twilio, Meta, Facebook, WhatsApp, etc.

2. **Technical Terms**:
   - Acronyms: API, SDK, JSON, HTML, CSS, AI, ML, etc.
   - Compliance terms: SOC 2, HIPAA, GDPR, TCPA
   - Technical formats: 10DLC, SMS, MMS, etc.

3. **Technical Patterns**:
   - Email addresses
   - URLs and domain names  
   - Phone numbers
   - Currency amounts (e.g., $50)
   - Percentages (e.g., 99%)
   - Hex colors (e.g., #FF0000)
   - Template variables (e.g., {{variable}})
   - HTML tags and entities

### SEO Best Practices

The translation follows SEO guidelines:
- Technical terms remain in English for consistency
- Brand names preserved for recognition
- URLs and technical identifiers unchanged
- Key business terms translated for local audience

## File Structure

```
public/
  locales/
    ar.json                              # Main Arabic translation file
    ar_backup_YYYYMMDD_HHMMSS.json      # Automatic backups

scripts/
  fixed_arabic_translator.py             # Main translation script
  translation_log_YYYYMMDD_HHMMSS.txt   # Processing logs
```

## Usage Instructions

### Running Translation

1. **Backup Current File** (automatic):
   ```bash
   # The script automatically creates backups
   python3 fixed_arabic_translator.py
   ```

2. **Review Output**:
   - Check the console output for statistics
   - Review the generated log file
   - Validate JSON integrity

3. **Quality Check**:
   ```bash
   # Validate JSON structure
   python3 -c "import json; json.load(open('public/locales/ar.json', 'r'))"
   
   # Check translation quality with sample
   python3 -c "
   import json, random, re
   data = json.load(open('public/locales/ar.json', 'r'))
   # Add your quality check code here
   "
   ```

### Re-running Translation

When new strings are added or existing ones change:

1. **Update Translation Dictionary** (if needed):
   - Edit `self.translations` in the script
   - Add new English-Arabic pairs

2. **Run Translation**:
   ```bash
   python3 fixed_arabic_translator.py
   ```

3. **Test Integration**:
   - Test in development environment
   - Verify UI rendering
   - Check text overflow/truncation

## Quality Assurance Checklist

### Pre-Translation
- [ ] Backup current ar.json file
- [ ] Verify script has latest translation dictionary
- [ ] Check for new technical terms to preserve

### Post-Translation  
- [ ] JSON file is valid (passes JSON.parse)
- [ ] Company names are preserved (Seasalt.ai, SeaChat, etc.)
- [ ] Technical terms unchanged (API, SDK, etc.)
- [ ] URLs and emails intact
- [ ] Key UI elements properly translated
- [ ] No garbled placeholder text
- [ ] Arabic text renders correctly in browser
- [ ] No text overflow in UI components

### Sample Validation
- [ ] Check navigation items (Products → المنتجات)
- [ ] Verify CTA buttons (Get Started → ابدأ الآن)  
- [ ] Confirm error messages are translated
- [ ] Ensure help text is in Arabic
- [ ] Validate form labels and placeholders

## Translation Statistics

The script provides detailed statistics:
- **Total Strings**: All string values in JSON
- **Translated Strings**: Successfully translated content
- **Preserved Strings**: Protected content (companies, tech terms)
- **Mixed Content**: Strings with both Arabic and English
- **Empty Strings**: Blank or whitespace-only values

### Typical Results
- Translated: 5-25% (pure UI text)
- Preserved: 30-40% (technical terms, brands)
- Mixed Content: 40-60% (partially translated complex strings)
- Empty: <1% (empty values)

## Troubleshooting

### Common Issues

1. **Placeholder Text Visible**:
   - Issue: `__PRESERVE_xxx__` appears in output
   - Solution: Check placeholder restoration logic
   - Fix: Ensure unique placeholder generation

2. **Company Names Translated**:
   - Issue: Brand names appear in Arabic
   - Solution: Add to `company_names` set in script
   - Verify: Case-insensitive matching

3. **JSON Invalid**:
   - Issue: Malformed JSON after translation
   - Solution: Check for unescaped quotes or characters
   - Validate: Run JSON parser before committing

4. **Mixed Content High**:
   - Issue: Many strings showing English + Arabic
   - Solution: Review complex strings manually
   - Consider: Breaking complex strings into simpler parts

### Debug Commands

```bash
# Validate JSON
python3 -c "import json; print('Valid' if json.load(open('public/locales/ar.json')) else 'Invalid')"

# Check specific translations
python3 -c "
import json
data = json.load(open('public/locales/ar.json', 'r'))
print('Products:', data['header']['products'])
print('Solutions:', data['header']['solutions'])
"

# Count translation types
python3 -c "
import json, re
data = json.load(open('public/locales/ar.json', 'r'))
# Add analysis code
"
```

## Maintenance

### Regular Updates
- Review translation quality quarterly
- Update technical terms list as new ones appear  
- Refine translation dictionary based on user feedback
- Monitor for new company/brand names to preserve

### Version Control
- Commit translated files with descriptive messages
- Include backup files in commits for rollback capability
- Tag releases with translation updates
- Document major translation changes in changelog

## Contact

For questions about the translation process:
- Review this documentation
- Check script logs for detailed processing info
- Test changes in development environment first
- Validate all changes before production deployment
