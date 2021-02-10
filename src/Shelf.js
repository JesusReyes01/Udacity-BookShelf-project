import React from 'react';
import Book from './Book';



const Shelf = (props) => {

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.titleObj.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.filter( (book) => book.shelf === `${props.titleObj.value}`).map( (book, i) => (
                        <Book 
                            key= {i}
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

export default Shelf;
