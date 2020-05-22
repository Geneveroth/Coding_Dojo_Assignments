import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {navigate, Link} from '@reach/router'
export default ({id}) => {
    const [name, setName] = useState(""); 
    const [isLoading, setIsLoading]=useState(true)
    const [errors, setErrors]=useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/'+id)
        .then(res=>{
            setName(res.data.name);
            setIsLoading(false);
        })
        },[id]);
   
    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([])
        axios.put('http://localhost:8000/api/author/' + id, {
              name
            })
              .then(() => navigate('/'))
              .catch(err => {
                const errs = [];
                const innerErrorsObject = err.response.data.errors;
        
                for(const key in innerErrorsObject) {
                  errs.push(innerErrorsObject[key].message);
                }
                setErrors(errs);
              })
          }
    if(isLoading===true) return 'Loading...';
    return (
        <div>
            {errors.map((err, i) => (
                <p key={i} style={{ color: 'red' }}>{err}</p>
             ))}
             <Link to={'/'}>Home</Link>
            <h1>Favorite Authors</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <button>Update</button>
                <button onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    )
}
