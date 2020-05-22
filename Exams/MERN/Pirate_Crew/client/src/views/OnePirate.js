import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router'
import axios from 'axios'

export default function (props){
    const [details, setDetails]=useState(null);
    const [hasError, setHasError]=useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirate/'+props.id)
        .then(res=>setDetails({...res.data}))
        .catch(()=>setHasError(true));
    },[props.id]);

    if(hasError) return "Yar, something went wrong, Matey!"
    if(details===null) return 'Loading...Scallywag...'

    return(
        <div>
            <h1>{details.name}</h1>
            <img src={details.image} height="300px" width="300px" alt={details.name}/>
            <h1>"{details.phrase}"</h1>
            <div>
                <h2>About</h2>
                <p>Position: {details.position}</p>
                <p>Treasures: {details.treasure}</p>
                <p>Peg Leg: {details.leg ?"Yes":"No"}</p>
                <p>Eye Patch: {details.eye ?"Yes":"No"}</p>
                <p>Hook Hand: {details.hand ?"Yes":"No"}</p>
                <button onClick={()=>navigate ("/")}>Back to the Crew</button>
            </div>
        </div>
    )
}