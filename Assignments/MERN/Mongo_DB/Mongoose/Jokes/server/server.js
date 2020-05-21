const express=require('express');
const app=express();

require("./config/mongoose.config");
app.use(express.json());

const AllJokeRoutes = require("./routes/jokes.routes");
AllJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
