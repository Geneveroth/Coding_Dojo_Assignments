import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';

export default function RegistrationForm(){
    const [formState, setFormState]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        pwConfirm:''
    });
    function handleChange(e){
        const{name, value}=event.target;
        setFormState({
        ...formState,
        [name]:value//changes the evaluated name variable, not the key
        });
    }
    function handleSubmit(e){
        e.preventDefault();

        axios.post('http://localhost:4000/api/users', formState,{withCredentials:true})//formstate will pass all the data from lines 6-10
        .then(()=>navigate('/cities'))
        .catch(console.log);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Last Name</label>
                <input
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input
                name="email"
                value={formState.email}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input
                name="password"
                type='password'
                value={formState.password}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                name="pwConfirm"
                type='password'
                value={formState.pwConfirm}
                onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
    )
}