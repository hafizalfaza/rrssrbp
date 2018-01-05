/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { loadData } from '../pages/IndexPage/IndexPage';

import IndexPage from 'universal/pages/IndexPage'
import LoadingPage from 'universal/pages/LoadingPage'
import TestPage from 'universal/pages/TestPage'
import NotFoundPage from 'universal/pages/NotFoundPage'
import HomePage from 'universal/pages/HomePage'
import ProfilePage from 'universal/pages/ProfilePage'

export const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/loading',
    component: LoadingPage,
    exact: true
  },
  {
    path: '/test',
    component: TestPage,
    exact: true
  },
  {
    path: '/profile',
    component: ProfilePage,
    exact: true
  },
  {
    component: NotFoundPage,
  }
]

export const Routes = () => (
  <div style={{width: '100%', height:'100%'}}>
    {renderRoutes(routes)}
  </div>
)

export default Routes
