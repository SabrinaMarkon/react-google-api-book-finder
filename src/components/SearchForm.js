import React, { Component } from 'react';

class SearchForm extends Component {

    constructor(props) {

        super(props);
        this.state = {
            words: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange = (e) => {

        this.setState({
            words: e.target.value
        });
    }

    handleSearch = (e) => {

        e.preventDefault();

        if (this.state.words !== '') {

            this.props.getBooks(this.state.words);
            this.setState({
                words: ''
            });
        }
    }

    render() {
        return (

            <div id="searchform" className="container input-group my-3">
                <label className="sr-only" htmlFor="searchbox">Search for a book!</label>
                <input id="searchinput" type="text" className="form-control" placeholder="Search for a book!" 
                aria-label="Search for a book!" value={this.state.words} required onChange={this.handleChange} />
                    <span className="input-group-append">
                        <form>
                            <button id="searchbutton" className="btn fa fa-search" type="submit" 
                            onClick={this.handleSearch}></button>
                        </form>
                    </span>
            </div>
            );

    }


  }
  
  export default SearchForm;