import React, { useEffect, useState} from 'react';
import Changer from './Changer'


const Book = (props) => {

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${props.book.imageURL}` }}></div>
                    <Changer />
                </div>
                <div className="book-title">{props.book.bookTitle}</div>
                <div className="book-authors">{props.book.bookAuthors}</div>
            </div>
        </li>
            
    )

}

export default Book;