import React from 'react';
import BookCard from './BookCard';

const Books = (props) => {

    let books = props.booksarray;
    console.log(books);

     if(books) {
        // let durr = books.map((book) => {
        //     console.log(book.volumeInfo.title);
        //     return <BookCard />
        // });
     }

        // console.log(typeof durr);


    return (

        <div id="showbooks" className="container card-deck">
         
        </div>    
    );

  }
  
  export default Books;