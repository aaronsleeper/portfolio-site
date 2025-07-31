#!/bin/bash

# Build the project for GitHub Pages
npm run build:gh-pages

# Create a temporary directory for deployment
rm -rf deploy-temp
mkdir deploy-temp

# Copy all files from the out directory
cp -r out/* deploy-temp/

# Deploy to gh-pages branch
gh-pages -d deploy-temp

# Clean up
rm -rf deploy-temp

echo "Deployment complete!" 