import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import flexboxTheme from 'universal/components/themes/Flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';

class ProfilePage extends Component {

    render(){
        return (
            <div>
                <Flexbox theme={flexboxTheme.rowGapped} style={{
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
                        <div style={{
                            marginBottom: 12
                        }}>
                            <h1 style={{
                                fontSize: 18,
                                lineHeight: 1
                            }}>
                                SomeAwesomeName
                            </h1>
                        </div>
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
                    padding: '0 16px 25px',
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
                        marginRight: 5
                    }}>
                        Full Name 
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
                    textDecoration: 'none'}}>instagram.com</a></div>
                </div>
                <div style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#efefef'
                }}></div>
                <Flexbox theme={flexboxTheme.rowGappedAround} style={{
                    padding: 16
                }}>
                    <div>
                        <span style={{
                            textAlign: 'center',
                            color: '#999'
                        }}>
                        <span style={{
                            color: '#262626',
                            fontWeight: 800,
                            display: 'block',
                            fontSize: 18
                        }}>
                        234
                        </span>
                        posts
                        </span>
                    </div>
                    <div>
                        <span style={{
                            textAlign: 'center',
                            color: '#999'
                        }}>
                        <span style={{
                            color: '#262626',
                            fontWeight: 800,
                            display: 'block',
                            fontSize: 18
                        }}>
                        1334
                        </span>
                        followers
                        </span>
                    </div>
                    <div>
                        <span style={{
                            textAlign: 'center',
                            color: '#999'
                        }}>
                        <span style={{
                            color: '#262626',
                            fontWeight: 800,
                            display: 'block',
                            fontSize: 18
                        }}>
                        115
                        </span>
                        following
                        </span>
                    </div>
                </Flexbox>
                <div style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#efefef'
                }}></div>
                <Flexbox theme={flexboxTheme.rowGappedAround} style={{
                    padding: 16
                }}>
                    <div>
                        <svg style={{width: '18px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.333 341.333"><g fill="#b0b0b0"><path d="M128 128h85.333v85.333H128zM0 0h85.333v85.333H0zM128 256h85.333v85.333H128zM0 128h85.333v85.333H0zM0 256h85.333v85.333H0zM256 0h85.333v85.333H256zM128 0h85.333v85.333H128zM256 128h85.333v85.333H256zM256 256h85.333v85.333H256z"/></g></svg>
                    </div>
                    <div>
                        <svg style={{width: '22px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><g fill="#b0b0b0"><path d="M8 0v46l15-12 15 12V0H8zm28 42L23 31 10 42V2h26v40z"/></g></svg>
                    </div>
                </Flexbox>



                <Flexbox theme={flexboxTheme.rowGapped} style={{
                    width: '100%',
                    padding: '0',
                    flexWrap: 'wrap'
                }}>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                <div style={{
                  width: '33%'
                }}>
                  <ImageBackground
                      theme={imageBackgroundTheme.coverCenter}
                      backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                      style={{width: '100%', paddingBottom: '100%',
                      marginBottom: '1.5%'}}
                  >
                  </ImageBackground>
                </div>
                </Flexbox>



                {/*
                <Flexbox theme={flexboxTheme.rowGappedAround} style={{
                    padding: '0 16px'
                }}>
                    <div style={{
                      flex: 1,
                      height: 120,
                      margin: 1
                    }}>
                      <ImageBackground
                          theme={imageBackgroundTheme.coverCenter}
                          backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                          style={{width: '100%', paddingBottom: '100%'}}
                      >
                      </ImageBackground>
                    </div>
                    <div style={{
                      flex: 1,
                      height: 120,
                      margin: 1
                    }}>
                      <ImageBackground
                          theme={imageBackgroundTheme.coverCenter}
                          backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                          style={{width: '100%', paddingBottom: '100%'}}
                      >
                      </ImageBackground>
                    </div>
                    <div style={{
                      flex: 1,
                      height: 120,
                      margin: 1
                    }}>
                      <ImageBackground
                          theme={imageBackgroundTheme.coverCenter}
                          backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                          style={{width: '100%', paddingBottom: '100%'}}
                      >
                      </ImageBackground>
                    </div>
                </Flexbox>
                <Flexbox theme={flexboxTheme.rowGappedAround} style={{
                    padding: 16
                }}>
                    <div style={{
                      flex: 1,
                      height: 120,
                      margin: 1
                    }}>
                      <ImageBackground
                          theme={imageBackgroundTheme.coverCenter}
                          backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                          style={{width: '100%', paddingBottom: '100%'}}
                      >
                      </ImageBackground>
                    </div>
                    <div style={{
                      flex: 1,
                      height: 120,
                      margin: 1
                    }}>
                      <ImageBackground
                          theme={imageBackgroundTheme.coverCenter}
                          backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                          style={{width: '100%', paddingBottom: '100%'}}
                      >
                      </ImageBackground>
                    </div>
                    <div style={{
                      flex: 1,
                      height: 120,
                      margin: 1
                    }}>
                      <ImageBackground
                          theme={imageBackgroundTheme.coverCenter}
                          backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg"
                          style={{width: '100%', paddingBottom: '100%'}}
                      >
                      </ImageBackground>
                    </div>
                </Flexbox>
                */}

            </div>
        )
    }

}

export default ProfilePage;
