const express = require("express");
const Comment2 = require("../models/comment2.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let NewComment2 = await Comment2.find(
      {},
      { _id: 1, day: 1, time: 1, email: 1, message: 1 }
    );
    res.send(NewComment2);
  } catch (e) {
    console.log(e);
    res.status(401).send("server Error!");
  }
});

//==============Post=========>
app.post("/", async (req, res) => {
  let u = req.body;
  try {
    let newComment2 = await Comment2.create(u);
    res.send(newComment2);
  } catch (e) {
    res.status(505).send(e.message);
  }
});


app.get("/:q", async (req, res) => {
  const { q } = req.params;
  try {
    let u = await Comment2.find({ message: q });
    res.send(u);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//============Delete===========>
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let u = await Comment2.deleteOne({ _id: id });
    //res.send(u)
    res.send(`Comment2 Deleted!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = app;
