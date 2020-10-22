var path = require("path");

module.exports = function (app) {

    //GET /notes returns notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
    //GET * returns index.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });
};
