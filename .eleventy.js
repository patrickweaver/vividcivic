const pluginRss = require("@11ty/eleventy-plugin-rss");

// Helpers:
const generalHelpers = require('./helpers/general');
const dateHelpers = require("./helpers/dates");

module.exports = function(eleventyConfig) {
  
  // Rss
  eleventyConfig.addPlugin(pluginRss);
  
  // Merge data in .json files in diretories with data in each file
  eleventyConfig.setDataDeepMerge(true);
  
  // Create postsReversed tag with posts tag in reverse order
  eleventyConfig.addCollection("postsReversed", function(collection) {
   return collection.getFilteredByTag("posts").reverse();
  });
  
  
  // Shortcodes/Helpers:
  eleventyConfig.addShortcode("readableDate", dateHelpers.readableDate);
  eleventyConfig.addShortcode("previewText", generalHelpers.previewText);
  eleventyConfig.addShortcode("eq", generalHelpers.eq);
  
  return {
    dir: {
      input: "build",
      output: "dist"
    },
    templateFormats: [
      'md',
      'css',
      'js',
      'hbs',
      'njk',
      'jpeg',
      'jpg',
      'png',
      'gif'
    ]
  }
};