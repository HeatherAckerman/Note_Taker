//Start with basic server
//Dependencies
const express = require("express");
const app = express();

//Port-- use || and add Heroku server info
let PORT = process.env.PORT || 6000;

//Helps Express with data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes??? Figure out how to use routes from api and html.. check HotRestaurant as example







//Server.listen
app.listen(PORT, function() {
    console.log("Port " + PORT + "active ")
})