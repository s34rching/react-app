const config = {
  use: {
    headless: false,
    ignoreHTTPSErrors: true,
    testDir: 'src/__tests__/e2e/playwright/specs',
  },
};

module.exports = config;
