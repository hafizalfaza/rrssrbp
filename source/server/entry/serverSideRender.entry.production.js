/* @flow */

import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import ServerApp from 'server/App'

import Html from 'server/components/Html'

export const serverSideRender = ({ clientStats }: { clientStats: Object }) => (
  req: ?express$Request,
  res: ?express$Response,
) => {
  if (clientStats == undefined) return
  if (req == undefined) return
  if (res == undefined) return

  const context = {}

  const stream = renderToNodeStream(
    <Html clientStats={clientStats}>
      <StaticRouter context={context} location={req.url}>
        <ServerApp />
      </StaticRouter>
    </Html>,
  )

  res.type('html')

  res.write('<!doctype html>')

  stream.pipe(res)
}

export default serverSideRender
