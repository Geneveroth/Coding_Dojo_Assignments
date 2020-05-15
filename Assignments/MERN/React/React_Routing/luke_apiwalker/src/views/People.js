import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

function People({id}){
    const [people, setPeople]=useState(null);
    
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+id+'/')
        .then(response => setPeople(response.data))
        .catch(()=>navigate('/error')
        );
    },[id]);
    // useEffect(()=>{
    //     axios.get("https://swapi.dev/api/people/"+id+"/homeworld/")
    //     .then(response => setPeople(response.data))
    // },[id]);
    if (people===null) return 'Loading';
    return(
        <div>
            <h1>{people.name}</h1>
            <p> Height: {people.height}</p>
            <p> Hair Color: {people.hair_color}</p>
            <p> Eye Color: {people.eye_color}</p>
            <p> Skin Color: {people.skin_color}</p>
            <p> Homeworld: {people.homeworld}</p>
        </div>
    )
}
export default People;