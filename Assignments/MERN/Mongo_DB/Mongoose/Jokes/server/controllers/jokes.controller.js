const Joke=require("../models/jokes.model");

module.exports.getAllJokes=(req,res)=>{
    Joke.find()
    .then(allJokes=>res.json({jokes:allJokes}))
    .catch(err => res.json(err));
};
module.exports.getRandomJoke=(req,res)=>{
    Joke.findOne()
    .then(randomJoke=>res.json({jokes:randomJoke}))
    .catch(err => res.json(err));
};

module.exports.getOneJoke=(req,res)=>{
    Joke.findById(req.params.id)
    .then(oneJoke=>res.json({joke:oneJoke}))
    .catch(err => res.json(err));
};

module.exports.createJoke=(req,res)=>{
    Joke.create(req.body)
    .then(newJoke=>res.json({joke:newJoke}))
    .catch(err => res.json(err));
};

module.exports.updateJoke=(req,res)=>{
    Joke.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
            runValidators:true
        }
    )
    .then(updatedJoke=>res.json({joke:updatedJoke}))
    .catch(err => res.json(err));
};

module.exports.deleteJoke=(req,res)=>{
    Joke.findByIdAndDelete(req.params.id)
    .then(result=>res.json({result:result}))
    .catch(err => res.json(err));
}