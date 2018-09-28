import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import preloader from './../gifs/preloader.gif';
import FilterSort from './FilterSort';
import { getVisibleNotes } from './../selectors/getVisibleNotes';

const Notes = (props) => {
    const { notes } = props;

    let notesList = (
        <div>
            <FilterSort />
            {
                notes.length > 0 ? notes.map((note) => {
                    return (
                        <Note key={note.id} note={note} />
                    )
                }) : <h5>No Notes Found</h5>
            }
        </div>
    );

    let notesLoading = (

        <div className="preloader">
            <img src={preloader} alt="lksajgaskl"/>
        </div>
    );

    return (
        <div className="container">
            {props.isLoaded ? notesList : notesLoading}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        notes: getVisibleNotes(state.notes, state.filters),
        isLoaded: state.isLoaded
    };
};

export default connect(mapStateToProps)(Notes);

