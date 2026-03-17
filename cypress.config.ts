import { defineConfig } from 'cypress';

export default defineConfig({
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
    baseUrl: 'https://regtech365-ecosystem-fe-qa.salmonbush-5bbd955b.eastus.azurecontainerapps.io',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
  },
});
