import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

export default ()=>{
    const [allPirates, setAllPirates]=useState(null);
    const [hasError, setHasError]=useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirate')
        .then(response=>setAllPirates(response.data))
        .catch(()=>setHasError(true));
    },[]);

    function handleDelete(id){
        axios.delete('http://localhost:8000/api/pirate/'+id)
        .then(()=>setAllPirates(allPirates.filter(pirate=>pirate._id !== id)))
    }
    if (hasError) return 'Yar, something went wrong, Matey!'

    if(allPirates===null) return 'Loading...Scallywag...'
    return(
        <div>
            <h1>Pirate Crew</h1>
            <button onClick={()=>navigate ("pirate/new")}>Add Pirate</button>
            <div>
                {allPirates.map(pirate=> (
                <div>
                    <p key={pirate._id}/>
                    <h1>{pirate.name}</h1>
                    <img src={pirate.image} height="200px" width="200px" alt={pirate.name}/>
                    <button onClick={()=>navigate('/pirate/'+pirate._id)}>View Pirate</button>
                    <button onClick={()=>handleDelete(pirate._id)}>Walk the Plank</button>
                </div>
                    ))}
            </div>
        </div>
    )
}