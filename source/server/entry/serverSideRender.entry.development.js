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
import {combinedReducers} from '../../universal/reducers/index';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink, HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getDataFromTree } from "react-apollo"


const store = createStore(combinedReducers, {}, applyMiddleware(thunk))

export const serverSideRender = ({ clientStats }) => (
  req,
  res
) => {
  if (clientStats == undefined) return
  if (req == undefined) return
  if (res == undefined) return

  const context = {}

  const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'http://localhost:3000/graphql', 
      fetch: fetch,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache()
  });

  const promises = matchRoutes(routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store, req) : null
  })

  


Promise.all(promises).then(() => { 

  const App = (<Provider store={store}>
                <ApolloProvider client={client}>
                  <StaticRouter context={context} location={req.url}>
                    <ServerApp />
                  </StaticRouter>
                </ApolloProvider>
              </Provider>);


  getDataFromTree(App).then(() => {
    
    const apolloInitialState = client.extract();

    console.log('apolloinitialstate ', apolloInitialState)
  
    const stream = renderToNodeStream(
      <Html clientStats={clientStats} store={store} apolloInitialState={apolloInitialState}>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <StaticRouter context={context} location={req.url}>
              <ServerApp />
            </StaticRouter>
          </ApolloProvider>
        </Provider>
      </Html>,
    )
  
    res.type('html')
  
    res.write('<!doctype html>')
  
    stream.pipe(res)
  });
})

}

export default serverSideRender
