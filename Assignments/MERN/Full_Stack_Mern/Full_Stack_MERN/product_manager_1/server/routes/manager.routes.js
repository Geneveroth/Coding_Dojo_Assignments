const ManagerController = require('../controllers/manager.controller');
module.exports = function(app){
    app.post('/api/product', ManagerController.createProduct);
    app.get('/api/product', ManagerController.getAllProducts);
    app.get('/api/product/:id', ManagerController.getOneProduct);
    app.put('/api/product/:id', ManagerController.updateProduct);
    app.delete('/api/product/:id', ManagerController.deleteProduct);
}
