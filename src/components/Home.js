import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Books from './Books';
import axios from 'axios';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      books: null
    }
    this.getBooks = this.getBooks.bind(this);
  }

  async getBooks(words) {

    const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + words + '&key=' + API_KEY)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
  }

  render() {

    return (

      <div className="container">
        <h1 id="title" className="text-center p-4 mt-3">Google Book Voyager</h1>
        <SearchForm getBooks={this.getBooks} />
        <Books booksarray={this.state.books} />
      </div>
  
    );
  }


}

export default Home;
