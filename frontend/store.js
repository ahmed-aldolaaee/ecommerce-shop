import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({});

const store = createStore(reducer);

export default store;