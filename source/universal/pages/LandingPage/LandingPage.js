import React, { Component } from 'react';
import Flexbox from '../../components/Flexbox';
import { rowGapped, columnCentered } from '../../components/themes/Flexbox';
import img from './instagram.png';
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';  
import { connect } from 'react-redux';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state =  {
        landingPageState: ''
      }
  }


  onClickLogin = (landingPageState) => {
    this.setState({landingPageState})
  }

  onClickSignup = (landingPageState) => {
  
    this.setState({landingPageState})
  }

  render(){
    const { landingPageState } = this.state;

    console.log(this.props);

    if(landingPageState === 'login'){
      return <LoginPage />
    }else if(landingPageState === 'signup'){
      return <SignupPage />
    }else{
      return (
        <div>
          <Flexbox theme={columnCentered} align="center" style={{marginTop: '60px'}}>
            <img src={img} style={{width: '180px', margin: '22px auto 12px'}} alt="" />
              <div>
                <div style={{textAlign: 'center', color: '#999', fontSize: '14px', margin: '0 40px 22px'}}>Sign up to see photos and videos from your friends.</div>
                <span style={{margin: '0 40px 22px', display: 'block', position: 'relative'}}>
                  <button style={{textAlign: 'center', background: '#3897f0', border: '1px #3897f0 solid', borderRadius: '3px', fontSize: '14px', fontWeight: '600', color: 'white', width: '100%', lineHeight: '26px'}}
                  onClick={() => {this.onClickLogin('login')}}>Log In</button>
                </span>
                <Flexbox theme={rowGapped} align="center" style={{margin: '0 40px 22px'}}>
                  <div style={{backgroundColor: '#efefef', height: '1px', flexGrow: '1', flexShrink: '1'}}></div>
                  <div style={{textAlign: 'center', textTransform: 'uppercase', color: '#999', margin: '0 18px', fontSize: '13px'}}>or</div>
                  <div style={{backgroundColor: '#efefef', height: '1px', flexGrow: '1', flexShrink: '1'}}></div>
                </Flexbox>
                
                <span onClick={() => {this.onClickLogin('signup')}}>
                  <button style={{textAlign: 'center', border: 'none', width: '100%', fontSize: '14px', fontWeight: '600', color: '#3897f0', backgroundColor: 'transparent'}}
                    >Sign up with email or phone number</button>
                </span>
              </div>
          </Flexbox>
        </div>
      )
    }
  }
}


export default LandingPage;