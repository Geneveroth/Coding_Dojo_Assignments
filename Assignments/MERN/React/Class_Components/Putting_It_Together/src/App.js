import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <PersonCard 
        firstName = 'Jane'
        lastName = 'Doe'
        age = {45}
        hairColor = 'black'
        ></PersonCard>
      <PersonCard
        firstName = 'John'
        lastName = 'Smith'
        age = {88}
        hairColor = 'brown'
      ></PersonCard>
      <PersonCard
        firstName = 'Millard'
        lastName = 'Fillmore'
        age = {50}
        hairColor = 'brown'
      ></PersonCard>
      <PersonCard
        firstName = 'Maria'
        lastName = 'Smith'
        age = {52}
        hairColor = 'brown'
      ></PersonCard>
    </div>
  );
}

export default App;
