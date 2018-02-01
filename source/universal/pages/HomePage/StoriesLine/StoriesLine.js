import React, { Component } from 'react';
import StoryThumb from './StoryThumb';
import ScrollView from 'universal/components/ScrollView';
import Flexbox from 'universal/components/Flexbox';
import { rowGapped } from '../../../components/themes/flexbox';
import { orderStories } from './tools/orderStories'; 
import { connect } from 'react-redux'; 

class StoriesLine extends Component {

  render(){

    const { storiesThumbs } = this.props;
 
    const storiesThumbsEl = orderStories(storiesThumbs).map((story) => {
      return (
        <StoryThumb key={story.id} storyData={story} />
      )
    })
    
    return (
      <div style={{overflow: 'hidden', height: '125px', backgroundColor: '#fafafa'}}>
        <Flexbox theme={rowGapped} style={{margin: '10px 0', padding: '0 20px'}}>
          <span style={{fontWeight: '600', fontSize: '14px'}}>Stories</span>
          <a style={{fontWeight: '600', fontSize: '14px'}}>Watch All</a>
        </Flexbox>
        <ScrollView orientation="horizontal" style={{padding: '0 0 40px 10px'}}>
          {storiesThumbsEl}
          {/* <div style={{backgroundColor: 'black', height: '50px', width: '100px'}}></div> */}
        </ScrollView>
      </div>
    )
  }
}

export default StoriesLine;