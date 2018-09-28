import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAlpha, sortByDate } from '../actions/filterActions';

const FilterSort = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <div className="form-group mr-1 w-75">
                <input
                    type="text"
                    placeholder="Text Filter..."
                    className="form-control"
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }}
                />
            </div>
            <div className="form-group ml-1">
                <select 
                    className="form-control"
                    onChange={(e) => {
                        if (e.target.value === 'alpha') {
                            props.dispatch(sortByAlpha());
                        } else if (e.target.value === 'date') {
                            props.dispatch(sortByDate());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="alpha">A-Z</option>
                </select>
            </div>
        </div>
    );
};

export default connect()(FilterSort);