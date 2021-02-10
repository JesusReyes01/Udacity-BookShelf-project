import React from 'react';
import Book from './Book';



const Shelf = (props) => {

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.filter( (book) => book.shelf === `${props.shelfTitle}`).map( (book, i) => (
                        <Book 
                            key= {i}
                            book = {book} 
                            handleShelfChange = {props.handleShelfChange}
                            handleDelete = {props.handleDelete}/>
                    ))}
                </ol>
            </div>
        </div>
                
    )

}

export default Shelf;
