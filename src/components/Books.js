import React from 'react';
import BookCard from './BookCard';

const Books = (props) => {

    let bookcards = '';

    if (props.booksarray) {

        let books = props.booksarray.items;
        //  console.log(books.items[0].volumeInfo); // one book.

        bookcards = books.map((book) => {
            return <BookCard key={book.id} id={book.id} thumb={book.volumeInfo.imageLinks.thumbnail} 
            title={book.volumeInfo.title} authors={book.volumeInfo.authors} url={book.saleInfo.buyLink} />
        });

    } else {
        bookcards = '';
    }
    
    return (

        <div id="showbooks" className="container card-deck">
            {bookcards}
        </div>    
    );

  }
  
  export default Books;