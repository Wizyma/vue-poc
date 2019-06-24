module.exports = {
  client: {
    service: {
      name: "vuegraphql",
      // URL to the GraphQL API
      url: "https://countries.trevorblades.com/"
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};
