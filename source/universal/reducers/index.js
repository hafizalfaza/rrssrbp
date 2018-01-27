import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import imagesReducer from './imagesReducer';
import actionBarReducer from './actionBarReducer';
import navBarReducer from './navBarReducer';
import storiesReducer from './storiesReducer';
import newsfeedReducer from './newsfeedReducer';
import uiReducer from './uiReducer';

export default combineReducers({
    users: usersReducer,
    images: imagesReducer,
    actionBar: actionBarReducer,
    navBar: navBarReducer,
    stories: storiesReducer,
    newsfeed: newsfeedReducer,
    ui: uiReducer,
})