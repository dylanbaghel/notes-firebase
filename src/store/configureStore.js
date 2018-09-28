import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import notesReducer from './../reducers/notesReducer';
import loadingReducer from './../reducers/loadingReducer';
import authReducer from './../reducers/authReducer';
import filterReducer from './../reducers/filterReducer';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(combineReducers({
        notes: notesReducer,
        isLoaded: loadingReducer,
        auth: authReducer, 
        filters: filterReducer
    }), composeEnhancers(
        applyMiddleware(thunk)
    ));

    return store;
};

export default configureStore;