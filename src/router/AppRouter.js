import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './../components/Header';
import Notes from './../components/Notes';
import AddNote from './../components/AddNote';
import ShowNote from './../components/ShowNote';
import EditNote from './../components/EditNote';
import NotFound from './../components/NotFound';
import LoginPage from './../components/LoginPage';
import SignUp from './../components/SignUp'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LandingPage from './../components/LandingPage';

export const history = createHistory();

const AppRouter = () => {
    return (
        <Router
            history={history}
        >
            <div>
                <Header />
                <Switch>
                    <PublicRoute 
                        exact path="/"
                        component={LandingPage}
                    />
                    <PublicRoute
                        exact path="/login"
                        component={LoginPage}
                    />
                    <PrivateRoute
                        exact path="/add"
                        component={AddNote}
                    />
                    <PrivateRoute 
                        exact path="/notes"
                        component={Notes}
                    />
                    <PublicRoute 
                        exact path="/signup"
                        component={SignUp}
                    />
                    <PrivateRoute
                        exact path="/notes/:id"
                        component={ShowNote}
                    />
                    <PrivateRoute
                        exact path="/notes/edit/:id"
                        component={EditNote}
                    />
                    <Route
                        component={NotFound}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;