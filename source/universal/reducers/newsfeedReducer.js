import { FETCH_NEWSFEED_ITEMS } from '../actions/constants';

const initialNewsfeedState = {
  newsfeedItems: [] 
}

export default (state=initialNewsfeedState, action) => {
    switch(action.type){
        case FETCH_NEWSFEED_ITEMS:
            return {
              ...state,
              newsfeedItems: action.payload
            }
        default:
            return state
    }
}