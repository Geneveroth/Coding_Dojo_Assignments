const usersCtl=require('../controllers/users.controller');

module.exports=app=>{
    app.post('/api/users', usersCtl.register);
    app.post('/api/users/login', usersCtl.login);
    app.delete('/api/users/logout', usersCtl.logout); //not actually deleting a user, just deleting the cookie on logout
}