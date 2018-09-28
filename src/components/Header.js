import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from './../actions/authActions';

const Header = (props) => {

    let authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link
                    className="nav-link text-light"
                    to="/add"
                >
                    Add Notes
                        </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link text-light"
                    to="/notes"
                >
                    Notes
                        </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link text-light"
                    to="/notes"
                    onClick={() => {
                        props.dispatch(startLogOut());
                    }}
                >
                    LogOut
                        </Link>
            </li>
        </ul>
    );

    let publicLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link 
                    className="nav-link text-light"
                    to="/login"
                >
                    Log In
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link text-light"
                    to="/signup"
                >
                    Sign Up
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar navbar-expand navbar-dark bg-danger mb-5">
            <div className="container">
                <h4 className="navbar-brand">
                    <Link to="/" className="brand">Notes</Link>
                </h4>
                {props.isAuthenticated ? authLinks : publicLinks}
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    };
};

export default connect(mapStateToProps)(Header);