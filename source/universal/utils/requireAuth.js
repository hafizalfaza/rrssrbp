import React, { Component } from 'react';
import LandingPage from 'universal/pages/LandingPage';
import { connect } from 'react-redux';
import { checkAuth } from 'universal/actions/authAction';
import { withRouter } from 'react-router-dom'

const requireAuth = (Component) => {
  class AuthenticatedComponent extends Component {
    
    componentWillMount() {
      this.props.checkAuth(false);
    }

    render() {
      if(!this.props.auth.isLoggedIn) return <LandingPage />
      
      return <Component {...this.props} />
    }

  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      checkAuth: (isLoggedIn) => {dispatch(checkAuth(isLoggedIn))}
    }
  }

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent));
    
}

export default requireAuth;