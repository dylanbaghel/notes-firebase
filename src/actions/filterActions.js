import { SET_TEXT_FILTER, SORT_BY_ALPHA, SORT_BY_DATE } from './types';

export const setTextFilter = (text) => {
    return {
        type: SET_TEXT_FILTER,
        text
    };
};  

export const sortByAlpha = () => {
    return {
        type: SORT_BY_ALPHA
    };
};

export const sortByDate = () => {
    return {
        type: SORT_BY_DATE
    };
};