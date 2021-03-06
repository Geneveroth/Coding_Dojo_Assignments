import React, {useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
import RegistrationForm from '../components/RegistrationForm'

export default function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [err, setErr]=useState('');

    function handleSubmit(e){
        e.preventDefault();
        setErr('')
        axios.post('http://localhost:4000/api/users/login', {
            email,
            password
        }, {withCredentials:true})//have to include this argument object to specify the credentials use. cookie is both sent along and also when the server attempts to set a cookie, it will also set it in the browser
            .then(()=>navigate('/cities'))
            .catch(()=> setErr('Please check your credentials!'));
    }

    return(
        <>
        <h1>Login/Reg</h1>
        {err && (
            //the && will display this if an error is found
            //if the left of the && is truthy, do the right side of the &&. like a shortened ternary operator
            <p style={{color:'red'}}>{err}</p>
        )}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                name='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                name='password'
                type='password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
        <RegistrationForm/>
        </>
    );
}