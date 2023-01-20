const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mf-poke-box",

  exposes: {
    "./PokeBoxModule":
      "./projects/mf-poke-box/src/app/modules/pokemon-box/pokemon-box.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
  
  sharedMappings: ["@commons-lib"],
});
