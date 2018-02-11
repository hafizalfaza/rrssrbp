import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combinedReducers } from '../reducers/index';


export default createStore(combinedReducers, window._INITIAL_STATE_, applyMiddleware(thunk))