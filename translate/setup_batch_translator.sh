#!/bin/bash
#
# Setup Script for Batch Blog Translator
#
# This script installs all required dependencies and sets up the environment
# for the batch blog translation script.
#

set -e  # Exit on any error

echo "🔧 Setting up Batch Blog Translation Environment"
echo "==============================================="

# Check if Python 3 is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is not installed"
    echo "   Please install Python 3 and try again"
    exit 1
fi

echo "✅ Python 3 found: $(python3 --version)"

# Check if 'python' command is available (needed for some scripts)
if ! command -v python &> /dev/null; then
    echo "⚠️  'python' command not found, installing python-is-python3..."
    
    # Check if we can install packages (Ubuntu/Debian)
    if command -v apt-get &> /dev/null; then
        if sudo -n true 2>/dev/null; then
            sudo apt-get update -qq
            sudo apt-get install -y python-is-python3
            echo "✅ python-is-python3 installed"
        else
            echo "⚠️  Cannot install python-is-python3 without sudo access"
            echo "   You may need to run: sudo apt-get install python-is-python3"
            echo "   Or create a symlink: sudo ln -sf /usr/bin/python3 /usr/bin/python"
        fi
    else
        echo "⚠️  Non-Debian system detected. You may need to create a python symlink:"
        echo "   sudo ln -sf /usr/bin/python3 /usr/bin/python"
    fi
else
    echo "✅ 'python' command found: $(python --version)"
fi

# Check if pip is available
if ! command -v pip3 &> /dev/null; then
    echo "❌ Error: pip3 is not available"
    echo "   Please install pip for Python 3"
    exit 1
fi

echo "✅ pip3 found"

# Install Python dependencies
echo "📦 Installing Python dependencies..."
pip3 install --break-system-packages -r requirements-batch-translate.txt

echo "✅ Dependencies installed successfully"

# Check git configuration
echo "🔍 Checking git configuration..."

if ! command -v git &> /dev/null; then
    echo "❌ Error: git is not installed"
    exit 1
fi

if ! git rev-parse --git-dir &> /dev/null; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

echo "✅ Git repository detected"

# Check for required scripts
echo "🔍 Checking required scripts..."

if [ ! -f "../scripts/convert-to-blog-post.py" ]; then
    echo "❌ Error: ../scripts/convert-to-blog-post.py not found"
    exit 1
fi

if [ ! -f "../scripts/translate.py" ]; then
    echo "❌ Error: ../scripts/translate.py not found" 
    exit 1
fi

echo "✅ Required scripts found"

# Check for blogs directory
if [ ! -d "blogs" ]; then
    echo "❌ Error: blogs/ directory not found"
    echo "   Please ensure you're in the translate/ directory"
    exit 1
fi

BLOG_COUNT=$(find blogs -name "*.md" -type f | wc -l)
echo "✅ Found $BLOG_COUNT blog files in blogs/ directory"

# Make the script executable
chmod +x batch_translate_blogs.py

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "Usage:"
echo "  1. Set your API key:"
echo "     export ARK_API_KEY=your_api_key_here"
echo ""
echo "  2. Run the batch translator:"
echo "     python3 batch_translate_blogs.py"
echo ""
echo "  3. Or use the help option:"
echo "     python3 batch_translate_blogs.py --help"
echo ""
echo "📋 Summary:"
echo "   - Blog files to process: $BLOG_COUNT"
echo "   - Languages to translate to: 20"
echo "   - Total translations: $((BLOG_COUNT * 20))"
echo ""
echo "⚠️  Important notes:"
echo "   - Each translation will be committed individually for progress preservation"
echo "   - If you're on the 'main' branch, a new branch will be created automatically"
echo "   - You can safely interrupt the process (Ctrl+C) - progress will be saved"
echo "   - A detailed JSON report will be generated at completion"
