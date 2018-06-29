#!/usr/bin/env node

const fs = require('fs');
const CleanCSS = require('clean-css');
const compileCSS = require('react-with-styles-interface-css-compiler');
const registerMaxSpecificity = require('react-with-styles-interface-css/dist/utils/registerMaxSpecificity').default;
const registerCSSInterfaceWithDefaultTheme = require('./utils/registerCSSInterfaceWithDefaultTheme').default;

const args = process.argv.slice(2);
const optimizeForProduction = args.includes('-o') || args.includes('--optimize');

registerMaxSpecificity(0);
registerCSSInterfaceWithDefaultTheme();

const format = new CleanCSS({
  level: optimizeForProduction ? 2 : 0,
  format: 'beautify',
  inline: ['none'],
});
const CSS = compileCSS('./scripts/renderAllComponents.jsx');
const formattedCSS = format.minify(CSS).styles;

const outputFilePath = optimizeForProduction ? './lib/css/_slider.css' : './css/styles.css';
fs.writeFileSync(outputFilePath, formattedCSS, 'utf8');
