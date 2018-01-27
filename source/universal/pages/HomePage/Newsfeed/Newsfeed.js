import React, { Component } from 'react';
import NewsfeedItem from './NewsfeedItem';

class Newsfeed extends Component {
  render(){

    const { newsfeedItems } = this.props;

    const newsfeedItemsEl = newsfeedItems.map((newsfeedItem) => {
      return <NewsfeedItem key={newsfeedItem.id} newsfeedItem={newsfeedItem} />
    })


    return (
      <div>
        {newsfeedItemsEl}
      </div>
    )
  }
}

export default Newsfeed;