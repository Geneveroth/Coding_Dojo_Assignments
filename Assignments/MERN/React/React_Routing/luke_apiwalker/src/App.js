import React from 'react';
import './App.css';
import {Router} from "@reach/router";
import Root from "./components/Root";
import Error from "./components/Error"
import People from "./views/People";
import Planets from "./views/Planets";
import Starships from "./views/Starships";



function App() {
  return (
    <div className="App">
        <Root />
        <Router>
            <People path="/people/:id"/>
            <Planets path="/planets/:id"/>
            <Starships path="/ships/:id"/>
            <Error path="/error"/>
        </Router>
    </div>
  );
}

export default App;
