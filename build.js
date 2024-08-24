const StyleDictionary = require("style-dictionary");
const args = require("minimist")(process.argv.slice(2));
const theme = args.theme ? args.theme : "primary";

console.log(`🚧 Compiling tokens with the ${theme.toUpperCase()} theme`);

const getStyleDictionaryConfig = (theme) => {
  return {
    log: "warn",
    source: [
      "tokens/global/**/*.+(js|json)",
      `tokens/themes/${theme}/**/*.+(js|json)`,
    ],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: "dist/themes/",
        files: [
          {
            destination: `${theme}.css`,
            format: "css/variables",
            "options": {"outputReferences": true}
          },
        ],
      },
    },
  };
};

const StyleDictionaryExtended = StyleDictionary.extend(
  getStyleDictionaryConfig(theme)
);

StyleDictionaryExtended.buildAllPlatforms();