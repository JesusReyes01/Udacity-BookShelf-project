import React from 'react';

const Changer = (props) => {

    const handleShelfChange = (event) => {
        event.preventDefault()
        props.handleShelfChange(props.book, event.target.value);
        
    }
    let found = false;
    let currentShelf = '';
    if (props.books) {
        for(let i = 0; i < props.books.length; i++) {
            if (props.books[i].id === props.book.id) {
                found = true;
                currentShelf = props.books[i].shelf
                break;
            }
        }
    }

    let bookValue = props.book.shelf ? props.book.shelf : 'none';
    bookValue = found?bookValue=currentShelf:bookValue;

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

export default Changer;