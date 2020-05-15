import React, {useState} from 'react';
const HookForm = (props) =>{
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [pwConfirm, setPwConfirm] =useState("")

    const createUser = (e) => {
        e.preventDefault();
            const newUser = {firstName, lastName, email, password, pwConfirm};
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setPwConfirm("");
    };
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value ={firstName} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setPwConfirm(e.target.value)} value={pwConfirm}/>
            </div>
        </form>
            <h1>Your Form Data:</h1>
            <div>First Name {firstName}</div>
            <div>Last Name {lastName}</div>
            <div>Email {email}</div>
            <div>Password {password}</div>
            <div>Confirm Password {pwConfirm}</div>
        </>
    );
};
    
export default HookForm;