import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleShadowBlock } from 'universal/actions/uiAction';

class MainModal extends Component {

  toggleShadowBlock(){
    this.props.toggleShadowBlock()
  }

  render(){
    const { shadowBlockActive } = this.props;

    return (
      <div style={{position: 'absolute', top:0, left: 0, width: '100%', height: '100%',  display: shadowBlockActive ? 'block' : 'none'}}>
        <div style={{position: 'relative', width: '100%', height: '100%'}}>
          <div onClick={() => this.toggleShadowBlock()} style={{position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%'}}></div>
          
          <div style={{position: 'absolute', bottom: 0, width: '100%'}}>
            <ul>
              <li >
                <button style={{backgroundColor: 'white', textAlign: 'center', color: '#262626', lineHeight: '50px', width: '100%'}}>Go to Post</button>
              </li>
              <li >
                <button style={{backgroundColor: 'white', textAlign: 'center', color: '#262626', lineHeight: '50px', width: '100%'}}>Report Inappropriate</button>
              </li>
              <li >
                <button style={{backgroundColor: 'white', textAlign: 'center', color: '#262626', lineHeight: '50px', width: '100%'}}>Cancel</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    shadowBlockActive: state.ui.shadowBlockActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShadowBlock: () => {dispatch(toggleShadowBlock())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);