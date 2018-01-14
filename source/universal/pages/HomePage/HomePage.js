import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import NewsfeedItem from './Newsfeed/NewsfeedItem';
import { changeActionBar } from 'universal/actions/actionBarAction';
import { setActiveRoute } from 'universal/actions/navBarAction';

class HomePage extends Component {

    render(){
        return (
            <div>
                <NewsfeedItem />
            </div>
        )
    }
}

export function loadData(store, req){
    store.dispatch(changeActionBar(req.url))
    store.dispatch(setActiveRoute(req.url))
}

export default HomePage;