import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


class BookSearch extends Component {
    state = {
        search: '',
        searchResults: []
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState) {
            BooksAPI.search(this.state.search)
                .then((results) => {
                    this.setState(() => ({
                    searchResults: results
                    }))
                })
        }
    }

    handleSearch = (event) => {
        event.preventDefault();
        this.setState({search: event.target.value})
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                <div className="search-books-input-wrapper">
                    <input 
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.search}
                        onChange={this.handleSearch}
                        />

                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid"></ol>
                    {this.state.searchResults.map( (result,i) => {
                        let searchedBook = {
                                category: 'None',
                                imageURL: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
                                bookTitle: `The Adventures of Tom Sawyer`,
                                bookAuthors: 'Mark Twain'
                        }
                        return(<Book 
                            key={i}
                            book={searchedBook}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default BookSearch;