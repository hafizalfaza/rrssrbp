import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import ImageBackground from 'universal/components/ImageBackground';

// Components Themes

import flexboxTheme from 'universal/components/themes/Flexbox';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';

class NewsfeedItem extends Component {

    render(){
        return (
            <div>
                {/* header */}
                <Flexbox 
                    theme={flexboxTheme.rowGapped} 
                    align="center"
                    style={{padding: '12px', border: '1px black solid'}}
                >
                    <Flexbox 
                        theme={flexboxTheme.rowAlignLeft}
                    >
                        <ImageBackground 
                            theme={imageBackgroundTheme.coverCenter} 
                            backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg?auto=format%2Ccompress&fit=crop&h=360&ixlib=php-1.1.0&q=60&w=660"
                            style={{width: '40px', height: '40px'}}
                            round
                        >
                        </ImageBackground>
                        <Flexbox
                            theme={flexboxTheme.columnGapped}
                            style={{padding: '3px 10px'}}
                        >
                            <h2 style={{fontSize: '13px', fontWeight: '600'}}>
                                kevinsystrom
                            </h2>
                            <h3 style={{fontSize: '13px',  fontWeight: '400'}}>
                                New Zealand
                            </h3>
                        </Flexbox>
                    </Flexbox>
                    <div>...</div>
                </Flexbox>
                {/* ----------------------*/}

                {/* content */}

                <ImageBackground 
                    theme={imageBackgroundTheme.coverCenter} 
                    backgroundImage="https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/driving-in-new-zealand.jpg?focalpointx=50&focalpointy=50&height=440&outputformat=jpg&quality=75&source=2757411&transformationsystem=focalpointcrop&width=1280&securitytoken=10500ECA684FDFB552AD68F889927D1C"
                    style={{width: '100%', paddingBottom: '100%'}}
                >
                </ImageBackground>

                {/* ----------------------*/}
                <div style={{padding: '0 20px'}}>

                    {/* actions */}
                    <Flexbox
                        theme={flexboxTheme.rowGapped}
                        style={{padding: '15px 0 5px 0'}}
                    >
                        <Flexbox 
                            theme={flexboxTheme.rowAlignLeft}
                            >
                            <div style={{marginRight: '10px'}}>
                                <svg width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.997 51.997"><path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z"/></svg>
                            </div>
                            <div>
                                <svg width="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M55.232 43.104C58.354 38.745 60 33.705 60 28.5c0-14.888-13.458-27-30-27S0 13.612 0 28.5s13.458 27 30 27c4.262 0 8.378-.79 12.244-2.348 6.805 3.927 16.212 5.282 16.618 5.338a1 1 0 0 0 .846-1.697c-2.301-2.3-3.885-7.153-4.476-13.689zM42.84 51.182c-2.11-1.302-4.467-2.814-5.017-3.249a.998.998 0 0 0-1.337-.29 1.024 1.024 0 0 0-.492.861c-.003.589.006.77 4.081 3.316A30.706 30.706 0 0 1 30 53.5c-15.439 0-28-11.215-28-25s12.561-25 28-25 28 11.215 28 25c0 4.897-1.591 9.643-4.601 13.724a.995.995 0 0 0-.191.677c.35 4.174 1.238 9.49 3.44 13.16-3.334-.678-9.343-2.183-13.808-4.879z"/></svg>
                            </div>
                        </Flexbox>
                        <div>
                            <svg style={{width: '22px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46"><path d="M8 0v46l15-12 15 12V0H8zm28 42L23 31 10 42V2h26v40z"/></svg>
                        </div>
                    </Flexbox>
                    {/* ---------------------- */}

                    {/* likes */}
                    <p style={{marginBottom: '10px', fontSize: '13px'}}>
                        500 likes
                    </p>
                    {/* ---------------------- */}


                    {/* comments */}

                    <ul>
                        <p style={{fontSize: '13px'}}>
                            <span style={{fontWeight: 'bold'}}>zuckerberg</span>
                            &nbsp;cool! cool! cool! cool! cool! cool! cool! cool! cool! cool! cool!
                        </p>
                    </ul>

                    

                    {/* ---------------------- */}

                </div>
                
            </div>
        )
    }
}

export default NewsfeedItem;