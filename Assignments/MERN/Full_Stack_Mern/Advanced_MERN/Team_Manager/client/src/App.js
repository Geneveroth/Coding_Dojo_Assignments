import React from 'react';
import Main from './views/Main';
import Add from './views/Add';
import {Router} from '@reach/router'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="players"/>
      <Add path="players/addplayer"/>

      </Router>
    </div>
  );
}

export default App;
