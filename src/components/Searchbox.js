import React from 'react';

import { setSearchField } from '../redux/searchField/searchField.actions';
import { connect } from 'react-redux';

const SearchBox = ({ onSearchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search your Friend'
                onChange={onSearchChange}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => (
    {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    }
);

export default connect(null, mapDispatchToProps)(SearchBox);