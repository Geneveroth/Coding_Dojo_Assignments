const PirateController=require('../controllers/pirate.controller');
module.exports=app=>{
    app.post('/api/pirate', PirateController.createPirate)
    app.delete('/api/pirate/:id', PirateController.deletePirate)
    app.put('/api/pirate/:id', PirateController.editPirate)
    app.get('/api/pirate/:id', PirateController.onePirate)
    app.get('/api/pirate', PirateController.allPirates)
}