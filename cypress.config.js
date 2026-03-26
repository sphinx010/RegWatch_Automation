const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://reg-watch-client-staging.gentlemeadow-8588bc06.eastus.azurecontainerapps.io',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    chromeWebSecurity: false,
  },
});
