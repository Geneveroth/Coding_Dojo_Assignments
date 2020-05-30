import React from 'react';
import axios from 'axios';
import { Redirect, Router, Link, navigate } from '@reach/router';
import Login from './views/Login'
import AllCities from './views/AllCities';
import NewCity from './views/NewCity';
import SingleCity from './views/SingleCity';
import EditCity from './views/EditCity';
// //put interceptor inside app.js because we want to be able to intercept errors in any page and respond to it
// axios.interceptors.response.use(response=> response,//this cb is for successful request
//   err=>{
//    navigate('/login');
//    return err
//   }
//   );//this is when response has an error
//   //intercept any responses from server
//   //if everything ok, just return response
//   //if not, navigate back to login

function App() {
  return (
    <div className="App">
      <Link to="/cities">All Cities</Link>{' '}
      <Link to="/cities/new">Create a City</Link>
      <Router>
        <Login path='login'/>
        <AllCities path="cities"/>
        <NewCity path="cities/new"/>
        <EditCity path="cities/:id/edit"/>
        <SingleCity path="cities/:id"/>
        <Redirect
          from="/"
          to="/cities"
          noThrow
        />
      </Router>
    </div>
  );
}

export default App;
