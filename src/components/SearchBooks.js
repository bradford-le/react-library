import React, {Component} from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {

  render() {
    
    const {searchFunc, books} = this.props;

    return (
      <div className="search-books">
         <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" onChange={searchFunc} placeholder="Search by title or author"/>
            </div>
          </div>
          <BookShelf title="" filter="" books={books} onUpdateShelf={this.props.onUpdateShelf}/>
      </div>
        )
    }
}

export default SearchBooks;