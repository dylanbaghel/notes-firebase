import React from 'react';
import { connect } from 'react-redux';
import { startAddNote } from './../actions/noteActions';
import NoteForm from './NoteForm';

const AddNote = (props) => {

    return (
        <div className="container">
            <h2>Add Note</h2>
            <NoteForm 
                onSubmit={(note) => {
                    props.startAddNote(note);
                    props.history.push('/notes');
                }}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAddNote: (note) => dispatch(startAddNote(note))
    };
};

export default connect(undefined, mapDispatchToProps)(AddNote);