import React from 'react';
import { connect } from 'react-redux';
import { startEditNote } from './../actions/noteActions';
import NoteForm from './NoteForm';

const EditNote = (props) => {

    return (
        <div className="container">
            <h2>Edit Note</h2>
            <NoteForm
                note={props.note} 
                onSubmit={(noteUpdates) => {
                    console.log(noteUpdates);
                    props.startEditNote(props.note.id, noteUpdates)
                    props.history.push(`/notes/${props.note.id}`);
                }}
            />
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
        startEditNote: (id, updates) => dispatch(startEditNote(id, updates))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);