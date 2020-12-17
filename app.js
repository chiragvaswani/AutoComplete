const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/", (req, res) => {
  res.cookie(req.body.username);
  res.redirect("/search");
});

app.get("/search", (req, res) => {
  console.log(res.cookie);
  res.sendFile(__dirname + "/index.html");
});

app.listen(8000, () => console.log("Server running on port 3000"));
