const express = require('express');

const app = express();

const server=app.listen(3000, () => {
    console.log("Listening at Port 3000")
});
const io=require('socket.io')(server);

let connectedClients=0;
let userName= '';
let chatMessages=[];

io.on('connection', socket=>{
    connectedClients++
    console.log('We have '+connectedClients+' connected!');

    socket.emit('welcome', {
       userName
    })
    socket.on('new user', newUserName => {
        userName
    })
    socket.on('new message', newMessage => {

      chatMessages.push(newMessage)
        io.emit('updated thread', chatMessages)
    })

    socket.on('disconnect', ()=>{
        connectedClients--;
        socket.broadcast.emit("user left the chat room")
        console.log('We have '+connectedClients+' connected!');
    })

});

socket.on('new bid', newBid=>{
    price=newBid;
    bids.push(newBid); 
    io.emit('price updated', price) 

    socket.on('price updated', newBid => {
        setInputVal(newBid + 5);
        setPrice(newBid);
        //to fix stale state use cbfunction
        setBids(currentBids => [...currentBids, newBid])
      }