import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DeleteButton from "../components/DeleteButton"
import { navigate } from '@reach/router';

export default (props) => {
const {id}=props; 
const [details, setDetails] = useState(null); 
const [hasError, setHasError] = useState(false);

useEffect(() => {
    axios.get('http://localhost:8000/api/product/'+ id)
      .then(res => setDetails({...res.data}))
      .catch(() => setHasError(true));
     }, [id]);
     
    if(hasError) return 'Something went wrong in details!';

    if(details === null) return 'Loading...';
    return(
        <div>
            <h1>{details.title}</h1>
            <p>{details.price}</p> 
            <p>{details.description}</p> 
            <button onClick={() => navigate('/product/' + id + '/edit')}>Edit</button>
            <DeleteButton id={details._id} success={()=>navigate('/')}/>
            <button onClick={() => navigate('/')}>Back</button>
        </div>
    )
}
