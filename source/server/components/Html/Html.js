/* @flow */

import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { injectGlobal, ServerStyleSheet } from 'styled-components'
import { normalize } from 'polished'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'

import faviconUrl from 'server/components/Html/images/favicon.ico'

export const Html = ({ children, clientStats, store }: Object) => {
  try {
    injectGlobal`${normalize()}`

    injectGlobal`
      html, body, #${process.env.REACT_CONTAINER_ID} {
        height: 100%;
  
        margin: 0;
  
        padding: 0;
  
        width: 100%;

        box-sizing: border-box;

        font-family: 'Noto Sans', sans-serif;

        color: 'black';
        
      }

      *, *:before, *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
    `

    const styleSheet = new ServerStyleSheet()

    styleSheet.collectStyles(renderToString(children))

    const helmet = Helmet.renderStatic()

    const htmlAttributes = helmet.htmlAttributes.toComponent()
    const bodyAttributes = helmet.bodyAttributes.toComponent()

    const base = helmet.base.toComponent()
    const link = helmet.link.toComponent()
    const meta = helmet.meta.toComponent()
    const noscript = helmet.noscript.toComponent()
    const script = helmet.script.toComponent()
    const style = helmet.style.toComponent()
    const title = helmet.title.toComponent()

    const chunkNames = flushChunkNames()

    const chunks: Object = flushChunks(clientStats, { chunkNames })

    const { CssHash, Js, Styles, scripts } = chunks

    return (
      <html {...htmlAttributes}>
        <head>
          {base}
          {link}
          {meta}
          {noscript}
          {script}
          {style}
          {title}
          <link rel={'shortcut icon'} href={faviconUrl} />
          {styleSheet.getStyleElement()}
          <Styles />
        </head>
        <body {...bodyAttributes}>
          <div id={process.env.REACT_CONTAINER_ID}>{children}</div>
          <script dangerouslySetInnerHTML={{__html: `window._INITIAL_STATE_ = ${JSON.stringify(store.getState())}`}}/>
          <CssHash />
          <Js />
        </body>
      </html>
    )
  } catch (error) {
    return null
  }
}

export default Html
