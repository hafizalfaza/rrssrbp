/* @flow */

import universal from 'react-universal-component'

import { LoadingPage } from 'universal/pages/LoadingPage/LoadingPage'

export default universal(() => import('./LoginPage'), { loading: LoadingPage })
