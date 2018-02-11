import { FETCH_NEWSFEED_ITEMS, REVEAL_COMPLETE_COMMENT, LOAD_MORE_COMMENTS } from '../actions/constants';

const initialNewsfeedState = {
  newsfeedItems: [] 
}

export default (state=initialNewsfeedState, action) => {
    let newsfeed_id;
    let comment_id;
    let clonedNewsfeedItems;

    switch(action.type){
        case FETCH_NEWSFEED_ITEMS:
            return {
              ...state,
              newsfeedItems: action.payload
            }
        case REVEAL_COMPLETE_COMMENT:
            newsfeed_id = action.payload.newsfeed_id;
            comment_id = action.payload.comment_id;

            clonedNewsfeedItems = [...state.newsfeedItems]

            clonedNewsfeedItems.map((item) => {
                if(item.id === newsfeed_id){
                    item.comments.map((comment) => {
                        if(comment.id === comment_id){
                            if(comment.trimmedText) comment.trimmedText = null;
                        }
                    })
                }
            })
            
            return {
                ...state,
                newsfeedItems: [
                    ...clonedNewsfeedItems
                ]
            }

        case LOAD_MORE_COMMENTS:    

            let firstComment = [];
            let lastComments = [];
            let newsfeedItemIndex;

            newsfeed_id = action.payload.newsfeed_id;

            clonedNewsfeedItems = [...state.newsfeedItems]

            clonedNewsfeedItems.map((item, i) => {
                if(item.id === newsfeed_id){
                    firstComment = item.comments.slice(0, 1);
                    lastComments = item.comments.slice(1);
                    newsfeedItemIndex = i;
                }
            })

            const lazilyExtendedComments = [...firstComment, ...action.payload.lazyLoadedComments, ...lastComments]

            clonedNewsfeedItems[newsfeedItemIndex].comments = lazilyExtendedComments;

            clonedNewsfeedItems[newsfeedItemIndex].has_more_comments = false

            return {
                ...state,
                newsfeedItems: [
                    ...clonedNewsfeedItems
                ]
            }

        default:
            return state
    }
}