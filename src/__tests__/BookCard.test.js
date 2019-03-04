import React from 'react';
import ReactDOM from 'react-dom';
import BookCard from '../components/BookCard';             

it('renders a Book card without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});