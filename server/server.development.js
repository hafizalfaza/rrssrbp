/* globals */
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
if (!process.env.SERVER_HOST) process.env.SERVER_HOST = 'localhost'
if (!process.env.SERVER_PORT) process.env.SERVER_PORT = 8888

const express = require('express')

const webpack = require('webpack')

const proxy = require('express-http-proxy');

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const webpackClientConfig = require('../tools/webpack/client.development.config.webpack')
const webpackServerConfig = require('../tools/webpack/server.development.config.webpack')

const webpackCompiler = webpack([webpackClientConfig, webpackServerConfig])
const [webpackClientCompiler, webpackServerCompiler] = webpackCompiler.compilers

const server = express()

server.disable('x-powered-by')

server.use(webpackDevMiddleware(webpackCompiler))
server.use(webpackHotMiddleware(webpackClientCompiler))
server.use(webpackHotServerMiddleware(webpackCompiler))

server.use('/api', proxy('localhost:3000', {
  proxyReqOptDecorator(opts){
    opts.header['x-forwarded-host'] = 'localhost:8888';
    return opts;
  }
}))

let __BUILD_COMPLETE__ = false

webpackCompiler.plugin(
  'done',
  () =>
    !__BUILD_COMPLETE__ &&
    server.listen(process.env.SERVER_PORT, error => {
      if (error) {
        console.error(error)
      } else {
        __BUILD_COMPLETE__ = true
        console.log(
          `Server listening at http://${process.env.SERVER_HOST}:${
            process.env.SERVER_PORT
          }`,
        )
      }
    }),
)
