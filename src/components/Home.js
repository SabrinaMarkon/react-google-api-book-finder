import React from 'react';
import SearchForm from './SearchForm';
import BookCard from './BookCard';

function Home() {

  return (

    <div className="container">
      <h1 id="title" className="text-center p-4 mt-3">Google Book Voyager</h1>
      <SearchForm />
      <BookCard />
    </div>

  );

}

export default Home;
