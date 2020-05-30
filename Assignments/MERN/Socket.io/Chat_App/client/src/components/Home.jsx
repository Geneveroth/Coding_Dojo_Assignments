import React, { useState, useEffect } from 'react';
import {navigate} from '@reach/router';
import io from 'socket.io-client';
 
export default function Home() {
  const [socket] = useState(() => io(':3000'));
  const [newUserName, setUserName]=useState ('');
  
 
  useEffect(() => {
    
    socket.on('welcome', data =>{
      setUserName(data.userName);
    });        

    return () => socket.disconnect(true);
  }, [socket]);
 
  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('new user', newUserName)
    navigate('/chat')
  }


  return (
    <div>
      <h1>MERN Chat</h1>
      <h2>Get started right now!</h2>
      <form onSubmit = {handleSubmit}>
        <p>I want to start chatting with the name...</p>
        <input 
        //val={userName}
        onChange = {e => setUserName(e.target.value)}
        />
        <button>Start Chatting</button>
      </form>
    </div>
  )
};
