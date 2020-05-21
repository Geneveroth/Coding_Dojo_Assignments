const { Manager } = require('../models/manager.model');

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Manager.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
};
module.exports.getAllProducts=(req,res)=>{
    Manager.find()
    .then(allProducts=>res.json(allProducts))
    .catch(err => res.json(err));
};
module.exports.getOneProduct=(req,res)=>{
    Manager.findOne({_id:req.params.id})
    .then(oneProduct=>res.json(oneProduct))
    .catch(err => res.json(err));
}; 

module.exports.updateProduct = (req, res) => {
    const { title, price, description} = req.body;
    Manager.findByIdAndUpdate(
      req.params.id,
      {
        title,
        price,
        description
      },
      {
        new: true,
        runValidators: true
      }
    )
      .then(updatedProduct => res.json(updatedProduct))
      .catch(err => res.json(err));
  };
module.exports.deleteProduct =(req,res)=>{
    Manager.deleteOne({_id:req.params.id})
    .then(deletedProduct=>res.json(deletedProduct))
    .catch(err=>res.json(err));
}