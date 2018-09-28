import React from 'react';

import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container text-center d-flex flex-column justify-content-center landing">
            <h1>Welcome To Notes App</h1>
            <p>V 1.0.0 Created By Abhishek Baghel</p>
            <div className="d-flex justify-content-center">
                <Link 
                    to="/login"
                    className="btn btn-info mr-1"
                >
                    Log In
                </Link>
                <Link
                    to="/signup"
                    className="btn btn-danger ml-1"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;