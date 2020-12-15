const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.get("/search", (req, res) => {
  res.sendFile(__dirname + "search.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
