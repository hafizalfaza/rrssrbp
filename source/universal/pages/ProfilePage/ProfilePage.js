import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped, rowGappedAround } from 'universal/components/themes/Flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';
import { loadImagesData } from 'universal/actions/imagesAction';
import { connect } from 'react-redux';
import { changeActionBar } from 'universal/actions/actionBarAction';

const styles = {
    dataAnchor: {
        fontSize: 14,
        textDecoration: 'none'
    },
    dataText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 14,
        lineHeight: 1.25
    },
    dataNumber: {
        color: '#262626',
        fontWeight: 800,
        display: 'block',
        fontSize: 16
    }
}



class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: 'posts'
        };
    }

    componentDidMount() {
        this.props.loadImagesData();
    }

    changeGrid = (gridType) => {
        this.setState({grid: gridType});
    }

    render(){
        return (
            <div style={{backgroundColor: '#fafafa'}}>
                <Flexbox theme={rowGapped} style={{
                    padding: '30px 16px 20px'
                }}>
                    <div style={{flex: 1}}>
                        <ImageBackground
                            theme={imageBackgroundTheme.coverCenter}
                            backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                            style={{
                                width: 77,
                                height: 77,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginRight: 28
                            }}
                        >
                        </ImageBackground>
                    </div>
                    <div style={{flex: 3}}>
                        <Flexbox align="center">
                            <h1 style={{
                                fontSize: 18,
                                lineHeight: 1
                            }}>
                                saladinid
                            </h1>
                            <div style={{
                                padding: 7
                            }}>
                                <a href="#">
                                    <svg style={{width: '16px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.703 478.703"><path d="M454.2 189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2a29.54 29.54 0 0 0-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6a29.54 29.54 0 0 0-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6a29.54 29.54 0 0 0 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6a29.54 29.54 0 0 0 24.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8l-29.8-29.8c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z"/><path d="M239.4 136.001c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3-46.3-103.3-103.3-103.3zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z"/></svg>
                                </a>
                            </div>
                        </Flexbox>
                        <div>
                            <a style={{
                                color: '#003569',
                                textDecoration: 'none'
                            }}>
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
                                }}>Edit Profile</button>
                            </a>
                        </div>
                    </div>
                </Flexbox>
                <div style={{
                    padding: '0 16px 15px',
                    textDecoration: 'none',
                    fontSize: 14,
                    lineHeight: 1
                }}>
                    <div>
                    <h1 style={{
                        display: 'inline',
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: 1,
                        marginRight: 5,
                        lineHeight: 1
                    }}>
                        Instagram Clone
                    </h1>
                    <span style={{
                        display: 'inline',
                        fontWeight: 'normal',
                        fontSize: 14,
                        lineHeight: 1,
                        marginRight: 5
                    }}>
                        tulisan panjang banget polpolan
                    </span>
                    </div>
                    <div><a href="#" style={{
                    textDecoration: 'none',
                    lineHeight: 1.75}}>instagram.com</a></div>
                </div>
                <div style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#efefef'
                }}></div>
                <Flexbox theme={rowGappedAround} style={{
                    padding: 12
                }}>
                    <div>
                        <a href="#" style={styles.dataAnchor}>
                            <span style={styles.dataText}>
                                <span style={styles.dataNumber}>
                                234
                                </span>
                            posts
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href="#" style={styles.dataAnchor}>
                            <span style={styles.dataText}>
                                <span style={styles.dataNumber}>
                                1334
                                </span>
                            followers
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href="#" style={styles.dataAnchor}>
                            <span style={styles.dataText}>
                                <span style={styles.dataNumber}>
                                115
                                </span>
                            following
                            </span>
                        </a>
                    </div>
                </Flexbox>
                <div style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#efefef'
                }}></div>
                <Flexbox theme={rowGappedAround} style={{
                    padding: 16
                }}>
                    <div>
                        <a href="#" onClick={this.changeGrid.bind(this, 'posts')}>
                            <svg style={{width: '18px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.333 341.333"><g fill="#b0b0b0"><path d="M128 128h85.333v85.333H128zM0 0h85.333v85.333H0zM128 256h85.333v85.333H128zM0 128h85.333v85.333H0zM0 256h85.333v85.333H0zM256 0h85.333v85.333H256zM128 0h85.333v85.333H128zM256 128h85.333v85.333H256zM256 256h85.333v85.333H256z"/></g></svg>
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={this.changeGrid.bind(this, 'saved')}>
                            <svg style={{width: '22px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><g fill="#b0b0b0"><path d="M8 0v46l15-12 15 12V0H8zm28 42L23 31 10 42V2h26v40z"/></g></svg>
                        </a>
                    </div>
                </Flexbox>
                { this.state.grid === 'posts' &&
                <Flexbox theme={rowGapped} style={{
                    width: '100%',
                    padding: '0',
                    flexWrap: 'wrap'
                }}>
                {this.props.images.map((x, i) => {
                    return (<div key={i} style={{
                        width: '33%'
                      }}>
                        <a href="#">
                            <ImageBackground
                                theme={imageBackgroundTheme.coverCenter}
                                backgroundImage={x.image}
                                style={{width: '100%', paddingBottom: '100%',
                                marginBottom: '1.5%'}}
                            >
                            </ImageBackground>
                        </a>
                      </div>)
                })}
                </Flexbox>
                }
                { this.state.grid === 'saved' &&
                <div>
                <div style={{
                    WebkitBoxAlign: 'center',
                    WebkitAlignItems: 'center',
                    MsFlexAlign: 'center',
                    alignAtems: 'center',
                    margin: '16px auto',
                    color: '#999',
                    fontSize: 12,
                    fontWeight: 400,
                    textAlign: 'center',
                    display: 'block'
                }}>
                Only you can see what you've saved
                </div>
                <Flexbox theme={rowGapped} style={{
                    width: '100%',
                    padding: '0',
                    flexWrap: 'wrap'
                }}>
                {this.props.images.map((x, i) => {
                    return (<div key={i} style={{
                        width: '33%'
                      }}>
                        <a href="#">
                            <ImageBackground
                                theme={imageBackgroundTheme.coverCenter}
                                backgroundImage={x.image}
                                style={{width: '100%', paddingBottom: '100%',
                                marginBottom: '1.5%'}}
                            >
                            </ImageBackground>
                        </a>
                      </div>)
                })}
                </Flexbox>
                </div>
                }
            </div>
        )
    }

}

export function loadData(store, req){
    store.dispatch(changeActionBar(req.url))
    store.dispatch(loadImagesData())
}

const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loadImagesData: () => {dispatch(loadImagesData())}
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ProfilePage);
