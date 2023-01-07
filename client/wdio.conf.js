const config = {
  baseUrl: 'http://localhost:3000',
  runner: 'local',
  headless: false,
  specs: [
    'src/__tests__/e2e/wdio/specs/example.js',
  ],
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {},
  }],
  waitforTimeout: 6000,
  framework: 'mocha',
};

module.exports = { config };
