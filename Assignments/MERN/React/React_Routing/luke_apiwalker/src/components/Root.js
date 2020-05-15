import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

function Root(){
    const[formState, setFormState]=useState({
        option:'people',
        id:''
    })
    const changeHandler=(e)=>{
        setFormState({...formState,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/'+formState.option+'/'+formState.id+'/')
    }
    
    return(
        <div>
            <form onSubmit={submitHandler}>
            <label>Search For: </label>
            <select onChange={changeHandler}
                name='option'>
                value={formState.option}>
                <option value='people'>People</option>    
                <option value='planets'>Planets</option>
                <option value='ships'>Starships</option>    
            </select>
            <label>ID: </label>
            <input name='id' value={formState.id} onChange={changeHandler}/>
            <button>Search</button>
            </form>
        </div>
    )
}

export default Root;