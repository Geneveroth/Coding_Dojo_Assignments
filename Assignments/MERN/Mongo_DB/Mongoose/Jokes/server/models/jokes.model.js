const mongoose=require('mongoose');

const JokeSchema=new mongoose.Schema({
    setup:{
        type : String,
        minlength:[10, "The setup must be at least 10 characters long."],
        required: [true, 'What is the setup?']
        },
    punchline:{
        type : String,
        minlength:[3, "The punchline must be at least 3 characters long."],
        required: [true, 'What is the punchline?']
    },
},{timestamps:true})

const Joke=mongoose.model("Joke", JokeSchema);
module.exports=Joke;