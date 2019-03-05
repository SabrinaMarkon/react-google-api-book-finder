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

            <form>
                <div id="searchform" className="input-group my-3">
                    <label className="sr-only" htmlFor="searchbox">Search for a book!</label>
                    <input id="searchinput" type="text" className="form-control" placeholder="Search for a book!" aria-label="Search for a book!" value={this.state.words} required onChange={this.handleChange} />
                    <div className="input-group-btn">
                        <button id="searchbutton" type="submit" className="btn" onClick={this.handleSearch}><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </form>

            );

    }


  }
  
  export default SearchForm;