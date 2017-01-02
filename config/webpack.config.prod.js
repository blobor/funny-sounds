const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.config.common')

module.exports = Object.assign(commonConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/audio',
        to: 'audio'
      }
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js"
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})