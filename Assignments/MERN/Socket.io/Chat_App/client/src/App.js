import React from 'react';
import Home from './components/Home'
import Chat from './components/Chat'
import {Router} from '@reach/router'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Home path="/"/>
      <Chat path="/chat"/>

      </Router>
    </div>
  );
}

export default App;
