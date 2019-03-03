import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import '../styles.css';

function App() {

    return (

        <BrowserRouter>
          <Home />
        </BrowserRouter>

      );
}

export default App;
