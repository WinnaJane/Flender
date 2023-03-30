const { defineConfig } = require("cypress");


module.exports = defineConfig({
 
  e2e: {
    "baseUrl": "https://flender.beta.reportheld.com/office/main.html#login",
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
