import { FETCH_STORIES_THUMBS } from '../actions/constants';

const initialStoriesState = {
  stories: [],
  storiesThumbs: []
}

export default (state=initialStoriesState, action) => {
    switch(action.type){
        case FETCH_STORIES_THUMBS:
            return {
              ...state,
              storiesThumbs: action.payload
            }
        default:
            return state
    }
}