import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from '../components/SearchForm';

// describe('Shallow rendered search form'), () => {

  it('renders the search form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// }
