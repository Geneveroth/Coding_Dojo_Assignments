const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/crmbd',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log("Connected to the Database!"))
    .catch(err=>console.log("Failed to connect to the Database!",err))