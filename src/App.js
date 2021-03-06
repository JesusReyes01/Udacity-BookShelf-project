import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';
import BookSearch from './BookSearch';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({books: books})
  }

  handleShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => {
        BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
      })
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/'>
          <BookShelf
            books={this.state.books}
            handleShelfChange = {this.handleShelfChange}
            handleDelete = {this.handleDelete}
          />
          
        </Route>
        <Route path='/search' render={({ history }) => (
          <BookSearch 
            handleShelfChange = {(book, newCategory) => {
              this.handleShelfChange(book, newCategory)
              history.push('/')
            }}
            books={this.state.books}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp;
