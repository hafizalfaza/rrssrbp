import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import imagesReducer from './imagesReducer';
import actionBarReducer from './actionBarReducer';
import navBarReducer from './navBarReducer';
import storiesReducer from './storiesReducer';
import newsfeedReducer from './newsfeedReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import {ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink, HttpLink } from "apollo-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = new HttpLink({ uri: 'http://localhost:3000/graphql', fetch: fetch  });

const apolloInitialState = (typeof window !=='undefined')? window.__APOLLO_STATE__:{}

export const cache = new InMemoryCache().restore(apolloInitialState);

export const client = new ApolloClient({
    cache,
    link
});
  
export const combinedReducers =  combineReducers({
    auth: authReducer,
    users: usersReducer,
    images: imagesReducer,
    actionBar: actionBarReducer,
    navBar: navBarReducer,
    stories: storiesReducer,
    newsfeed: newsfeedReducer,
    ui: uiReducer
})