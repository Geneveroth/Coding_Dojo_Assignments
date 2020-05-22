import React, {useState} from 'react'
import {navigate, Link} from '@reach/router'
import axios from 'axios'

export default ()=>{
    const [name, setName]=useState('')
    const [errors, setErrors]=useState([])

    const submitHandler=e=>{
        e.preventDefault();
        setErrors([])
        axios.post('http://localhost:8000/api/author',{
            name
        })
        .then(()=>navigate('/'))
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
            <Link to='/'>Home</Link>
            <h1>Favorite Authors</h1>
            <h3>Add An Author</h3>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type='text' onChange={(e)=>setName(e.target.value)}/>
                <button>Create</button>
            </form>
        </div>
    )
}