const {Author} = require('../models/author.model');

module.exports.createAuthor=(req, res) =>{
    Author.create(req.body)
    .then(author=>res.json(author))
    .catch(err=>res.status(400).json(err));
};
module.exports.deleteAuthor=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then(deletedAuthor=>res.json(deletedAuthor))
    .catch(err=>res.json(err));
};
module.exports.editAuthor=(req,res)=>{
    const {name}=req.body;
    Author.findByIdAndUpdate(
        req.params.id,
        {   
            name
        },
        {
            new:true,
            runValidators:true
        }
    )
    .then(updatedAuthor=>res.json(updatedAuthor))
    .catch(err=>res.status(400).json(err));
};
module.exports.oneAuthor=(req,res)=>{
    Author.findById({_id:req.params.id})
    .then(oneAuthor=>res.json(oneAuthor))
    .catch(err=>res.json(err));
};
module.exports.allAuthors=(req,res)=>{
    Author.find()
    .then(allAuthors=>res.json(allAuthors))
    .catch(err=>res.json(err));
};