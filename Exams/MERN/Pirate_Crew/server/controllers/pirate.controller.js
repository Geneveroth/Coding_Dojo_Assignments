const {Pirate}=require('../models/pirate.model');

module.exports.createPirate=(req, res)=>{
    Pirate.create(req.body)
    .then(pirate=>res.json(pirate))
    .catch(err=>res.status(400).json(err));
};

module.exports.deletePirate=(req,res)=>{
    Pirate.deleteOne({_id:req.params.id})
    .then(deletedPirate=>res.json(deletedPirate))
    .catch(err=>res.json(err));
};

module.exports.editPirate=(req,res)=>{
    const {name, image, treasure, phrase, position, leg, eye, hand}=req.body;
    Pirate.findByIdAndUpdate(
        req.params.id,
        {
            name,
            image,
            treasure,
            phrase,
            position,
            leg,
            eye,
            hand
        },
        {
            new:true,
            runValidators:true
        }
    )
    .then(updatedPirate=>res.json(updatedPirate))
    .catch(err=>res.status(400).json(err));
};

module.exports.onePirate=(req,res)=>{
    Pirate.findById({_id:req.params.id})
    .then(onePirate=>res.json(onePirate))
    .catch(err=>res.json(err));
};

module.exports.allPirates=(req,res)=>{
    Pirate.find()
    .then(allPirates=>res.json(allPirates))
    .catch(err=>res.json(err))
};