"use strict";

const db = require("./config/db");
const express = require("./config/express");

const app = express();

db.connect(function (err) {
    if (err) {
        console.log("Unable to connect to MySQL.");
        process.exit(1);
    } else {
        app.listen(4941, function () {
            console.log("Example server listening on container port: 4941");
        });
        module.exports = app;
    }
});