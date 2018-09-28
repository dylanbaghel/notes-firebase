import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';

import { startSetNotes } from './actions/noteActions';
import { login, logOut } from './actions/authActions';
import { history } from './router/AppRouter';

const store = configureStore();

console.log(store.getState());

let jsx = (
    <Provider
        store={store}
    >
        <App />
    </Provider>
);

const renderApp = () => {
    ReactDOM.render(jsx, document.getElementById('root'));
};

// ReactDOM.render(<p>Loading....</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));

        store.dispatch(startSetNotes());
        renderApp();

        if (history.location.pathname === '/') {
            history.push('/notes');
        }

    } else {
        store.dispatch(logOut());
        renderApp();
    }
});

registerServiceWorker();
