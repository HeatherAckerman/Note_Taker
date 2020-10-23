const fs = require("fs");
const notes = require("../Develop/db/db.json")
const util = require("util");



module.exports = function (app) {

    //GET /api/notes reads db.json and returns saved notes as JSON
    app.get("/api/notes", function (req, res) {
     
    });

    //POST /api/notes receives new note, add to db.json, return new note
    //Create ID
    app.post("/api/notes", function(req,res) {

    })

    //DELETE /api/notes/:id receive note id to be deleted, read notes and delete, then rewrite updated file
    app.delete("/api/notes:id", function(req,res) {

    })
}