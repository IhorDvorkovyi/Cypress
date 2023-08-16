const { defineConfig } = require("cypress")

module.exports = defineConfig({
    defaultCommandtimeout: 5000,
    projectId: "egg3hc",
    e2e: {
        baseUrl: 'https://demowebshop.tricentis.com/',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/*.js'
    },
});