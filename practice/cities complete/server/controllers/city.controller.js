const City = require('../models/City.model');

module.exports.createCity = (req, res) => {
  // this is like `db.cities.insert()`
  City.create(req.body)
    .then(createdCity => res.json(createdCity))
    .catch(err => res.json(err));
}
  
module.exports.getAll = (req, res) => {
  // like `db.cities.find()`
  City.find()
    .then(cities => res.json(cities))
    .catch(err => res.json(err));
}
  
module.exports.getOne = (req, res) => {
  City.findById(req.params.id)
    .then(city => res.json(city))
    .catch(err => res.json(err));
}

module.exports.delete = (req, res) => {
  City.findByIdAndDelete(req.params.id)
    .then(() => res.json({ status: 'success' }))
    .catch(err => res.json(err));
}

module.exports.update = (req, res) => {
  const { name, population, imageUrl, nice } = req.body;
  // platform shows findOne({ _id: req.params.id })
  City.findByIdAndUpdate(
    req.params.id,
    {
      name,
      population,
      imageUrl,
      nice
    },
    // req.body,
    {
      new: true,
      runValidators: true
    }
  )
    .then(updatedCity => res.json(updatedCity))
    .catch(err => res.json(err));
}