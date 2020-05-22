import React from 'react';
import Main from "./views/Main"
import Add from "./views/Add"
import OnePirate from "./views/OnePirate"
import {Router, Redirect} from '@reach/router'
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Main path="/pirates"/>
       <Add path="/pirate/new"/>
       <OnePirate path="/pirate/:id"/>
       <Redirect from="/" to= "/pirates" noThrow/>
     </Router>
    </div>
  );
}

export default App;
