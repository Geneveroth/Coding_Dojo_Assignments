const citiesCtl = require('../controllers/city.controller');
const {authenticate}=require('../config/jwt.config')//

module.exports = app => {
  app.get('/api/cities', authenticate, citiesCtl.getAll);//this checks the auth on this request and will stop if not authorized
  app.post('/api/cities', citiesCtl.createCity);
  app.get('/api/cities/:id', citiesCtl.getOne);
  app.delete('/api/cities/:id', citiesCtl.delete);
  app.put('/api/cities/:id', citiesCtl.update);
}