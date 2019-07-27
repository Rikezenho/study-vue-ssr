const { VueLoaderPlugin } = require("vue-loader");
const isProduction = process.env.NODE_ENV === 'production';
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

if (isProduction) {
  console.log('========= PRODUCTION MODE ===========');
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          isProduction
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: isProduction,
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    ...(
      isProduction
      ? [
        new MiniCssExtractPlugin({
          filename: 'style/[name].css'
        })
      ]
      : []
    )
  ]
};
