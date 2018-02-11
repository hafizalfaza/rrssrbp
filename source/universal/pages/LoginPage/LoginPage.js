import React, { Component } from 'react';
import Flexbox from '../../components/Flexbox';
import { rowGapped, columnCentered } from '../../components/themes/Flexbox';
import img from './instagram.png';

class LoginPage extends Component {

  state = {
    username: '',
    password: ''
  }


  onSubmitLogin(e){
    e.preventDefault();
  }

  onTyping(e){
    this.setState({[e.target.name]: e.target.value})
  }


  render(){

    const {username, password} = this.state;

    return (
      <div>
        <Flexbox theme={columnCentered} align="center" style={{marginTop: '10px'}}>
          <img src={img} style={{width: '180px', margin: '22px auto 12px'}} alt="" />
            <div style={{width: '100%'}}>
        
              <span style={{display: 'block', position: 'relative', margin: '8px 40px'}}>
                <button style={{textAlign: 'center', background: '#3897f0', border: '1px #3897f0 solid', borderRadius: '3px', fontSize: '14px', fontWeight: '600', color: 'white', width: '100%', lineHeight: '26px'}}
                onClick={() => {this.onClickLogin('login')}}>Log in with Facebook</button>
              </span>

              <Flexbox theme={rowGapped} align="center" style={{margin: '0 40px 22px'}}>
                <div style={{backgroundColor: '#efefef', height: '1px', flexGrow: '1', flexShrink: '1'}}></div>
                <div style={{textAlign: 'center', textTransform: 'uppercase', color: '#999', margin: '0 18px', fontSize: '13px'}}>or</div>
                <div style={{backgroundColor: '#efefef', height: '1px', flexGrow: '1', flexShrink: '1'}}></div>
              </Flexbox>

              <form onSubmit={(e) => this.onSubmitLogin(e)}>
                <div style={{margin: '0 40px 6px'}}>
                  <input style={{width: '100%', display: 'block', fontSize: '12px', lineHeight: '18px'}} type="text" name="username" value={username} placeholder="username" onChange={(e) => this.onTyping(e)}/>
                </div>
                <div style={{margin: '0 40px 6px', fontSize: '12px'}}>
                  <input style={{width: '100%', fontSize: '12px', lineHeight: '18px'}} type="password" name="password" value={password} placeholder="password" onChange={(e) => this.onTyping(e)}/>
                </div>

                <span style={{margin: '0 40px 22px', display: 'block', position: 'relative'}}>
                  <button type="submit" style={{textAlign: 'center', background: '#3897f0', border: '1px #3897f0 solid', borderRadius: '3px', fontSize: '14px', fontWeight: '600', color: 'white', width: '100%', lineHeight: '26px'}}
                  >Log In</button>
                </span>
                
              </form>

              
              
              
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

export default LoginPage;