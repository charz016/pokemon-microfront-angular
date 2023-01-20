const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mf-pokedex",

  exposes: {
    "./PokedexModule": "./projects/mf-pokedex/src/app/modules/pokemon/pokemon.module.ts",
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
