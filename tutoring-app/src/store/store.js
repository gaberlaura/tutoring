//Where all of our Redux happens. Where we receive actions and update the state based on dispatch. 

import { legacy_createStore as createStore } from 'redux'
import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';//allows us to see what the state looks like before an action is dispatched, what the action is, and how the state looks like after the action.

import { rootReducer } from './root-reducer';

//middlewares are code enhancers that catch actions before they hit the reducers. 
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

//you need a root reducer in order to generate the store
export const store = createStore(rootReducer, undefined, composedEnhancers);