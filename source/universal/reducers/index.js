import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import imagesReducer from './imagesReducer';
import actionBarReducer from './actionBarReducer';
import navBarReducer from './navBarReducer';

export default combineReducers({
    users: usersReducer,
    images: imagesReducer,
    actionBar: actionBarReducer,
    navBar: navBarReducer
})