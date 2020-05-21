const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost/jokes_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>console.log('Established a connection to the database'))
.catch(err=>console.log('Something went wrong with the connection to the database.', err))