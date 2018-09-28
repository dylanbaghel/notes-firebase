import React from 'react';
import classnames from 'classnames';
import moment from 'moment';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            title: props.note ? props.note.title : '',
            body: props.note ? props.note.body : '',
            createdAt: props.note ? props.note.createdAt :  moment().valueOf(),
            errors: {}
        };
    };

    handleTitleChange(e) {
        let title = e.target.value;
        this.setState(() => ({
            title
        }));
    };

    handleBodyChange(e) {
        let body = e.target.value;
        this.setState(() => ({
            body
        }));
    };

    onFormSubmit(e) {
        e.preventDefault();

        if (!this.state.title) {
            this.setState(() => ({
                errors: {title: "Please Enter Title"}
            }));
            return;
        }
        if (!this.state.body) {
            this.setState(() => ({
                errors: {body: "Please Enter The Note"}
            }));
            return;
        }

        this.props.onSubmit({
            title: this.state.title,
            body: this.state.body,
            createdAt: this.state.createdAt
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter Title"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            className={classnames('form-control', {
                                'is-invalid': this.state.errors.title
                            })}
                        />
                        <div className="is-invalid">
                            <small className="text-danger">{this.state.errors.title}</small>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea
                            value={this.state.body}
                            onChange={this.handleBodyChange}
                            className={classnames('form-control', {
                                'is-invalid': this.state.errors.body
                            })}
                        ></textarea>
                        <div className="is-invalid">
                            <small className="text-danger">{this.state.errors.body}</small>
                        </div>
                    </div>
                    <button className="btn btn-danger">
                        {this.props.note ? "Edit Note" : "Add Note"}
                    </button>
                </form>
            </div>
        );
    }
}

export default NoteForm;