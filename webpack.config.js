var webpack = require('webpack')

module.exports = {
    entry: {
      pesquisa: "./src/dom/listenersPesquisa.js",
      cadastro: "./src/dom/listenersCadastro.js",
    },
    mode: "development",
    output: {
        filename: '[name].js'
      }
}