
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
        writeFileAsync("db/db.json", JSON.stringify(notes)).then(function () {
            console.log(notes)
        });
        res.json(newNote);
    })

    //DELETE /api/notes/:id receive note id to be deleted, read notes and delete, then rewrite updated file
    //I haven't been able to test this because there is something wrong with my index.js
    //I could not wrap my head around the problem but I will be sure to work on this durning my next tutoring session to get a better understanding.
    app.delete("/api/notes:id", function (req, res) {
        let deleteNoteID = parseInt(req.params.id);

        for (let i = 0; i < notes.length; i++) {
            if (deleteNoteID === notes[i].ID) {
                notes.splice(i, 1);

                let noteJSON = JSON.stringify(notes, null, 2);

                writeFileAsync("./db/noteContents.json", noteJSON).then(function () {
                    console.log(notes);
                });
            }
        }
        res.json(notes);
    })
}