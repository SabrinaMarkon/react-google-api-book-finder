import React from 'react';
import BookCard from './BookCard';

const Books = (props) => {

    let bookcards = '<div id="noresults">No results were found.</div>';

    if (props.booksarray) {

        let books = props.booksarray.items;
        //  console.log(books.items[0].volumeInfo); // one book.

        let thumb = '';

        if (books) {

            // some books on Google have no cover thumbnails.
            if (imageLinks.thumbnail) {
                
                thumb = book.volumeInfo.imageLinks.thumbnail;
            } else {

                thumb = '/images/blank-book-cover.jpg';
            }

            bookcards = books.map((book) => {
                return <BookCard key={book.id} id={book.id} thumb={thumb} 
                title={book.volumeInfo.title} authors={book.volumeInfo.authors} publisher={book.volumeInfo.publisher} infolink={book.volumeInfo.infoLink} />
            });

        }

    }
    
    return (

        <div id="showbooks" className="container card-deck">
        <img src='/images/blank-book-cover.jpg'>
            {bookcards}
        </div>    
    );

  }
  
  export default Books;