import { createStore, applyMiddleware } from 'redux';
import loogger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import Auth from './Auth';

const reducers = combineReducers({
    Auth,
});

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(loogger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;