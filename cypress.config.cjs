const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
module.exports = defineConfig({
  e2e: {
  supportFile: 'cypress/support/e2e.js',
    async setupNodeEvents(on, config) {
      await require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: "cypress/journeys/features/**/*.feature",
    cucumber: {
      stepDefinitions: 'cypress/journeys/step_definitions',
    },
  },
});
