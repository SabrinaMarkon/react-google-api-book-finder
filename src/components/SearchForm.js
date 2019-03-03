import React from 'react';

function SearchForm() {

    return (
  
    <div id="searchform" className="m-4 input-group">
        <label className="sr-only" htmlFor="searchbox">Search for a book!</label>
        <input id="searchbox" type="text" className="form-control" placeholder="Search for a book!" aria-label="Search for a book!" />
            <div className="input-group-append">
                <button id="searchbutton" className="btn fa fa-search" type="button"></button>
            </div>
    </div>
  
    );

  }
  
  export default SearchForm;