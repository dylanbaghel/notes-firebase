import React from 'react';
import classnames from 'classnames';
import { isEmail } from 'validator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { forgotPassword } from './../actions/authActions';

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            email: "",
            errors: {},
            isSent: false
        };
    }

    handleEmailChange(e) {
        let email = e.target.value;
        this.setState(() => ({
            email
        }));
    }

    onFormSubmit(e) {
        e.preventDefault();
        if (!this.state.email) {
            this.setState(() => ({
                errors: { email: "Please Enter Email" }
            }));
            return;
        } else if (!isEmail(this.state.email)) {
            this.setState(() => ({
                errors: { email: "Please Enter Valid Email" }
            }));
            return;
        }

        this.props.forgotPassword(this.state.email).then(() => {
            this.setState(() => ({
                isSent: true
            }))
        }).catch((e) => {
            this.setState(() => ({
                errors: {email: "This Email Is Not Registered"}
            }))
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.isSent && <div className="alert alert-success">
                    Email Sent To {this.state.email}.Follow The Email Instruction To Change Password
            </div>}
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                Forgot Password
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onFormSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Enter Your Email"
                                            className={classnames('form-control', {
                                                'is-invalid': this.state.errors.email
                                            })}
                                            value={this.state.email}
                                            onChange={this.handleEmailChange}
                                        />
                                        <div className="is-invalid">
                                            <small className="text-danger">{this.state.errors.email}</small>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <small>Know Your Password <Link to="/login" className="text-info">Login</Link></small>
                                    </div>
                                    <button className="btn btn-info">Send Link</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        forgotPassword: (email) => dispatch(forgotPassword(email))
    };
};

export default connect(undefined, mapDispatchToProps)(ForgotPassword);