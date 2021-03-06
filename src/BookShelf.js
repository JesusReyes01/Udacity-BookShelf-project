import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'
import PropTypes from 'prop-types';

const BookShelf = (props) => {

  const shelves = [{value: "currentlyReading", title: "Currently Reading"},
                    {value: "wantToRead", title: "Want To Read"},
                    {value: "read", title: "Read"}]

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
            {shelves.map( (titleObj, index) => (
              <Shelf 
                key={index}
                books= {props.books}
                titleObj={titleObj}
                handleShelfChange={props.handleShelfChange}
              />
            ))}            
        </div>
      </div>
      <div className="open-search">
          <Link to='/search'>
              <button >Add a book</button>
          </Link>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default BookShelf;