import { LOADING_FALSE, LOADING_TRUE } from './../actions/types';

const loadingReducerDefaultState = true;

const loadingReducer = (state = loadingReducerDefaultState, action) => {
    switch(action.type) {
        case LOADING_TRUE:
            return false;
        case LOADING_FALSE:
            return true;
        default:
            return state;
    }
};

export default loadingReducer;
