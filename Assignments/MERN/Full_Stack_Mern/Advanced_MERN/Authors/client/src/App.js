import React from 'react';
import Main from './views/Main';
import New from './views/New'
import Edit from './views/Edit'
import {Router} from '@reach/router'
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <New path="/author/new"/>
        <Edit path="/author/edit/:id"/>
      </Router>
    </div>
  );
}
export default App;
