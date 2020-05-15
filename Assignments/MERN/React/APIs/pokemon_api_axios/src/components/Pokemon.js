import React, {useState, useEffect} from "react";
import axios from 'axios'
const Pokemon = (props)=>{
    const [list, setList]=useState([]);
    const [render, setRender]=useState(false)
   
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => setList(response.data.results))
        .catch(err=>{
            console.log(err);
        });
    },[]);
    return(
        <div>
            <button onClick = {()=>setRender(true)}>Fetch Pokemon</button>
            {
                list.map((pokemon, idx) => {
                    return (
                        render?
                    <div key={idx}>{pokemon.name}</div>:''
                    )
                })
            }
        </div>
    )
}


export default Pokemon