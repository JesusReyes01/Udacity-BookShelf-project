import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import NoResults from './NoResults'
import NoImageFound from './images/No-image-found.jpg'


class BookSearch extends Component {
    state = {
        search: '',
        searchResults: []
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
            if(this.state.search === ""){
                this.setState(() => ({
                    searchResults: []
                }))
            }
            else{
            BooksAPI.search(this.state.search)
                .then((results) => {
                    this.setState(() => ({
                        searchResults: results
                    }))                   
                })
            }
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
                        {this.state.searchResults.length > 0 &&
                            this.state.searchResults.map( (result,i) => {
                                let thumbnail = ''
                                if(result.imageLinks){
                                    thumbnail = result.imageLinks.thumbnail
                                }
                                else {
                                    thumbnail = NoImageFound                              
                                }
                                
                                let searchedBook = {
                                        category: 'None',
                                        imageURL: thumbnail,
                                        bookTitle: result.title,
                                        bookAuthors: result.authors
                                }
                            
                                return(
                                    <Book
                                        key={i}
                                        book={searchedBook}
                                        handleShelfChange={this.props.handleShelfChange}/>
                                )
                                })
                        }
                    </ol>
                    {this.state.search.length > 0 && !Array.isArray(this.state.searchResults) &&
                    <NoResults
                        search = {this.state.search}/>
                    }
                </div>
            </div>
        )
    }
}

export default BookSearch;