import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped, rowGappedAround } from 'universal/components/themes/flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';


class ActivityItem extends Component {
    constructor(props) {
        super(props);
        /* 
        userPhoto,
        userName,
        postImage,
        comment,
        type:
        - like
        - comment
        - mention
        - followingYou
        - friendToFollow
        imageTarget
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
                    <div style={{width: 50}}>
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage={this.props.userPhoto}
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginRight: 28
                            }}
                        >
                        </ImageBackground>
                    </div>
                    <div style={{flex: 'auto'}}>
                        <div>
                            { this.props.type !== 'friendToFollow' &&
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
                            }
                            <span style={{
                                display: 'inline',
                                fontWeight: 'normal',
                                fontSize: 14,
                                lineHeight: 1,
                                marginRight: 5
                            }}>
                                { this.props.type === 'like' &&
                                    <span> liked your photo.</span>
                                }
                                { this.props.type === 'comment' &&
                                    <span>
                                        commented:
                                        <span style={{
                                            display: 'inline',
                                            fontWeight: 'normal',
                                            fontSize: 14,
                                            lineHeight: 1,
                                            marginLeft: 5,
                                            marginRight: 5
                                        }}>
                                            { this.props.comment }
                                        </span>
                                    </span>
                                }
                                { this.props.type === 'mention' &&
                                    <span>  mentioned you in a comment:
                                        <span style={{
                                            display: 'inline',
                                            fontWeight: 'normal',
                                            fontSize: 14,
                                            lineHeight: 1,
                                            marginLeft: 5,
                                            marginRight: 5
                                        }}>
                                            { this.props.comment }
                                        </span>
                                    </span>
                                }
                                { this.props.type === 'followYou' &&
                                    <span> started following you.</span>
                                }
                                { this.props.type === 'friendToFollow' &&
                                    <span>{`Your Facebook friend ${this.props.otherName} is on Instagram as `}</span>
                                }
                            </span>
                            { this.props.type === 'friendToFollow' &&
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
                            }
                            <span style={{
                                display: 'inline',
                                fontWeight: 'normal',
                                fontSize: 14,
                                lineHeight: 1,
                                marginRight: 5,
                                color: '#999'
                            }}>
                                2h
                            </span>
                        </div>
                    </div>
                    <div style={{justifyContent: 'flex-end', marginLeft: 10}}>
                        {
                            ( this.props.type === 'like' ||
                            this.props.type === 'comment' ||
                            this.props.type === 'mention' )
                            &&
                            <ImageBackground
                                theme={imageBackgroundTheme.coverCenter}
                                backgroundImage={this.props.postImage}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            >
                            </ImageBackground>
                        }
                        {
                            ( this.props.type === 'followYou' ||
                            this.props.type === 'friendToFollow' )
                            &&
                        <div>
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
                    }
                    </div>
                </Flexbox>
                <Flexbox theme={rowGapped} style={{
                    alignItems: 'center'
                }}>
                    <div style={{width: 60}}>
                    </div>
                    <div
                        style={{
                            flex: 'auto',
                            backgroundColor: '#efefef',
                            height: 1,
                            width: 'auto'
                        }}
                    ></div>
                </Flexbox>
                
            </div>
        )
    }
}

export default ActivityItem;