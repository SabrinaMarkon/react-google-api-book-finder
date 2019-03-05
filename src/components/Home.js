import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Books from './Books';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const DEFAULT_SEARCH = "React";

class Home extends Component {

  constructor() {
    super();
    this.state = {
      books: null
    }
    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {

      this.getBooks(DEFAULT_SEARCH);
      
  }

  async getBooks(words) {

    try {

      axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + words + '&key=' + API_KEY)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
      
    } catch (err) {
      console.log('An error occurred: ' + err);

    }

  }

  render() {

    return (

      <div className="container">
        <h1 id="title" className="text-center p-4 mt-3">Google Book Voyager</h1>
        <SearchForm getBooks={this.getBooks} />
        <Books booksarray={this.state.books} />
        <footer id="madewithlove" className="pb-5">
          <div className="container">
            <h3 className="m-0 text-center text-dark">
              Made with <i id="madewithlove-heart" className="fa fa-heart" aria-hidden="true"></i> 4 U by <a href="http://sabrinamarkon.com" target="_blank" 
              rel="noopener noreferrer" id="madewithlove-name">Sabrina Markon</a>
		        </h3>
          </div>
        </footer>
      </div>
  
    );
  }


}

export default Home;
