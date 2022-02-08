module.exports = (config) => {
  config.addPassthroughCopy("./src/assets");
  config.addWatchTarget("./src/sass/");
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
