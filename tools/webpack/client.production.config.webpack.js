/* @flow */

const resolvePath = path => require('path').resolve(__dirname, path)

const webpack = require('webpack')

const webpackClientConfig = {
  devtool: 'source-map',
  entry: {
    main: [
      resolvePath(
        '../../source/client/entry/clientSideRender.entry.production.js',
      ),
    ],
    vendor: [
      'polished',
      'raf/polyfill',
      'react',
      'react-dom',
      'react-helmet',
      'react-router-dom',
      'react-universal-component',
      'styled-components',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'babel-plugin-universal-import',
            ['babel-plugin-styled-components', { ssr: true }],
          ],
          presets: [['env', { modules: false }], 'flow', 'react', 'stage-0'],
        },
      },
      {
        test: /\.(gif|ico|jpg|png|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  name: 'client',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: resolvePath('../../client/production'),
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'],
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      minChunks: Infinity,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        REACT_CONTAINER_ID: JSON.stringify('react-container'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  resolve: {
    extensions: ['.js'],
    modules: [resolvePath('../../source'), 'node_modules'],
  },
  target: 'web',
}

module.exports = webpackClientConfig
