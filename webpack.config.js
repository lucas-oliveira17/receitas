var webpack = require('webpack')

module.exports = {
    entry: {
      listeners: "./src/dom/listeners.js",
      pesquisa: "./src/dom/listenersPesquisa.js",
      cadastro: "./src/dom/listenersCadastro.js"
    },
    mode: "development",
    output: {
        filename: '[name].js'
      }
}