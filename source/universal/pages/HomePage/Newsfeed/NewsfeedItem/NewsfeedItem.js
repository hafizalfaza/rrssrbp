import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import flexboxTheme from 'universal/components/themes/Flexbox';

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
                <div>test</div>

            </div>
        )
    }
}

export default NewsfeedItem;