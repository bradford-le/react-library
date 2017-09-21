import React, {Component} from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import {Dropdown} from 'semantic-ui-react';

class SearchBooks extends Component {

  render() {
    const options = [
      {
        text: "Android"
      }
    ]
    const {searchFunc, books} = this.props;
    const defaultOption = options[0];

    return (
      <div className="search-books">
         <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" onChange={searchFunc} placeholder="Search by title or author"/>
                <Dropdown fluid selection options={options} placeholder="Pick a search term" />
            </div>
          </div>
          <BookShelf title="" filter="" books={books} onUpdateShelf={this.props.onUpdateShelf}/>
      </div>
        )
    }
}

export default SearchBooks;