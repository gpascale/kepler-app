import { createStore, applyMiddleware, compose } from 'redux';
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';

import reducer from './reducers';

const initialState = {};

const middlewares = enhanceReduxMiddleware([]);

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, initialState, composeEnhancers(...enhancers));
