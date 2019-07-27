const merge = require("webpack-merge");
const base = require("./webpack.base.config");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

module.exports = merge(base, {
  entry: {
    app: "./src/entry-client.js"
  },
  output: {
    publicPath: "/dist/",
    filename: "client-bundle.js"
  },
  plugins: [new VueSSRClientPlugin()]
});
