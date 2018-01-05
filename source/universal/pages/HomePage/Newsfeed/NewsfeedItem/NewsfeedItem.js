import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import flexboxTheme from 'universal/components/themes/Flexbox';

class NewsfeedItem extends Component {

    render(){
        return (
            <div>
                {/* newsfeed item header */}
                <Flexbox theme={flexboxTheme.rowGapped}>
                    <div>haha</div>
                    <div>wkwk</div>
                </Flexbox>
                {/* ----------------------*/}
            </div>
        )
    }
}

export default NewsfeedItem;