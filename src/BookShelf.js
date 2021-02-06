import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'

const BookShelf = (props) => {
  const shelves = ["Currently Reading", "Want to Read", "Read"]

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
            {shelves.map( (title, index) => (
              <Shelf 
              key={index}
              books= {props.books}
              shelfTitle={title}
              handleShelfChange={props.handleShelfChange}/>
            ))}            
        </div>
      </div>
      <div className="open-search">
          <Link to='/bookSearch'>
              <button >Add a book</button>
          </Link>
      </div>
    </div>
  )
}

export default BookShelf;