#!/usr/bin/env node

// Build script for GitHub Pages static deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building static site for GitHub Pages...');

// Build the client using Vite
console.log('Building frontend...');
execSync('cd client && npx vite build --outDir ../docs', { stdio: 'inherit' });

// Copy assets to the build directory
console.log('Copying assets...');
if (fs.existsSync('attached_assets')) {
  if (!fs.existsSync('docs/attached_assets')) {
    fs.mkdirSync('docs/attached_assets', { recursive: true });
  }
  execSync('cp -r attached_assets/* docs/attached_assets/', { stdio: 'inherit' });
}

// Create .nojekyll file to prevent GitHub Pages from ignoring files with underscores
fs.writeFileSync('docs/.nojekyll', '');

console.log('Static site built successfully in ./docs directory');
console.log('You can now commit and push to deploy to GitHub Pages');