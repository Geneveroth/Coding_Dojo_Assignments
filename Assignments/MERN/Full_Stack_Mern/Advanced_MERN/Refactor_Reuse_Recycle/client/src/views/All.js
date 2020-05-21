import React, { useState, useEffect } from 'react'
import {Link, navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton'
import axios from 'axios';

export default function All(){
const [allProducts, setAllProducts] = useState(null);
const [hasError, setHasError] = useState(false);

useEffect(() => {
    axios.get('http://localhost:8000/api/product')
      .then(response => setAllProducts(response.data))
      .catch(() => setHasError(true));
     }, [allProducts]);

    if(hasError) return 'Something went wrong!';

    if(allProducts === null) return 'Loading...';
    const removeProduct=id=>{
        setAllProducts(allProducts.filter(product => product._id !== id))
    }
    return(
        <div>
            <h1>All Products:</h1>
            {allProducts.map(product=>(
            <ul key={product._id}>
                <li><Link to={'/product/'+ product._id}>{product.title}</Link></li>
                <DeleteButton id={product._id} success={()=>removeProduct(product._id)}/>
                <button onClick={() => navigate('/product/' + product._id + '/edit')}>Edit</button>
            </ul>
            ))}
        </div>
    )
}
