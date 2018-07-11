const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');

const config = require('./config');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function() {
  const { width, height } = config.viewport;
  const browser = await puppeteer.launch({
    args: [
      `--window-size=${width},${height}`,
      '--force-color-profile=srgb|generic-rgb|color-spin-gamma24',
    ],
    headless: false,
    slowMo: 250,
  });
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());

  global.__BROWSER__ = browser;
}
