import { LOGIN, LOGOUT} from './../actions/types';

const authReducerDefaultState = {};

const authReducer = (state = authReducerDefaultState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                uid: action.uid
            };
        case LOGOUT:
            return {
                ...state,
                uid: undefined
            };
        default:
            return state;
    }
};

export default authReducer;