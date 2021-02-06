import React, {useEffect, useState} from 'react';
import Book from './Book';


const Shelf = (props) => {
 
    return(
        <div>
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.filter( book => book.category === 'Currently Reading').map( book => (
                        <Book 
                            book = {book} />
                    ))}
                </ol>
            </div>
        </div>
                
    )

}

export default Shelf;
