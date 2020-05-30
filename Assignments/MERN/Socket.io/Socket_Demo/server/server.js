const express=require('express');


const app=express();
const server=app.listen(8000);
const io=require('socket.io')(server);

let connectedClients=0;
let price=5;
const bids=[];

io.on('connection', socket =>{ //when a client connects to server, run this callback function
    // socket is reference to actual client who has connected. this is like adding an event listener, listening for 'connection' event, which is a built-in event in socket.io
    console.log(socket.id);//socket is a huge object, the socket id will change on every refresh
    connectedClients++;

    socket.broadcast.emit('new user joined!');//sends an event to all sockets except the sending socket, must listen on front end
    

    console.log('We have '+connectedClients+' connected!');
    socket.emit('welcome', {
        price,
        bids
    });// sending back an event to the same socket that just connected to server.

    socket.on('new bid', newBid=>{
        Product.findbyIDandUpdate(
            id,
            {
                price: newBid
            },
            {
                new:true,
                runValidators:true
            }
        )
        .then(()=>io.emit())//
        price=newBid;
        bids.push(newBid); //shows history of all placed bids
        io.emit('price updated', price) //this sends an event to every socket connected to server
    })
    socket.on('disconnect', ()=>{
        connectedClients--;
        console.log('We have '+connectedClients+' connected!');
    })
});

