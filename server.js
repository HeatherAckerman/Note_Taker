//Dependencies
const express = require("express");
const app = express();

//Port
let PORT = process.env.PORT || 6020;

//Helps Express with data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"));

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//Server.listen
app.listen(PORT, function() {
    console.log("Port " + PORT + " active")
})