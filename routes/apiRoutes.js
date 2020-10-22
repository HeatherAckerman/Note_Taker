var path = require("path");

module.exports = function (app) {

    app.get("/apiRoutes", function (req, res) {
        res.send("apiRoutes Works!");
    });

    //GET /api/notes reads db.json and returns saved notes as JSON

    //POST /api/notes receives new note, add to db.json, return new note

    //DELETE /api/notes/:id receive note id to be deleted, read notes and delete, then rewrite updated file


};