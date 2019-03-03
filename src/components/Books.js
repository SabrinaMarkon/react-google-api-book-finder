import React from 'react';
import BookCard from './BookCard';

function Books() {

    const books = bookcards.map((book) => {
        <BookCard key={book.index} />
    });

    return (
  
        <div id="showbooks" className="container">
            {books}
        </div>
        
  
    );

  }
  
  export default Books;