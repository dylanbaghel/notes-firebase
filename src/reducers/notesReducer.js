import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, SET_NOTES } from './../actions/types';

const notesReducerDefaultState = [];

const notesReducer = (state = notesReducerDefaultState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return [
                ...state,
                action.note
            ];
        case REMOVE_NOTE:
            return state.filter((note) => note.id !== action.id);
        case EDIT_NOTE:
            return state.map((note) => {
                if (note.id !== action.id) {
                    return note;
                }
                return {
                    ...note,
                    ...action.updates
                }
            });
        case SET_NOTES:
            return action.notes;
        default:
            return state;
    }
};

export default notesReducer;