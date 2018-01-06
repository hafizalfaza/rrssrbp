import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import NewsfeedItem from './Newsfeed/NewsfeedItem';

class HomePage extends Component {

    render(){
        return (
            <div>
                <NewsfeedItem />
            </div>
        )
    }
}

export default HomePage;