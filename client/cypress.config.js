const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    fixturesFolder: './src/e2e/cypress/fixtures',
    video: false,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'src/__tests__/e2e/cypress/specs/*.cy.{js,jsx,ts,tsx}',
    supportFolder: 'src/__tests__/e2e/cypress/support',
    supportFile: 'src/__tests__/e2e/cypress/support/e2e.js',
    keystrokeDelay: 100,
  },
});
