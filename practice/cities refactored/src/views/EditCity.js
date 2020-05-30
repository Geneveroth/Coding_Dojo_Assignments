import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CityForm from '../components/CityForm';

export default function EditCity({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cities/' + id)
      .then(response => {
        setCity(response.data);

        setIsLoading(false);
      })
      .catch(console.log);
  }, [id]);

  if(isLoading) return 'Loading...';

  return (
    <div>
      <h1>Editing </h1>
      <CityForm
        city={city}
        method="put"
        url={'http://localhost:8000/api/cities/' + id}
        backUrl={'/cities/' + id}
      />
    </div>
  )
}