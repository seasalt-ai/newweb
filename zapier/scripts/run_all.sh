#!/bin/bash
# Complete data collection pipeline for Zapier integrations
# This script runs all three data collection scripts in sequence

set -e  # Exit on error

echo "=============================================================================="
echo "ZAPIER INTEGRATION DATA COLLECTION PIPELINE"
echo "=============================================================================="
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "❌ Virtual environment not found!"
    echo "Please run:"
    echo "  python3 -m venv venv"
    echo "  source venv/bin/activate"
    echo "  pip install -r requirements.txt"
    exit 1
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "❌ .env file not found!"
    echo "Please copy .env.example to .env and configure your API credentials"
    exit 1
fi

# Activate virtual environment
source venv/bin/activate

echo "Step 1/3: Fetching Zapier categories..."
echo "------------------------------------------------------------------------------"
python 1_fetch_categories.py
if [ $? -ne 0 ]; then
    echo "❌ Failed to fetch categories"
    exit 1
fi

echo ""
echo "Step 2/3: Fetching apps by category..."
echo "------------------------------------------------------------------------------"
python 2_fetch_apps_by_category.py
if [ $? -ne 0 ]; then
    echo "❌ Failed to fetch apps"
    exit 1
fi

echo ""
echo "Step 3/3: Curating apps..."
echo "------------------------------------------------------------------------------"
python 3_curate_apps.py
if [ $? -ne 0 ]; then
    echo "❌ Failed to curate apps"
    exit 1
fi

echo ""
echo "=============================================================================="
echo "✓ DATA COLLECTION COMPLETE!"
echo "=============================================================================="
echo ""
echo "Generated files:"
echo "  - ../data/raw/categories.json"
echo "  - ../data/raw/apps_by_category/*.json"
echo "  - ../data/zapier-apps.json"
echo "  - ../data/curated-apps.json"
echo ""
echo "Next steps:"
echo "  1. Review ../data/curated-apps.json"
echo "  2. Make manual adjustments if needed"
echo "  3. Run 'npm run build' from project root to generate pages"
echo ""
