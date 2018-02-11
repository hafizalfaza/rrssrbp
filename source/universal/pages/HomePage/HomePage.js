import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox';
import Newsfeed from './Newsfeed/Newsfeed';
import NewsfeedItem from './Newsfeed/NewsfeedItem';
import { changeActionBar } from 'universal/actions/actionBarAction';
import { setActiveRoute } from 'universal/actions/navBarAction';
import { fetchStoriesThumbs } from 'universal/actions/storiesAction';
import { fetchNewsfeedItems } from 'universal/actions/newsfeedAction';
import StoriesLine from './StoriesLine';
import { connect } from 'react-redux';
import LandingPage from '../LandingPage';

class HomePage extends Component {

    componentWillMount(){
        this.props.changeActionBar('/')
        this.props.setActiveRoute('/')
        this.props.fetchStoriesThumbs();
        this.props.fetchNewsfeedItems();
    }

    render(){
        const { storiesThumbs, newsfeedItems } = this.props;

        return (
            <div>
                <StoriesLine storiesThumbs={storiesThumbs}/>
                <Newsfeed newsfeedItems={newsfeedItems}/>
            </div>
        )
    }
}

export function loadData(store, req){
    store.dispatch(fetchStoriesThumbs())
    store.dispatch(fetchNewsfeedItems())
    store.dispatch(changeActionBar(req.url))
    store.dispatch(setActiveRoute(req.url))
}

const mapStateToProps = (state) => {
    return {
      storiesThumbs: state.stories.storiesThumbs,
      newsfeedItems: state.newsfeed.newsfeedItems
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStoriesThumbs: () => {dispatch(fetchStoriesThumbs)},
        fetchNewsfeedItems: () => {dispatch(fetchNewsfeedItems)},
        setActiveRoute: (path) => {dispatch(setActiveRoute(path))},
        changeActionBar: (path) => {dispatch(changeActionBar(path))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);