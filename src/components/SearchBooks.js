import React, {Component} from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import {Dropdown, Button} from 'semantic-ui-react';
import { searchOptions } from '../constants';

export default class SearchBooks extends Component {

  state = { query:''}
  handleChange = (event) =>{
    console.log("HANDLE CHANGE",event.target.value);
    this.setState({query: event.target.value})
  }

  render() {

    const {searchFunc, books} = this.props;

    return (
      <div className="search-books">
         <div className="search-books-bar">
            <Link to="/">
              <Button color='blue' icon='left arrow' labelPosition='left' content='Back' />
            </Link>
            <div className="search-books-input-wrapper">
                <Dropdown fluid search selection options={searchOptions} placeholder="Pick a search term" onChange={searchFunc}/>
            </div>
          </div>
          <BookShelf title="" filter="" books={books} onUpdateShelf={this.props.onUpdateShelf}/>
      </div>
        )
    }
}
