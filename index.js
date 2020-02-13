const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(express.urlencoded({ extended: true }));
// router
app.get("/", (req, res) => res.sendFile("index.html"));
app.post("/", (req, res) => {
  let message = req.body.message;
  console.log(message);
  res.send(message);
});

// server listen on localhost:3000
app.listen(port, () => console.log(`Example app litening on port ${port}!`));
