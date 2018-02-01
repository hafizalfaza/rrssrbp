/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { loadData as homePageLoadData } from '../pages/HomePage/HomePage'
import { loadData as profilePageLoadData} from '../pages/ProfilePage/ProfilePage'
import { loadData as activityPageLoadData } from '../pages/ActivityPage/ActivityPage'
import { loadData as explorePageLoadData } from '../pages/ExplorePage/ExplorePage'
import { loadData as explorePeoplePageLoadData } from '../pages/ExplorePeoplePage/ExplorePeoplePage'
import { loadData as createPageLoadData } from '../pages/CreatePage/CreatePage'

import IndexPage from 'universal/pages/IndexPage'
import LoadingPage from 'universal/pages/LoadingPage'
import TestPage from 'universal/pages/TestPage'
import NotFoundPage from 'universal/pages/NotFoundPage'
import HomePage from 'universal/pages/HomePage'
import ProfilePage from 'universal/pages/ProfilePage'
import ActivityPage from 'universal/pages/ActivityPage'
import ExplorePage from 'universal/pages/ExplorePage'
import ExplorePeoplePage from 'universal/pages/ExplorePeoplePage'
import CreatePage from 'universal/pages/CreatePage'

export const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    loadData: homePageLoadData
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
    path: '/activity',
    component: ActivityPage,
    exact: true,
    loadData: activityPageLoadData
  },
  {
    path: '/explore',
    component: ExplorePage,
    exact: true,
    loadData: explorePageLoadData
  },
  {
    path: '/explore/people',
    component: ExplorePeoplePage,
    exact: true,
    loadData: explorePeoplePageLoadData
  },
  {
    path: '/create',
    component: CreatePage,
    exact: true,
    loadData: createPageLoadData
  },
  {
    component: NotFoundPage,
  }
]

export const Routes = () => (
  <div style={{width: '100%'}}>
    {renderRoutes(routes)}
  </div>
)

export default Routes
