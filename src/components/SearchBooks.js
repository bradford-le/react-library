import React, {Component} from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import {Dropdown} from 'semantic-ui-react';
import { searchOptions } from '../constants';

class SearchBooks extends Component {

  render() {

    const {searchFunc, books} = this.props;

    return (
      <div className="search-books">
         <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                <Dropdown fluid selection options={searchOptions} placeholder="Pick a search term" onChange={searchFunc} />
            </div>
          </div>
          <BookShelf title="" filter="" books={books} onUpdateShelf={this.props.onUpdateShelf}/>
      </div>
        )
    }
}

export default SearchBooks;