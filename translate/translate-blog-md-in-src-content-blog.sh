#!/bin/bash

# Batch translation script for blog posts in src/content/blog
# Usage: ./translate-blog-md-in-src-content-blog.sh <blog-post-filename>
# Example: ./translate-blog-md-in-src-content-blog.sh 111-lions-befrienders-launches-ai-powered-voice-agent-with-seasalt-ai.md

# Check if filename is provided
if [ -z "$1" ]; then
    echo "Error: Please provide the blog post filename"
    echo "Usage: $0 <blog-post-filename>"
    echo "Example: $0 111-lions-befrienders-launches-ai-powered-voice-agent-with-seasalt-ai.md"
    exit 1
fi

BLOG_FILE="$1"
SOURCE_LANG="en"

# Supported languages (excluding English as it's the source)
LANGUAGES=("ar" "de" "es" "fa" "fil" "fr" "hi" "id" "ja" "ko" "ms" "pl" "pt" "ro" "ru" "ta" "th" "vi" "zh-cn" "zh-tw")

# Check if source file exists
SOURCE_FILE="src/content/blog/${SOURCE_LANG}/${BLOG_FILE}"
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: Source file not found: $SOURCE_FILE"
    exit 1
fi

echo "🚀 Starting batch translation for: $BLOG_FILE"
echo "📁 Source: $SOURCE_FILE"
echo "🌍 Target languages: ${#LANGUAGES[@]}"
echo ""

# Counter for translations
TRANSLATED=0
SKIPPED=0
FAILED=0

# Translate to each language
for lang in "${LANGUAGES[@]}"; do
    TARGET_FILE="src/content/blog/${lang}/${BLOG_FILE}"
    
    # Check if target file already exists
    if [ -f "$TARGET_FILE" ]; then
        echo "⏭️  Skipping $lang - file already exists: $TARGET_FILE"
        ((SKIPPED++))
        continue
    fi
    
    echo "🔄 Translating to $lang..."
    
    # Run the translation
    if python translate/translate.py "$SOURCE_FILE" "$lang"; then
        echo "✅ Successfully translated to $lang"
        ((TRANSLATED++))
    else
        echo "❌ Failed to translate to $lang"
        ((FAILED++))
    fi
    
    echo ""
done

echo "🎉 Batch translation completed!"
echo "📊 Summary:"
echo "   ✅ Translated: $TRANSLATED"
echo "   ⏭️  Skipped: $SKIPPED"
echo "   ❌ Failed: $FAILED"
echo "   🌍 Total languages: ${#LANGUAGES[@]}"