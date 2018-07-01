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
const formattedCSS = `${format.minify(CSS).styles} \n`;
const dir = optimizeForProduction ? './lib/css' : './css';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

<<<<<<< HEAD
const outputFilePath = optimizeForProduction ? `${dir}/_styles.css` : `${dir}/styles.css`;
=======
const outputFilePath = optimizeForProduction ? `${dir}/_slider.css` : `${dir}/slider.css`;
>>>>>>> add css generating script and package.json hook
fs.writeFileSync(outputFilePath, formattedCSS, 'utf8');
