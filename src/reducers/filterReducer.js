import { SET_TEXT_FILTER, SORT_BY_ALPHA, SORT_BY_DATE } from './../actions/types';

const filterReducerDefaultState = {
    sortBy: 'date',
    text: ""
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            };
        case SORT_BY_ALPHA:
            return {
                ...state,
                sortBy: 'alpha'
            };
        case SORT_BY_DATE:
            return {
                ...state,
                sortBy: 'date'
            };
        default:
            return state;
    }
};

export default filterReducer;