import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import  logger  from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;

