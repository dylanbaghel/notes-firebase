import { firebase } from './../firebase/firebase';
import { LOGIN, LOGOUT} from './types';

export const login = (uid) => {
    return {
        type: LOGIN,
        uid
    };
};

export const startLogin = (email, password) => dispatch => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const startSignUp = (email, password) => dispatch => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const logOut = () => {
    return {
        type: LOGOUT
    };
};

export const startLogOut = () => dispatch => {
    return firebase.auth().signOut();
};

export const forgotPassword = (email) => dispatch => {
    return firebase.auth().sendPasswordResetEmail(email);
};
