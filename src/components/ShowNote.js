import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatDate } from './../utils/utils';
import { startRemoveNote } from './../actions/noteActions';

const ShowNote = (props) => {

    const { note } = props;

    return (
        <div className="container">
            {note ? (
                <div className="card">
                    <div className="card-body">
                        <h5>{note.title}</h5>
                        <small className="text-muted">{formatDate(note.createdAt)}</small>
                        <p className="card-text">{note.body}</p>
                        <button
                            className="btn btn-danger mr-2"
                            onClick={() => {
                                props.startRemoveNote(note.id);
                                props.history.push("/notes");
                            }}
                        >
                            Delete
                    </button>
                        <Link
                            className="btn btn-info ml-2"
                            to={`/notes/edit/${note.id}`}
                        >
                            Edit
                    </Link>
                    </div>
                </div>
            ) : (
                    <div>
                        <h4>Not Found</h4>
                    </div>
                )}
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find((note) => note.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startRemoveNote: (id) => dispatch(startRemoveNote(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote);