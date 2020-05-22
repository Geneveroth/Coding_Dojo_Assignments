const AuthorController = require ('../controllers/author.controller');
module.exports = app=>{
app.post('/api/author', AuthorController.createAuthor)
app.delete('/api/author/:id', AuthorController.deleteAuthor)
app.put('/api/author/:id', AuthorController.editAuthor)
app.get('/api/author/:id', AuthorController.oneAuthor)
app.get('/api/author', AuthorController.allAuthors)
}
