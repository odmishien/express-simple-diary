const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const port = 3000;
const db = new sqlite3.Database("diary");

// init database
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS entries (title, content, createdAt)");
});

app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// router
app.get("/", (req, res) => {
  db.serialize(() => {
    db.all("select * from entries", (err, rows) => {
      if (!err) {
        res.render("index", { entries: rows });
      } else {
        console.log(err);
      }
    });
  });
});

app.post("/entry", (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  let createdAt = new Date().toString();
  db.serialize(() => {
    db.run(
      "insert into entries (title, content, createdAt) values ($title,$content,$createdAt)",
      {
        $title: title,
        $content: content,
        $createdAt: createdAt
      }
    );
    db.all("select * from entries", (err, rows) => {
      if (!err) {
        res.render("index", { entries: rows });
      } else {
        console.log(err);
      }
    });
  });
});

// server listen on localhost:3000
app.listen(port, () => console.log(`Example app litening on port ${port}!`));
