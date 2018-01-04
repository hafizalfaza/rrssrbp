import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';


export default createStore(reducers, window._INITIAL_STATE_, applyMiddleware(thunk))