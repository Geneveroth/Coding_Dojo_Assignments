const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required:[true, 'Please enter a Name'],
        minlength:[3, 'Please enter a name with at least 3 characters.']
    }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);
