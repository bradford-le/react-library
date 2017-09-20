import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


class ListBooks extends Component {
  
      render() {
          const {onUpdateShelf, books} = this.props;
          return (
              <div>
                  <div className="list-books">
                      <div className="list-books-title">
                          <h1>MyReads</h1>
                      </div>
                      <div className="list-books-content">
                          <div>
                              <BookShelf filter="" onUpdateShelf={onUpdateShelf} title="Currently Reading" books={books.filter( (book) => book.shelf === 'currentlyReading')}/>
                              <BookShelf filter="" onUpdateShelf={onUpdateShelf} title="Want to Read" books={books.filter( (book) => book.shelf === 'wantToRead')}/>
                              <BookShelf filter="" onUpdateShelf={onUpdateShelf} title="Read" books={books.filter( (book) => book.shelf === 'read')}/>
                          </div>
                      </div>
                  </div>
                  <div className="open-search">
                      <Link  to="/search" onClick={this.props.clearSearch} >Add a book</Link>
                  </div>
              </div>
          )
      }
  }

  export default ListBooks;