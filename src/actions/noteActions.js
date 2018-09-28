import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, SET_NOTES } from './types';
import firestore from './../firebase/firebase';
import { setLoadingFalse, setLoadingTrue } from './loadingActions';

export const addNote = (note = {}) => {
    return {
        type: ADD_NOTE,
        note: {
            ...note
        }
    };
};

export const startAddNote = (note) => (dispatch, getState) => {
    const uid = getState().auth.uid;
    firestore.collection(`users/${uid}/notes`).add(note).then(() => {
        // dispatch(addNote(note));
    });
};

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        id
    };
};

export const startRemoveNote = (id) => (dispatch, getState) => {
    const uid = getState().auth.uid;
    firestore.collection(`users/${uid}/notes`).doc(id).delete().then(() => {
        dispatch(removeNote(id));
    });
};

export const editNote = (id, updates = {}) => {
    return {
        type: EDIT_NOTE,
        id, 
        updates
    };
};

export const startEditNote = (id, updates) => (dispatch, getState) => {
    const uid = getState().auth.uid;
    firestore.collection(`users/${uid}/notes`).doc(id).update(updates).then(() => {
        dispatch(editNote(id, updates));
    });
};

export const setNotes = (notes = {}) => {
    return {
        type: SET_NOTES,
        notes
    };
};

export const startSetNotes = () => (dispatch, getState) => {
    const uid = getState().auth.uid;
    // return firestore.collection('notes').get()
    //     .then((QuerySnapshot) => {
    //         const noteList = [];

    //         QuerySnapshot.docs.forEach((childSnapshot) => {
    //             noteList.push({
    //                 id: childSnapshot.id,
    //                 ...childSnapshot.data()
    //             });
    //         });
    //         dispatch(setNotes(noteList));
    //     });
    dispatch(setLoadingTrue());
    firestore.collection(`users/${uid}/notes`).onSnapshot((snapshot) => {
        const noteList = [];

        snapshot.docs.forEach((childSnapshot) => {
            noteList.push({
                id: childSnapshot.id,
                ...childSnapshot.data()
            });
        });
        dispatch(setNotes(noteList));
        dispatch(setLoadingFalse());
    })
};