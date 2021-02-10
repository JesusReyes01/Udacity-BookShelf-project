import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SearchBar = (props) => {

    return(
        <div className="search-books-bar">
            <Link to='/'>
                <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
                <input 
                    type="text"
                    placeholder="Search by title or author"
                    value={props.search}
                    onChange={props.handleSearch}
                    />

            </div>
        </div>
    )
}

SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;