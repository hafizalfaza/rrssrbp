import React, { Component } from 'react';
import Flexbox from 'universal/components/Flexbox'
import Gradient from 'universal/components/Gradient'
import { columnCentered, rowCentered } from '../../../../components/themes/flexbox';

class StoryThumb extends Component {
  render(){
    const userStoryThumb = <div style={{position: 'absolute', top: '42px', right: '4px'}}>
                            <Flexbox theme={rowCentered} align="center" style={{backgroundColor: 'white', borderRadius: '50%', width: '19px', height: '19px'}}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="18px" height="18px"><path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm12.5 28H28v11a2 2 0 0 1-4 0V28H13.5a2 2 0 0 1 0-4H24V14a2 2 0 0 1 4 0v10h10.5a2 2 0 0 1 0 4z" fill="#006DF0"/></svg>
                            </Flexbox>
                          </div>

    const {storyData} = this.props;

    return (
        <Flexbox theme={columnCentered} align="center" style={{width: '64px', position: 'relative', margin: '0 10px', textAlign: 'center'}}>
          <Gradient display="flex" direction={'to top right'} colors={!storyData.stories_count || storyData.viewed_stories ? ['transparent', 'transparent'] : ['#FCBF5F', '#9323C3']} justifyContent="center" alignItems="center" style={{width: '64px', height: '64px', borderRadius: '50%', marginBottom: '5px', border: storyData.stories_count && storyData.viewed_stories ? '1px grey solid' : 'none'}}>
            <Flexbox theme={rowCentered} align="center" style={{backgroundColor: 'white', borderRadius: '50%', width: '60px', height: '60px'}}>
              <span 
                style={{width: '56px', height: '56px', overflow: 'hidden', display: 'block', borderRadius: '50%'}} 
              >
                <img 
                  src={storyData.profile_pic_url}
                  style={{width: '100%'}}
                />
              </span>
            </Flexbox>
          </Gradient>

          {(storyData.isUser && !storyData.stories_count)  && userStoryThumb}

          <div style={{width: '64px', fontSize: '12px', textOverflow: 'ellipsis', overflow: 'hidden'}}>{storyData.isUser ? 'Your Story' : storyData.username}</div>
        </Flexbox>
      
    )
  }
}

export default StoryThumb;