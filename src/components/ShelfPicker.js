import React, { Component } from 'react';

class ShelfPicker extends Component {

  render() {
    const { book, updateShelf } = this.props

    let currentShelf = book.shelf ? book.shelf: 'none'
    console.log(book.shelf);

    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => this.props.updateShelf(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfPicker