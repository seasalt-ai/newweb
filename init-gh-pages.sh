#!/usr/bin/env bash
set -euo pipefail

MAIN_BRANCH="main"          # change if your default branch is different
PAGES_BRANCH="gh-pages"

# 1  Ensure we’re not already on gh-pages
current=$(git rev-parse --abbrev-ref HEAD)
if [[ "$current" == "$PAGES_BRANCH" ]]; then
  echo "✘ You’re already on $PAGES_BRANCH. Run this from $MAIN_BRANCH."
  exit 1
fi

# 2  Create (or reset) orphan gh-pages branch
echo "➤ Creating orphan $PAGES_BRANCH branch…"
git checkout --orphan "$PAGES_BRANCH"

# 3  Remove every tracked file from the index
git rm -rf --cached .

# 4  Delete *working-tree* files **except** .git and the script itself
find . -mindepth 1 -maxdepth 1 \
       \( ! -name '.git' ! -name 'init-gh-pages.sh' \) \
       -exec rm -rf {} +

# 5  Add a placeholder page so branch isn’t empty
echo '<h1>GitHub Pages Initialized</h1>' > index.html
git add index.html
git commit -m "Initial GitHub Pages commit"

# 6  Push to origin (creates branch on GitHub)
echo "➤ Pushing $PAGES_BRANCH to origin…"
git push -u origin "$PAGES_BRANCH"

# 7  Return to main
echo "➤ Switching back to $MAIN_BRANCH…"
git checkout "$MAIN_BRANCH"

echo "✅ $PAGES_BRANCH branch created and pushed successfully."

