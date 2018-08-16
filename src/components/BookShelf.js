import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const { shelf, books, updateShelf} = this.props

    return <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              book={ book }
              updateShelf={ updateShelf }
            />
           ))}
        </ol>
      </div>
    </div>
  }
}

export default BookShelf;