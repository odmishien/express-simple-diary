const express = require("express");
const app = express();
const port = 3000;

let entries = [];

app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// router
app.get("/", (req, res) => res.render("index", { entries: entries }));
app.post("/entry", (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  let createdAt = new Date();
  let entry = {
    title: title,
    content: content,
    createdAt: createdAt,
  };
  entries.push(entry);
  res.render("index", { entries: entries });
});

// server listen on localhost:3000
app.listen(port, () => console.log(`Example app litening on port ${port}!`));
