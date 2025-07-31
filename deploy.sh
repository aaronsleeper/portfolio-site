#!/bin/bash

# Create a temporary directory for deployment
rm -rf deploy-temp
mkdir deploy-temp

# Copy the simple HTML files
cp index.html deploy-temp/
cp styles.css deploy-temp/
cp script.js deploy-temp/

# Copy the images directory
cp -r public/images deploy-temp/images

# Deploy to gh-pages branch
gh-pages -d deploy-temp

# Clean up
rm -rf deploy-temp

echo "Deployment complete!" 