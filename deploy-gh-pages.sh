#!/usr/bin/env bash
set -euo pipefail

# ---- config ------------------------------------------------------
BUILD_DIR="dist"                # where your built site lives on main
TARGET_BRANCH="gh-pages"        # branch that serves GitHub Pages
TMP_DIR="$(mktemp -d)"          # temp worktree dir
COMMIT_MSG="deploy: $(date -u '+%Y-%m-%d %H:%M:%S')"
# -----------------------------------------------------------------

# 1. Ensure we're on main and the working tree is clean
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo "✘ You must run this from the 'main' branch (currently on '$CURRENT_BRANCH')." >&2
  exit 1
fi
if ! git diff-index --quiet HEAD --; then
  echo "✘ Uncommitted changes detected; please commit/stash first." >&2
  exit 1
fi

npm run build
npm run seo-update

if [[ ! -d "$BUILD_DIR" ]]; then
  echo "✘ Build directory '$BUILD_DIR' not found. Did you run your build?" >&2
  exit 1
fi

# 2. Prepare the gh-pages worktree
git worktree add -B "$TARGET_BRANCH" "$TMP_DIR" origin/"$TARGET_BRANCH" || \
git worktree add -B "$TARGET_BRANCH" "$TMP_DIR"

# 3. Clear previous contents (except .git) and copy new files
rm -rf "$TMP_DIR"/*
cp -R "$BUILD_DIR"/. "$TMP_DIR"/

# 4. Commit & push
pushd "$TMP_DIR" >/dev/null
git add --all
if git diff --cached --quiet; then
  echo "✔ No changes to deploy."
else
  git commit -m "$COMMIT_MSG"
  git push origin "$TARGET_BRANCH"
  echo "✔ Deployed to '$TARGET_BRANCH'."
fi
popd >/dev/null

# 5. Clean up
git worktree remove "$TMP_DIR"

