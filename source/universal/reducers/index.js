import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
    users: usersReducer,
    images: imagesReducer
})