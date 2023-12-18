const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

   specPattern: "cypress/e2e/**/*.js",  
  // baseUrl: "https://test.veriphy.co.uk/",
  chromeWebSecurity:false,
  failOnStatusCode: false,
  includeShadowDom: true,
  experimentalStudio: true,
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 100000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  requestTimeout: 60000,  
  responseTimeout: 15000,
  video: false,
  retries: {
    runMode: 0,
    openMode: 0
    },
  },
});
