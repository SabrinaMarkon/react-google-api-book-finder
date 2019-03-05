import React from 'react';
import BookCard from './BookCard';

const Books = (props) => {

    // need to get this to show properly instead of just text. (JSX so not the same as vanilla behavior)
    let bookcards = '';

    if (props.booksarray) {

        let books = props.booksarray.items;
        //  console.log(books.items[0].volumeInfo); // one book.

        let thumb = '';

        if (books) {
          
            bookcards = books.map((book) => {

                try {

                    // some books on Google have no cover thumbnails.
                    if (book.volumeInfo.imageLinks.thumbnail) {
                        
                        thumb = book.volumeInfo.imageLinks.thumbnail;
                    } else {
    
                        // need to do something about CORS warning here.
                        thumb = '/images/blank-book-cover.jpg';
                    }
                                    
                        return <BookCard key={book.id} id={book.id} thumb={thumb} 
                        title={book.volumeInfo.title} authors={book.volumeInfo.authors} 
                        publisher={book.volumeInfo.publisher} infolink={book.volumeInfo.infoLink} />
                        
                } catch(err) {
    
                    return false;
                }

            });
        }
    }
    
    if (bookcards === '') {

        return (
            
            <div id="noresults">No results were found.</div>

        );
    } else {
        
        return (

            <div id="showbooks" className="container card-deck">
               {bookcards}
            </div>    
        );
    }

  }
  
  export default Books;