import React, {useState, useEffect} from 'react';
import './App.css';
import io from 'socket.io-client'

function App() {
  const [socket]=useState(()=>io(':8000'))//this will return a socket, only invokes cb function 1st time component renders
  const [price, setPrice]=useState(0);
  const [bids, setBids]=useState([]);
  const [inputVal, setInputval]=useState(0);

  useEffect(()=>{
    socket.on('welcome', data=>{
      setPrice(data.price);
      setBids(data.bids);
      setInputval(data.price+5);
    });
    socket.on('price updated', newBid=>{
      setInputval(newBid+5);
      setPrice(newBid);
      setBids(currentBids=>[...currentBids, newBid])//add new bid to the bids array, adding the callback makes it so it will properly display each new bid and not just stick to only the most recent
    });// listening for the event emitted from server
    //can pass data between client and server

    socket.on('new user joined!', ()=>{
      console.log('new user joined!')
    });
    return()=>socket.disconnect(); 
    //this will clean up once the socket is unmounted, only need to do this inside a component, not inside the app.js. helps stop a memory leak
  }, [socket]);
  function handleSubmit(e){
    e.preventDefault();
    if( inputVal<=price) return; //so someone cant underbid
    socket.emit('new bid', inputVal);//server needs to respond to this event
  }
  return (
    <div className="App">
      <p>Current Bid: {price}</p>
      <p>Bids: </p>
      <ul>
        {bids.map((bid,i)=>(
          <li key={i}>{bid}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
        type="number"
        value={inputVal}
        onChange={e=>setInputval(+e.target.value)}// the + will keep it as a number type, not string
        />
        <button>Place Bid</button>
      </form>
    </div>
  );
}

export default App;
