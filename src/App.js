import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

export default class App extends Component {
  
  state = {
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState({ books })
    })
  }

  searchBooks = (event) => {
    
    let query = event.target.value;
    if(query) {
      BooksAPI.search(query,20).then( (searchedBooks) => {
            this.setState({searchedBooks});
      })
    } else {
      this.setState({searchedBooks: []});
    }
  }; 

  updateShelf= (book,shelf)=>{
    BooksAPI.update(book,shelf).then((books)=>{
    this.setState(state =>({
      books: state.books.filter( b => b.id !== book.id).concat([book])
    }))
    })
  };

    clearSearch = () => {
      this.setState({searchedBooks: []});
    }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks books={this.state.books} onUpdateShelf={this.updateShelf} clearSearch={this.clearSearch} />
        )}/>
        <Route exact path="/search" render={()=>(
          <SearchBooks books={this.state.searchedBooks} searchFunc={this.searchBooks} onUpdateShelf={this.updateShelf}  /> 
        )}/>
      </div>
    );
  }
}

