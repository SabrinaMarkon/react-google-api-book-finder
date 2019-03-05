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

        if (this.state.words) {

            // remove special characters from search string.
            let clean = this.state.words.replace(/[&/\\#,+()$~%.'":*?<>{}]/g,'');
            
            this.props.getBooks(clean);
            this.setState({
                words: ''
            });
        }
    }


    render() {
        return (

            <div id="searchform" className="container input-group my-3">
                <form className="form-inline">
                    <label className="sr-only" htmlFor="searchbox">Search for a book!</label>
                    <input id="searchinput" type="text" className="form-control" placeholder="Search for a book!" 
                    aria-label="Search for a book!" size="50" value={this.state.words} required 
                    onChange={this.handleChange}/>
                    <button id="searchbutton" className="input-group-append btn fa fa-search" type="submit" onClick={this.handleSearch}></button>
                </form>
            </div>
            );

    }


  }
  
  export default SearchForm;