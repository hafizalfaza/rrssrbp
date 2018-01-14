/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import Routes from 'universal/Routes'

import Page from 'universal/components/Page'

import ActionBar from 'universal/components/UI/ActionBar'
import NavBar from 'universal/components/UI/NavBar'

export const App = () => (
  <Page>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700" rel="stylesheet"/>
    </Helmet>
    <ActionBar />
    <div style={{height: 'calc(100vh - 88px)', overflowY: 'auto'}}>
      <Routes />
    </div>
    <NavBar/>
  </Page>
)

export default App
