const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const styles = [];      // array of styles to bundle in main
const scripts = [];


module.exports = {
  devtool: 'source-map',
  entry: './src/main.ts',
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader',
          query: {
            useForkChecker: true,
            tsconfig: path.resolve('./src/tsconfig.json')
          }
        }]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/
      },
      // in main, load css as raw text
      {
        exclude: styles,
        test: /\.css$/,
        loaders: ['raw-loader', 'postcss-loader']
      },
      {
        exclude: styles,
        test: /\.scss$|\.sass$/,
        loaders: ['raw-loader', 'postcss-loader','sass-loader']
      },

      // outside of main, load in via style-loader
      {
        include: styles,
        test: /\.css$/,
        exclude: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        include: styles,
        test: /\.scss$|\.sass$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },

      // load global scripts using script-loader
      { include: scripts, test: /\.js$/, loader: 'script-loader' },

      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(jpg|png|gif)$/, loader: 'url-loader?limit=10000' },
      { test: /\.html$/, loader: 'html-loader' },

      { test: /\.(otf|woff|ttf|svg)$/, loader: 'url?limit=10000' },
      { test: /\.woff2$/, loader: 'url?limit=10000&mimetype=font/woff2' },
      { test: /\.eot$/, loader: 'file' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['styles', 'scripts', 'main'].reverse()
    }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      name: 'inline',
      filename: 'inline.js',
      sourceMapFilename: 'inline.map'
    }),
    new CopyWebpackPlugin({
      context: path.resolve('./src/assets'),
      from: { glob: '**/*', dot: true },
      ignore: ['.gitkeep'],
      to: path.resolve('./dist/assets')
    })
  ],
  node: {
    fs: 'empty',
    global: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}