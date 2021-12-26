module.exports = (config) => ({
  map: config.dev === "development" ? { indline: false } : false,
  parser: config.file.extname === ".scss" ? "postcss-scss" : false,
  plugins: [
    require("postcss-import"),
    require("postcss-advanced-variables"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano")({ preset: "default" }),
  ],
});
