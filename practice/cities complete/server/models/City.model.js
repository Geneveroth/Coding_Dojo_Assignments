const mongoose = require('mongoose');

// in Django, this would be `class City(models.Model):`
const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'Please provide a name!'
    ],
    minlength: [
      3,
      'Please provide a name that is at least 3 characters.'
    ]
  },
  population: {
    type: Number,
    required: [
      true,
      'Please provide a population!'
    ]
  },
  imageUrl: {
    type: String,
    required: [
      true,
      'Please provide an image URL!'
    ]
  },
  nice: {
    type: Boolean,
    required: [
      true,
      'Please specify if the city is nice.'
    ]
  }
}, {
  // created_at = models.DateTimeField(auto_now_add=True)
  // updated_at = models.DateTimeField(auto_now=True)
  timestamps: true
});

const City = mongoose.model('City', CitySchema);

module.exports = City;