import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookShelves extends Component {

  render() {
    const { books, updateShelf} = this.props

    return <div className="list-books-content">
              <BookShelf updateShelf={updateShelf} shelf="Currently Reading" books={books.filter(book => book.shelf === 'currentlyReading')} />,
              <BookShelf updateShelf={updateShelf} shelf="Want to Read" books={books.filter(book => book.shelf === 'wantToRead')} />,
              <BookShelf updateShelf={updateShelf} shelf="Read" books={books.filter(book => book.shelf === 'read')} />
          </div>
  }
}

export default BookShelves;