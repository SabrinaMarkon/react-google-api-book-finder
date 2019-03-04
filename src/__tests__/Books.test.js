import React from 'react';
import ReactDOM from 'react-dom';
import Books from '../components/Books';             

it('renders the list of books without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Books />, div);
  ReactDOM.unmountComponentAtNode(div);
});