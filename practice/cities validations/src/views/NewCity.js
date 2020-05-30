import React from 'react';

import CityForm from '../components/CityForm';

export default function NewCity() {
  const newCity = {
    name: '',
    population: '',
    imageUrl: '',
    nice: false
  };

  return (
    <div>
      <h1>New City</h1>
      <CityForm
        city={newCity}
        method="post"
        url="http://localhost:8000/api/cities"
        backUrl="/cities"
      />
    </div>
  )
}