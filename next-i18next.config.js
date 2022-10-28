// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  debug: process.env.NODE_ENV === "development",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  localePath: path.resolve(__dirname, "public", "locales"),
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "en",
  },
};
