# Blog Translation Tools

This directory contains tools for batch translating SeaMeet blog content to multiple languages.

## Directory Structure

```
translate/
├── blogs/                      # Input: Source blog markdown files
├── batch_translate_blogs.py    # Main batch translation script
├── requirements-batch-translate.txt  # Python dependencies
├── setup_batch_translator.sh   # Environment setup script
└── README.md                   # This file
```

## Quick Start

1. **Set up the environment** (one-time):
   ```bash
   cd translate/
   bash setup_batch_translator.sh
   ```

2. **Set your API key**:
   ```bash
   export ARK_API_KEY=your_actual_api_key_here
   ```

3. **Run batch translation**:
   ```bash
   python3 batch_translate_blogs.py
   ```

## How It Works

### Input
- Source blog files in `blogs/` directory (markdown format)
- Each file should be a complete blog post ready for conversion

### Process
1. **Conversion**: Converts each blog to proper format with YAML frontmatter
2. **Translation**: Translates to all 20 supported languages using ARK API
3. **Organization**: Places translated files in `../src/content/blog/[language]/`
4. **Git Management**: 
   - Creates new branch if running from `main`
   - Commits each translated blog individually
   - Pushes progress to remote for safety

### Output
- Translated blog files in language-specific directories
- Individual git commits for each translation
- Detailed JSON report of processing results

## Supported Languages (20)

```
en, zh-CN, zh-TW, ja, ko, ar, de, es, fa, fil, fr, hi, id, ms, pl, pt, ru, ta, th, vi
```

## Scripts Overview

### `setup_batch_translator.sh`
- Validates environment (Python, pip, git, required files)
- Installs Python dependencies
- Checks directory structure
- Provides usage instructions

### `batch_translate_blogs.py`
- Main translation engine
- Handles branch management
- Processes files individually with progress tracking
- Creates comprehensive reports
- Safe interruption (Ctrl+C preserves progress)

### Dependencies (`requirements-batch-translate.txt`)
- `colorama`: Colored terminal output
- `requests`: HTTP requests for API calls

## Features

### Safety & Reliability
- **Progress preservation**: Each blog committed individually
- **Branch isolation**: Creates new branch if on main
- **Safe interruption**: Can safely stop and resume
- **Error handling**: Continues processing after individual failures
- **Detailed debugging**: Shows command execution and file paths
- **Output validation**: Verifies files are created in correct locations

### Progress Tracking  
- **Real-time status**: Colored progress indicators
- **Detailed reporting**: JSON summary with statistics
- **File counting**: Tracks total translations and success rates

### Git Integration
- **Automatic branching**: Smart branch management
- **Individual commits**: Granular commit history
- **Remote pushing**: Progress backed up to remote
- **Configurable**: Sets git user for batch operations

## Usage Examples

### Basic Usage
```bash
cd translate/
python3 batch_translate_blogs.py
```

### With Custom Options
```bash
# Show help
python3 batch_translate_blogs.py --help

# Dry run (check files without translating)
python3 batch_translate_blogs.py --dry-run
```

### Environment Variables
```bash
# Required: ARK API key
export ARK_API_KEY=your_api_key_here

# Optional: Custom branch prefix
export BATCH_BRANCH_PREFIX=my-custom-prefix
```

## Troubleshooting

### Common Issues

**API Key Missing**
```bash
export ARK_API_KEY=your_actual_api_key
```

**Permission Denied**
```bash
chmod +x batch_translate_blogs.py setup_batch_translator.sh
```

**Missing Dependencies**
```bash
bash setup_batch_translator.sh
```

**Python Command Not Found**
```bash
# Ubuntu/Debian systems
sudo apt-get install python-is-python3

# Or create manual symlink
sudo ln -sf /usr/bin/python3 /usr/bin/python
```

**Git Issues**
```bash
# Check git status
git status

# Verify remote configured
git remote -v
```

### File Structure Issues

**Blogs directory not found**
- Ensure you're running from the `translate/` directory
- Check that `blogs/` contains `.md` files

**Scripts not found**
- Verify `../scripts/convert-to-blog-post.py` exists
- Verify `../scripts/translate.py` exists

### Recovery

**Interrupted Translation**
- The script can be safely restarted
- Already translated files will be skipped
- Progress is preserved in git commits

**Branch Issues**
```bash
# List branches
git branch -a

# Switch to working branch
git checkout batch-blog-translation-YYYYMMDD-HHMMSS
```

## Output Structure

After successful translation, files are organized as:

```
../src/content/blog/
├── en/
│   ├── blog1.md
│   ├── blog2.md
│   └── ...
├── zh-CN/
│   ├── blog1.md
│   ├── blog2.md
│   └── ...
├── zh-TW/
│   ├── blog1.md
│   ├── blog2.md
│   └── ...
└── [other languages]/
    ├── blog1.md
    ├── blog2.md
    └── ...
```

Each translated file includes:
- YAML frontmatter with metadata
- Translated content
- Preserved formatting and structure
- Language-appropriate modifications

## Advanced Usage

### Processing Specific Files
```bash
# Process only specific blog files (modify script)
# Edit BLOGS_DIR pattern in batch_translate_blogs.py
```

### Custom Output Directory
```bash
# Modify CONTENT_BLOG_DIR in batch_translate_blogs.py
```

### Different API Configuration
```bash
# Set different API endpoint (if supported)
export ARK_API_BASE=https://your-custom-endpoint.com
```

---

For more information, see the main repository documentation in the parent directory.
