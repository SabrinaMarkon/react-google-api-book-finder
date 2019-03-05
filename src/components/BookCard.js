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
                    <div className="mx-auto">
                        <div className="card-title mt-4 mb-3 text-muted text-left">
                            <div className="text-muted small">By:</div>
                            <div className="text-body">{bookauthors}</div>
                        </div>
                        <div className="card-title mt-1 mb-4 text-left">
                            <div className="text-muted small">Published by:</div>
                            <div className="text-body">{props.publisher}</div>
                        </div>                
                    </div>
                    <p className="card-text mt-2 mb-4">
                        <img src={props.thumb} alt={props.title} className="bookcover img img-responsive border" />
                    </p>
                    <a href={props.infolink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-block mt-auto">
                            Preview
                    </a>
                </div>
        </div>  
    );

  }
  
  export default BookCard;