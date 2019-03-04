import React from 'react';

function BookCard(props) {

    let bookauthors = '';
    
    if (props.authors) {

        bookauthors = props.authors.map((author, id) => {
            return <p key={id}>{author}</p>
        })
    }

    //document.querySelectorAll('[data-reactid$=".$42"]') // find duplicate key

    return (
  
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{bookauthors}</h6>
                    <p className="card-text">
                        <img src={props.thumb} alt={props.title} width="80%" className="img img-responsive" />
                        <button className="card-link btn btn-primary">
                            Preview
                        </button>
                    </p>
                </div>
        </div>  
    );

  }
  
  export default BookCard;