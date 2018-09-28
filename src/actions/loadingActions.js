import { LOADING_FALSE, LOADING_TRUE } from './types';

export const setLoadingFalse = () => {
    return {
        type: LOADING_FALSE
    };
};

export const setLoadingTrue = () => {
    return {
        type: LOADING_TRUE
    };
};