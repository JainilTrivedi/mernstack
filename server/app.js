const dotenv = require("dotenv");
const express = require("express");
const path = require('path');
const app = express();


//MOngodb, mongoose is used to connect to mongodb
dotenv.config({ path: path.resolve(__dirname, './config.env')});
require('./conn/db');

//const USER = require('./model/usersScheme');  getting the exported User from userSchema.js file

app.use(express.json()); // without this we wont be able to see the data , we get undefined insetead of seeing the data. this is also middleware

//express and middlewares
app.use(require("./router/auth")); // linking the router files to keep this file clean

// the below lines wont be used as it gets the requid routes from the app.use

const middleware = (req,res,next) =>{

    console.log("Inside middle ware");
    next()
}
app.get("/",middleware,(req,res)=>{
    console.log("inside get");
    res.send("Inside get");
});


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Listening to port number ${PORT}`);
});