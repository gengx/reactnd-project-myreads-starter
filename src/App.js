import React from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './components/BookShelves'
import Search from './components/Search'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    myBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks })
    })
  }

  updateShelf = (book, newShelf) => {
    if (book.shelf !== newShelf) {
        BooksAPI.update(book, newShelf).then(() => {
          // set shelf for new or updated book
          book.shelf = newShelf
          // get unchanged books first
          let updatedBooks = this.state.myBooks.filter( mybook => mybook.id !== book.id )
          //then add the changed one
          updatedBooks.push(book);
          this.setState({ myBooks: updatedBooks })
        })
      }
    }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <Search
            books={ this.state.myBooks }
            updateShelf={ this.updateShelf }
          />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelves updateShelf={this.updateShelf} books={this.state.myBooks} />

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
