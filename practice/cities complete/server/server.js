const express = require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser')//must npm i cookie-parser
require('dotenv').config({path:__dirname+'../.env'});//must npm i dotenv, this allows us to grab secret key from any file
console.log(process.env.SECRET_KEY);
require('./config/mongoose.config');
const userRoutes=require('./routes/users.routes');
const app = express();

app.user(cookieParser());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'//this must match client url, not server
}));

const citiesRoutesFunc = require('./routes/city.routes');
citiesRoutesFunc(app);
userRoutes(app);

app.listen(8000, () => console.log('listening on port 8000'));