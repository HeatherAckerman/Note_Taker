const path = require("path");
const fs = require("fs");


module.exports = function (app) {

    //GET /api/notes reads db.json and returns saved notes as JSON
    app.get("/api/notes", function (req, res) {
        fs.readFile("../Develop/db/db.json", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            }

            console.log(data);

        });
        res.sendFile(path.join(__dirname, "../Develop/db/db.json"));
    });

    //POST /api/notes receives new note, add to db.json, return new note
    app.post("/api/notes", function (req, res) {
        fs.writeFile("../Develop/db/db.json", "utf8", function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");

        });
    })
    //DELETE /api/notes/:id receive note id to be deleted, read notes and delete, then rewrite updated file
}