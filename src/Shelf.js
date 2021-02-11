import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Shelf = (props) => {

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.titleObj.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.filter( (book) => book.shelf === `${props.titleObj.value}`).map( (book) => (
                        <Book 
                            key= {book.id}
                            book = {book} 
                            books = {props.books}
                            handleShelfChange = {props.handleShelfChange}
                        />
                    ))}
                </ol>
            </div>
        </div>     
    )
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired,
    titleObj: PropTypes.object.isRequired
}

export default Shelf;
