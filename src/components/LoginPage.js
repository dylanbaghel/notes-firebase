import React from 'react';
import { isEmail } from 'validator';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogin } from './../actions/authActions';

class LoginPage extends React.Component {
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
                errors: "Too Small Password"
            }));
            return;
        }

        this.props.startLogin(this.state.email, this.state.password)
            .then(() => {

            }).catch((e) => {
                this.setState(() => ({
                    errors: { password: e.message }
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
                        <div>
                            <small>
                                Need An Account? <Link to="/signup" className="text-info">Click Here</Link>
                            </small>
                        </div>
                        <div className="mb-1">
                            <small>
                                <Link to="/forgotPassword" className="text-primary">Forgot Password</Link>
                            </small>
                        </div>
                        <button
                            className="btn btn-danger"
                        >Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (email, password) => dispatch(startLogin(email, password))
    };
};


export default connect(undefined, mapDispatchToProps)(LoginPage);