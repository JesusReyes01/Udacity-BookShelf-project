import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';
import BookSearch from './BookSearch';
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: [
      {
        category: 'Currently Reading',
        imageURL: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
        bookTitle: 'To Kill a Mockingbird',
        bookAuthors: 'Harper Lee'
      },
      {
        category: 'Currently Reading',
        imageURL: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
        bookTitle: `Ender's Game`,
        bookAuthors: 'Orson Scott Card'
      },
      {
        category: 'Want to Read',
        imageURL: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
        bookTitle: `1776`,
        bookAuthors: 'David McCullough'
      },
    

    ]
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={(()=>(
          <BookShelf
            books={this.state.books}
          />
        ))}
        />
        <Route path='/bookSearch' component={BookSearch}/>
        
      </div>
    )
  }
}

export default BooksApp;
