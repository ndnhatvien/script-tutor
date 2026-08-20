#!/bin/bash
# Deploy frontend to GitHub Pages

echo "Deploying frontend to GitHub Pages..."

# Create gh-pages branch if not exists
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# Copy frontend files to root
cp -r script-tutor-frontend/* .

# Add CNAME if custom domain (optional)
# echo "your-domain.com" > CNAME

# Commit and push
git add index.html styles.css app.js config.js lessons.js
git commit -m "Deploy frontend to GitHub Pages"
git push -u origin gh-pages --force

echo "Done! Enable GitHub Pages in repo settings:"
echo "Settings → Pages → Source: gh-pages branch"
echo "URL will be: https://ndnhatvien.github.io/script-tutor/"

# Switch back to main
git checkout main
