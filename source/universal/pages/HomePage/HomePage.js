import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import NewsfeedItem from './Newsfeed/NewsfeedItem';
import { changeActionBar } from 'universal/actions/actionBarAction';

class HomePage extends Component {


    componentDidMount(){
        setTimeout(() => {
            this.props.history.push('/profile')
        }, 5000)
    }


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
}

export default HomePage;