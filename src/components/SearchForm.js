import React, { Component } from 'react';

class SearchForm extends Component {

    constructor() {
        super();
        this.state = {
            words: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            words: e.target.value
        });
    }

    handleClick = () => {
        
        // const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
        // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey


    }

    render() {

        return (
            <div id="searchform" className="m-4 input-group container">
                <label className="sr-only" htmlFor="searchbox">Search for a book!</label>
                <input id="searchbox" type="text" className="form-control" placeholder="Search for a book!" 
                aria-label="Search for a book!" value={this.state.words} onChange={this.handleChange} />
                    <div className="input-group-append">
                        <button id="searchbutton" className="btn fa fa-search" type="button" onClick={this.handleClick}></button>
                    </div>
            </div>
            );

    }


  }
  
  export default SearchForm;