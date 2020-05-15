import React, {useState, useEffect} from "react";
const Pokemon = (props)=>{
    const [list, setList]=useState([]);
    const [render, setRender]=useState(false)
   
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => response.json())
        .then(response => setList(response.results))
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