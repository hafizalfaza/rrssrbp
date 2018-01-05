import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import { ImageBackground } from 'universal/components/ImageBackground/ImageBackground';

// Components Themes

import flexboxTheme from 'universal/components/themes/Flexbox';
import imageBackgroundTheme from 'universal/components/themes/ImageBackground';

class NewsfeedItem extends Component {

    render(){
        return (
            <div>
                {/* newsfeed item header */}
                <Flexbox theme={flexboxTheme.rowGapped} style={{padding: '0 20'}}>
                    <div>haha</div>
                    <div>wkwk</div>
                </Flexbox>
                {/* ----------------------*/}
                <ImageBackground theme={imageBackgroundTheme.coverCenter} backgroundImage="https://images.businessoffashion.com/profiles/asset/2170/ca7d6946a3f502181905560b14ead8299d1a9783.jpeg?auto=format%2Ccompress&fit=crop&h=360&ixlib=php-1.1.0&q=60&w=660"></ImageBackground>

            </div>
        )
    }
}

export default NewsfeedItem;