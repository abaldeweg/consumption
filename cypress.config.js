/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:5050',
  },
  component: {
    setupNodeEvents(on, config) {},
    specPattern: 'src/**/__tests__/*.spec.{js,ts,jsx,tsx}',
  },
})
