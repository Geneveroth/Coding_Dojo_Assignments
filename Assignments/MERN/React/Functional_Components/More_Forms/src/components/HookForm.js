import React, {useState} from 'react';
const HookForm = (props) =>{
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [pwConfirm, setPwConfirm] =useState("");
    const [firstNameError, setFirstNameError] =useState("");
    const [lastNameError, setLastNameError] =useState("");
    const [emailError, setEmailError] =useState("");
    const [pwError, setPwError] =useState("");
    const [pwConfirmError, setPwConfirmError] = useState("");

    const handleFirstName = (e) => {
        if (e.target.value.length<2){
            setFirstNameError("First name must be at least 2 characters.");        
        }
        else {setFirstNameError('')}
    };
    const handleLastName = (e) => {
        if (e.target.value.length<2){
            setLastNameError("Last name must be at least 2 characters.");        
        }
        else {setLastNameError('')}
    };
    const handleEmail = (e) => {
        if (e.target.value.length<5){
            setEmailError("Email must be at least 5 characters.");        
        }
        else setEmailError('');
    };
    const handlePassword = (e) => { 
        setPassword(e.target.value);
        if (e.target.value<8){ 
            setPwError("Password must be at least 8 characters.");        
        }
        else setPwError('');
    };
    const handlePwConfirm = (e) => {
        setPwConfirm(e.target.value);
        if(e.target.value !== password) {
            setPwConfirmError('Passwords do not match')
        } else {
            setPwConfirmError('')
        }
    }
    return(
        <>
        <form>
            <div>
                <label>First Name: </label>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={handleLastName}/>
                    {
                        lastNameError;
                        <p style={{color:'red'}}>{ lastNameError }</p> :
                        ''
                    } 
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={handleEmail}/>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    } 
            </div>
            <div>
                <label>Password: </label> 
                <input type="text" onChange={handlePassword}/>
                    {
                        pwError ?
                        <p style={{color:'red'}}>{ pwError }</p> :
                        ''
                    } 
            </div>
            <div>
                <label>Confirm: </label> 
                <input type="text" onChange={handlePwConfirm}/>
                    {
                        pwConfirmError ?
                        <p style={{color:'red'}}>{ pwConfirmError }</p> :
                        ''
                    } 
            </div>
        </form>
        </>
    );
};
    
export default HookForm;