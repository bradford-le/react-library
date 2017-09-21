import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class App extends Component {
  
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState({ books })
    })
  }

  updateShelf= (book,shelf)=>{
    BooksAPI.update(book,shelf).then((books)=>{
    this.setState(state =>({
      books: state.books.filter( b => b.id !== book.id).concat([book])
    }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks books={this.state.books} onUpdateShelf={this.updateShelf} clearSearch={this.clearSearch} />
        )}/>
        <Route exact path="/search" render={()=>(
          <SearchBooks  />
        )}/>
      </div>
    );
  }
}

export default App;
