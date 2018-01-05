/* @flow */

const resolvePath = path => require('path').resolve(__dirname, path)

const webpack = require('webpack')

const webpackClientConfig = {
  devtool: 'eval',
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
      'react-hot-loader/patch',
      resolvePath(
        '../../source/client/entry/clientSideRender.entry.development.js',
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
            'react-hot-loader/babel',
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
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: resolvePath('../../client/development'),
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'],
      filename: '[name].js',
      chunkFilename: '[name].js',
      minChunks: Infinity,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        REACT_CONTAINER_ID: JSON.stringify('react-container'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js'],
    modules: [resolvePath('../../source'), 'node_modules'],
  },
  target: 'web',
}

module.exports = webpackClientConfig
