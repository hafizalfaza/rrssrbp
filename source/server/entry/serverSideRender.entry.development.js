/* @flow */

import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import { routes } from '../../universal/Routes/Routes';

import ServerApp from 'server/App'

import Html from 'server/components/Html'


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../universal/reducers/index';

const store = createStore(reducers, {}, applyMiddleware(thunk))

export const serverSideRender = ({ clientStats }: { clientStats: Object }) => (
  req: ?express$Request,
  res: ?express$Response,
) => {
  if (clientStats == undefined) return
  if (req == undefined) return
  if (res == undefined) return

  const context = {}


  const promises = matchRoutes(routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    
    const stream = renderToNodeStream(
      <Html clientStats={clientStats} store={store}>
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <ServerApp />
          </StaticRouter>
        </Provider>
      </Html>,
    )
  
    res.type('html')
  
    res.write('<!doctype html>')
  
    stream.pipe(res)

  })
  
}

export default serverSideRender
