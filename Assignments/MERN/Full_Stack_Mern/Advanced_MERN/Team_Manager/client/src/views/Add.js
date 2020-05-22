import React, {useState} from 'react'
import {navigate, Link} from '@reach/router'
import axios from 'axios'

export default ()=>{
    const [name, setName]=useState('')
    const [position, setPosition]=useState('')
    const [errors, setErrors]=useState([])

    const submitHandler=e=>{
        e.preventDefault();
        setErrors([])
        axios.post('http://localhost:8000/api/player',{
            name,
            position
        })
        .then(()=>navigate('/players'))
        .catch(err => {
            const errs = [];
            const innerErrorsObject = err.response.data.errors;
    
            for(const key in innerErrorsObject) {
              errs.push(innerErrorsObject[key].message);
            }
            setErrors(errs);
          })
          setName('');
      }
    
    return(
        <div>
            {errors.map((err, i) => (
                <p key={i} style={{ color: 'red' }}>{err}</p>
            ))}
            <h1><Link to='/players'>Manage Players</Link></h1>
            <h2><Link to='/players'>List</Link>| Add Player</h2>
            <h2>Add A Player</h2>
            <form onSubmit={submitHandler}>
                <label>Player Name</label>
                <input type='text' onChange={(e)=>setName(e.target.value)}/>
                <label>Preferred Position</label>
                <input type='text' onChange={(e)=>setPosition(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}