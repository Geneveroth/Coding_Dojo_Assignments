import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

function Starships({id}){
    const [ships, setShips]=useState(null);
    
    useEffect(()=>{
        axios.get("https://swapi.dev/api/starships/"+id+'/')
        .then(response => setShips(response.data))
        .catch(()=>navigate('/error')
        );
    },[id]);
    if (ships===null) return 'Loading';
    return(
        <div>
            <h1>{ships.name}</h1>
            <p> Model: {ships.model}</p>
            <p> Manufacturer:{ships.manufacturer}</p>
            <p> Class: {ships.starship_class}</p>
        </div>
    )
}
export default Starships;