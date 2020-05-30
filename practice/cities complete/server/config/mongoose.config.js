const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cities', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
});