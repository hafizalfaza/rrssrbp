/* @flow */

import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux';
import { usersAction } from '../../actions/usersAction';
import { loadUser } from '../../actions/usersAction';

import Page from 'universal/components/Page'
import Center from 'universal/components/Center'
import Text from 'universal/components/Text'
import Flexbox from 'universal/components/Flexbox'

export const IndexPage = (props) => {
  // console.log(window)
  return (
    <Page backgroundColor={'#03A9F4'}>
      <Helmet>
        <title>Index Page</title>
      </Helmet>
      <Center>
        <Text fontSize={'10vw'}>Index Page</Text>
      </Center>
      <Center>
        <Link to={'/not-found'}>
          <Text fontSize={'5vw'}>Go to Not Found Page</Text>
        </Link>
        <button onClick={() => props.usersAction()}>click me</button>
        <div>{props.users.test}</div>
      </Center>
      <Flexbox backgroundColor="red"></Flexbox>
    </Page>
  )
}


export function loadData(store){
  console.log('LOAD DATA')
  store.dispatch(loadUser());
}


function mapStateToProps(state){
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    usersAction: () => {dispatch(usersAction())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
