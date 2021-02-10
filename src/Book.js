import React from 'react';
import Changer from './Changer'
import NoImageFound from './images/No-image-found.jpg'



const Book = (props) => {

    let thumbnail = ''
    if(props.book.imageLinks){
        thumbnail = props.book.imageLinks.thumbnail
    }
    else {
        thumbnail = NoImageFound                              
    }
 

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                    <Changer 
                        handleShelfChange = {props.handleShelfChange}
                        book={props.book}
                        books={props.books}

                    />
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
            </div>
        </li>
            
    )

}

export default Book;