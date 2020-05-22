const PlayerController = require ('../controllers/player.controller');
module.exports = app=>{
app.post('/api/player', PlayerController.createPlayer)
app.delete('/api/player/:id', PlayerController.deletePlayer)
app.put('/api/player/:id', PlayerController.editPlayer)
app.get('/api/player/:id', PlayerController.onePlayer)
app.get('/api/player', PlayerController.allPlayers)
}
