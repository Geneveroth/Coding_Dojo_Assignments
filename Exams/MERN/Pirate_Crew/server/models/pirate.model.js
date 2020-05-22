const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please enter a name for the pirate.']
    },
    image:{
        type:String,
        required:[true, 'Please provide an image url.']
    },
    treasure:{
        type:Number,
        required:[true, 'Please select a number of treasure chests.']
    },
    phrase:{
        type:String,
        required:[true,'Please enter a catch phrase.']
    },
    position:{
        type:String,
        required:[true,'Please choose a crew position.']
    },
    leg:{
        type:Boolean,
        required:[true, 'Please specify if the pirate has a peg leg.']
    },
    eye:{
        type:Boolean,
        required:[true, 'Please specify if the pirate has an eye patch.']
    },
    hand:{
        type:Boolean,
        required:[true, 'Please specify if the pirate has a hook hand.']
    }
}, {timestamps: true});

module.exports.Pirate=mongoose.model('Pirate',PirateSchema);