import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Home from './views/Home';
import Number from './views/Number'
import Color from './views/Color';

function App() {
  return (
    <div className="App">

      <Router>
        <Home path='/home'/>
        <Number path='/:id'/>
        <Color path='/:word/:text/:back'/>
      </Router>
    </div>
  );
}

export default App;
