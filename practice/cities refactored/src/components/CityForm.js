import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function CityForm({ city, method, url, backUrl }) {
  const [name, setName] = useState(city.name);
  const [population, setPopulation] = useState(city.population);
  const [imageUrl, setImageUrl] = useState(city.imageUrl);
  const [nice, setNice] = useState(city.nice);

  function handleSubmit(event) {
    event.preventDefault();

    // axios({
    //   url,
    //   data: {
    //     name,
    //     population,
    //     imageUrl,
    //     nice
    //   }
    // })

    axios[method](url, {
      name,
      population,
      imageUrl,
      nice
    })
      .then(() => navigate('/cities'))
      .catch(console.log)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Population</label>
          <input
            name="population"
            value={population}
            type="number"
            onChange={e => setPopulation(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            name="imageUrl"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Is it nice?</label>
          <input
            type="checkbox"
            checked={nice}
            onChange={e => setNice(e.target.checked)}
          />
        </div>
        <button>Submit</button>
        <button type="button" onClick={() => navigate(backUrl)}>Cancel</button>
      </form>
    </div>
  )
}