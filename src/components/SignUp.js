import React from 'react';
import { isEmail } from 'validator';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startSignUp } from './../actions/authActions';

class SingUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    };

    handleEmailChange(e) {
        let email = e.target.value;
        this.setState(() => ({
            email
        }));
    };

    handlePasswordChange(e) {
        let password = e.target.value;
        this.setState(() => ({
            password
        }));
    };

    onFormSubmit(e) {
        e.preventDefault();
        if (!this.state.email) {
            this.setState(() => ({
                errors: { email: "Email is Required" }
            }));
            return;
        } else if (!isEmail(this.state.email)) {
            this.setState(() => ({
                errors: { email: "Email is Invalid" }
            }));
            return;
        }
        if (!this.state.password) {
            this.setState(() => ({
                errors: { password: "Password Is Required" }
            }));
            return;
        } else if (this.state.password.length < 6) {
            this.setState(() => ({
                errors: {password: "Too Small Password"}
            }));
            return;
        }

        this.setState(() => ({
            errors: {}
        }));

        this.props.startSignUp(this.state.email, this.state.password)
            .then(() => {

            }).catch((e) => {
                this.setState(() => ({
                    errors: {email: e.message}
                }));    
            });

    };

    render() {
        return (
            <div className="container">
                <div className="card card-body">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                className={classnames('form-control', {
                                    'is-invalid': this.state.errors.email
                                })}
                            />
                            <div className="is-invalid">
                                <small className="text-danger">{this.state.errors.email}</small>
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                className={classnames('form-control', {
                                    'is-invalid': this.state.errors.password
                                })}
                            />
                            <div className="is-invalid">
                                <small className="text-danger">{this.state.errors.password}</small>
                            </div>
                        </div>
                        <div className="mb-1">
                            <small><Link to="/login" className="text-primary">Already Have An Account</Link></small>
                        </div>
                        <button
                            className="btn btn-danger"
                        >Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startSignUp: (email, password) => dispatch(startSignUp(email, password))
    };
};

export default connect(undefined, mapDispatchToProps)(SingUp);