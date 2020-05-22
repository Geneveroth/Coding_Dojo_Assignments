const {Player} = require('../models/player.model');

module.exports.createPlayer=(req, res) =>{
    Player.create(req.body)
    .then(player=>res.json(player))
    .catch(err=>res.status(400).json(err));
};
module.exports.deletePlayer=(req,res)=>{
    Player.deleteOne({_id:req.params.id})
    .then(deletedPlayer=>res.json(deletedPlayer))
    .catch(err=>res.json(err));
};
module.exports.editPlayer=(req,res)=>{
    const {name, position}=req.body;
    Player.findByIdAndUpdate(
        req.params.id,
        {   
            name,
            position
        },
        {
            new:true,
            runValidators:true
        }
    )
    .then(updatedPlayer=>res.json(updatePlayer))
    .catch(err=>res.status(400).json(err));
};
module.exports.onePlayer=(req,res)=>{
    Player.findById({_id:req.params.id})
    .then(onePlayer=>res.json(onePlayer))
    .catch(err=>res.json(err));
};
module.exports.allPlayers=(req,res)=>{
    Player.find()
    .then(allPlayers=>res.json(allPlayers))
    .catch(err=>res.json(err));
};