import React, { Component } from 'react';
import ShelfPicker from './ShelfPicker'
import noCoverImg from '../icons/nocover.jpg'


class Book extends Component {

  render() {
    const { book, updateShelf } = this.props

    // fallbacks for missing cover images and title
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCoverImg
    const title = book.title ? book.title : "No title information"

    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{ backgroundImage: `url(${coverImg})`}}>
                </div>
                <ShelfPicker
                  book={ book }
                  updateShelf={updateShelf}
                />
              </div>
              <div className="book-title">{ title }</div>
              {
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
          </li>
    )
  }
}

export default Book