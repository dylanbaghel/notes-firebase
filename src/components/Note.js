import React from 'react';
import { Link } from 'react-router-dom'
import { formatDate } from './../utils/utils';

const Note = (props) => {

    const { title, createdAt, id } = props.note;

    return (
        <div className="card card-body mb-2">
            <h5 className="card-title">
                <Link
                    to={`/notes/${id}`}
                >
                    {title}
                </Link>
            </h5>
            <small className="text-muted">{formatDate(createdAt)}</small>
        </div>
    );
};

export default Note;