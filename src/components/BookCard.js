import React from 'react';

function BookCard(props) {

    let bookauthors = '';
    
    if (props.authors) {

        /////////////// REMOVE DUPS!!! 

        bookauthors = props.authors.map((author, id) => {
            return <div key={id}>{author}</div>
        })
    }

    //document.querySelectorAll('[data-reactid$=".$42"]') // find duplicate key

    return (
  
        <div className="card">
                <div className="card-body d-flex flex-column mb-4 box-shadow">
                    <div className="card-header border">
                        <h3 className="my-0 font-weight-normal">{props.title}</h3>
                    </div>
                    <div className="card-title mt-2 mb-3 text-muted">
                        <div>Authors:</div>
                        {bookauthors}
                    </div>
                    <p className="card-text">
                        <img src={props.thumb} alt={props.title} width="60%" className="img img-responsive" />
                    </p>
                    <a href={props.infolink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-block mt-auto">
                            Preview
                    </a>
                </div>
        </div>  
    );

  }
  
  export default BookCard;