import React from 'react';
import BookCard from './BookCard';

const Books = (props) => {

    if (props.booksarray) {
        let books = props.booksarray;
        console.log(books.items[0].volumeInfo.title);

        
    }






    return (

        <div id="showbooks" className="container card-deck">
         
        </div>    
    );

  }
  
  export default Books;