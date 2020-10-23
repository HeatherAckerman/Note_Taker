
const notes = require("../db/db.json")
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);



module.exports = function (app) {

    //GET /api/notes reads db.json and returns saved notes as JSON
    app.get("/api/notes", function (req, res) {

        res.json(notes)

    });

    //POST /api/notes receives new note, add to db.json, return new note
    //Create ID
    
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        let lastNoteID = notes[notes.length - 1]["ID"];
        let newNoteID = lastNoteID + 1;
        newNote["ID"] = newNoteID;
        
        console.log(newNote["ID"])

        notes.push(newNote)
        writeFileAsync("Develop/db/db.json", JSON.stringify(notes)).then(function () {
            console.log(notes)
        });
        res.json(newNote);
    })

    //DELETE /api/notes/:id receive note id to be deleted, read notes and delete, then rewrite updated file
    app.delete("/api/notes:id", function (req, res) {
     
    })
}