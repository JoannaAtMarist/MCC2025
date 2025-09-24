// .eleventy.js

export default function (eleventyConfig) {

  // Copy everything in /public/ to the site root
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Copy assets folder to /assets/
  eleventyConfig.addPassthroughCopy("assets");

  // Auto-link "TechMeet" mentions
  eleventyConfig.addFilter("linkTechMeet", function (content) {
    const url = this.ctx.techmeet_url || "https://bit.ly/mhvtm-2025";
    return content.replace(
      /\b(MHV\s*TechMeet|TechMeet)\b/g,
      `<a href="${url}" target="_blank" rel="noopener noreferrer">$1</a>`
    );
  });

  // Auto-link "New Era Technologies" mentions
  eleventyConfig.addFilter("linkNewEra", function (content) {
    const url = this.ctx.newera_url || "https://www.neweratech.com/us/";
    return content.replace(
      /\b(New\s*Era\s*Technologies|New\s*Era)\b/g,
      `<a href="${url}" target="_blank" rel="noopener noreferrer">$1</a>`
    );
  });


  return {
    dir: {
      input: "src",        // your main content lives in /src
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/MCC2025/"   // url adds /MCC2025/ on GitHub Pages
  };
}

