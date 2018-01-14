import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowAlignLeft, rowCentered, rowGapped } from 'universal/components/themes/flexbox';
import img from './instagram.png'
import {CameraIcon, AddUserIcon, SettingsIcon} from './ActionBarIcons';
import { changeActionBar } from 'universal/actions/actionBarAction';
import { connect } from 'react-redux';


class ActionBar extends Component {

    render(){

        const leftIcons = this.props.actionBar.leftIcons.map((leftIcon) => {
            switch(leftIcon){
                case 'camera':
                    return  <div key={new Date().toISOString()}><CameraIcon /></div>
                case 'settings':
                    return  <div key={new Date().toISOString()}><SettingsIcon /></div>
                default:
                    return <div  key={new Date().toISOString()}></div>
            }
        })


        const rightIcons = this.props.actionBar.rightIcons.map((rightIcon) => {
            switch(rightIcon){
                case 'add-user':
                    return    <div key={new Date().toISOString()}><AddUserIcon /></div>
                default:
                    return <div  key={new Date().toISOString()}></div>
            }
        })

        const {title} = this.props.actionBar;


        console.log(title);

        return (
            <div style={{position: 'relative', width: '100%', height: '44px'}}>
                <Flexbox theme={rowGapped} style={{width: '100%', height: '100%', padding: '0 20px', position: 'absolute'}} align="center">
                    <Flexbox theme={rowAlignLeft}>
                        <div>
                            {leftIcons.map((icon) => {
                                return icon
                            })}
                        </div>
                    </Flexbox>
                    <Flexbox theme={rowAlignLeft}>
                        <div>
                            {rightIcons.map((icon) => {
                                return icon
                            })}
                        </div>
                    </Flexbox>
                </Flexbox>
                <Flexbox  theme={rowCentered} align="center" style={{width: '100%', height: '100%'}}>
                    {title === 'instagram' ? <img src={img} style={{width: '100px'}} alt="" /> : title}
                </Flexbox>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        actionBar: state.actionBar
    }
}

export default connect(mapStateToProps)(ActionBar);