import React, { useState, useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
export default () => {
const [allProducts, setAllProducts] = useState(null);
const [hasError, setHasError] = useState(false);

useEffect(() => {
    axios.get('http://localhost:8000/api/product')
      .then(response => setAllProducts(response.data))
      .catch(() => setHasError(true));
     }, [allProducts]);

     function handleDelete(id) {
        axios.delete('http://localhost:8000/api/product/' + id)
          .then(() => setAllProducts(allProducts.filter(product => product._id !== id)))
      }
    if(hasError) return 'Something went wrong!';

    if(allProducts === null) return 'Loading...';
    return(
        <div>
            <h1>All Products:</h1>
            {allProducts.map(product=>(
            <ul key={product._id}>
                <li><Link to={'/api/product/'+ product._id}>{product.title}</Link></li>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
                <button onClick={() => navigate('/api/product/' + product._id + '/edit')}>Edit</button>
            </ul>
            ))}
        </div>
    )
}
