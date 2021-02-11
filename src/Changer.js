import React from 'react';
import PropTypes from 'prop-types';

const Changer = (props) => {

    const handleShelfChange = (event) => {
        event.preventDefault()
        props.handleShelfChange(props.book, event.target.value);
        
    }

    const bookOnShelf = props.books && props.books.find(({ id }) => id === props.book.id);
    const bookValue = bookOnShelf ? bookOnShelf.shelf : 'none';

    return(
        <div className="book-shelf-changer">
            <select onChange={handleShelfChange} value={bookValue}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
    )
}

Changer.propTypes = {
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    handleShelfChange: PropTypes.func.isRequired
}

export default Changer;