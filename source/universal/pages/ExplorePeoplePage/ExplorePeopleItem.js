import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped, rowGappedAround } from 'universal/components/themes/flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';


class ExplorePeopleItem extends Component {
    constructor(props) {
        super(props);
        /* 
        userPhoto,
        userName,
        userDescription,
        followStatus:
        - notFollowing
        - following
        */
    }
    render(){
        return (
            <div>
                
            <Flexbox theme={rowGapped} style={{
                alignItems: 'center',
                padding: '12px 16px'
            }}>
                <div style={{width: 70}}>
                    <ImageBackground
                        theme={imageBackgroundTheme.coverCenter}
                        backgroundImage={this.props.userPhoto}
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginRight: 28
                        }}
                    >
                    </ImageBackground>
                </div>
                <div style={{flex: 'auto'}}>
                    <div>
                        <h1 style={{
                            display: 'inline',
                            fontWeight: 600,
                            fontSize: 14,
                            lineHeight: 1,
                            marginRight: 5,
                            lineHeight: 1
                        }}>
                            { this.props.userName }
                        </h1>
                        </div>
                        <div>
                        <span style={{
                            display: 'inline',
                            fontWeight: 'normal',
                            fontSize: 14,
                            lineHeight: 1,
                            marginRight: 5,
                            color: '#999'
                        }}>
                            { this.props.userDescription }
                        </span>
                    </div>
                </div>
                <div style={{justifyContent: 'flex-end', marginLeft: 10}}>
                    {this.props.followingStatus === 'notFollowing' &&
                        <button style={{
                            padding: '0 8px',
                            cursor:'pointer',
                            background: '#3897f0',
                            borderColor: '#3897f0',
                            color: '#fff',
                            WebkitQppearance: 'none',
                            borderRadius: 3,
                            borderStyle: 'solid',
                            borderWidth: 1,
                            fontSize: 14,
                            fontWeight: 600,
                            lineHeight: 2.0,
                            outline: 'none',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '100%'
                        }}>Follow</button>
                    }
                    {this.props.followingStatus === 'following' &&
                        <button style={{
                            padding: '0 8px',
                            cursor:'pointer',
                            background: '0 0',
                            borderColor: '#dbdbdb',
                            color: '#262626',
                            WebkitQppearance: 'none',
                            borderRadius: 3,
                            borderStyle: 'solid',
                            borderWidth: 1,
                            fontSize: 14,
                            fontWeight: 600,
                            lineHeight: 2.0,
                            outline: 'none',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '100%'
                        }}>Following</button>
                    }
                </div>
            </Flexbox>

            </div>
        )
    }
}

export default ExplorePeopleItem;