#!/usr/bin/env node
'use strict';

const fs = require('fs');
if (process.argv.length < 3) {
  console.log('File not provided');
  process.exit(1);
}

try {
  const path = process.argv[2];
  const data = fs.readFileSync(path);
  const reportCategories = JSON.parse(data).reportCategories;
  const pwa = reportCategories.find(a => a.name === 'Progressive Web App');
  const pwaAvg = pwa.audits.reduce((last, s) => {
    return last + s.score;
  }, 0) / pwa.audits.filter((s) => {return !s.result.manual}).length;

  const performance = reportCategories.find(a => a.name === 'Performance');
  const performanceAvg = performance.audits.reduce((last, s) => {
    return last + s.score;
  }, 0) / performance.audits.filter((s) => {return !s.result.manual}).length;

  const accessibility = reportCategories.find(a => a.name === 'Accessibility');
  const accessibilityAvg = accessibility.audits.reduce((last, s) => {
    return last + s.score;
  }, 0) / accessibility.audits.filter((s) => {return !s.result.manual}).length;

  const bestPractices = reportCategories.find(a => a.name === 'Best Practices');
  const bestPracticesAvg = bestPractices.audits.reduce((last, s) => {
    return last + s.score;
  }, 0) / bestPractices.audits.filter((s) => {return !s.result.manual}).length;

  // Failed to get more than 80% in the PWA section, so bail.
  // This is currently super lenient because I'm not testing over HTTPS, which
  // means those tests will fail.
  console.log(`PWA Score: ${pwaAvg}. Performance Score: ${performanceAvg}. Accessibility Score: ${accessibilityAvg}. Best Practices Score: ${bestPracticesAvg}.`);

  if (pwaAvg < 0.8) {
    console.log(JSON.stringify(pwa, null, 2));
    process.exit(1);
  }

  // All good.
  process.exit(0);
} catch (e) {
  console.log(e);
  process.exit(1);
}
