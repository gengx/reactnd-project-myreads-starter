import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {

  state = {
    queryString: '',
    searchedResults: [],
    searched: false,
  }

  getBooks = (event) => {

    const queryString = event.target.value
    this.setState({ queryString: queryString })

    if (queryString) {
      BooksAPI.search(queryString).then((books) => {
        books.length > 0 ? this.setState({searchedResults: books, searched: false}): this.setState({searchedResults: [], searched: true})
      })
    } else {
      this.setState({searchedResults: [], searched: false })
    }
  }

  render() {

    const { queryString, searchedResults, searched } = this.state
    const { books, updateShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={ queryString }
              onChange={ this.getBooks } />
          </div>
        </div>
        <div className="search-books-results">
          { searchedResults.length > 0 && (
            <div>
              <div className=''>
                <h3>{ searchedResults.length } books found</h3>
              </div>
              <ol className="books-grid">
                {searchedResults.map((book) => (
                  <Book book={ book } updateShelf={ updateShelf }/>
                ))}
              </ol>
            </div>
          )}
          { searchedResults.length == 0 && searched  && (
            <div>
              <div className=''>
                <h3>0 book found.</h3>
                </div>
              </div>
          )}
        </div>
      </div>
    )}
}
export default Search