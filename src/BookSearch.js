import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import NoResults from './NoResults'


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
                    <ol className="books-grid">
                        
                        {this.state.searchResults.length > 0 ?
                            this.state.searchResults.map( (result,i) => {
                                let searchedBook = {
                                        category: 'None',
                                        imageURL: result.imageLinks.thumbnail,
                                        bookTitle: result.title,
                                        bookAuthors: result.authors
                            }
                            return(
                                <Book
                                    key={i}
                                    book={searchedBook}
                                    handleShelfChange={this.props.handleShelfChange}/>
                            )
                            }): this.state.search.length > 0 ?
                                <NoResults 
                                    search = {this.state.search}/>
                                :
                                <>
                                </>
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch;