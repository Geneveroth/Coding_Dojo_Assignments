import React from 'react';
import Main from './views/Main';
import Details from './views/Details'
import Edit from './views/Edit'
import {Router} from '@reach/router'
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Details path="/product/:id"/>
        <Edit path="/product/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;
