import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage]=useState('');
  const [socket] = useState(() => io(':3000'));

  useEffect(() => {
    socket.on("updated thread", (msg) =>
      setMessages((prevMessages) => [msg, ...prevMessages])
    );
  });

  function handleSubmit(e){
    e.preventDefault()
    socket.emit('new message', newMessage)
    setNewMessage('')
  }

  return (
    <div>
      <h1>MERN Chat</h1>
      {messages.map((message,i)=>(
          <p key={i}>{message}</p>
        ))}
      <form onSubmit={handleSubmit}>
        <input 
        onChange = {e => setNewMessage(e.target.value)}/>
        <button>Send</button>
      </form>
    </div>
  );
}
