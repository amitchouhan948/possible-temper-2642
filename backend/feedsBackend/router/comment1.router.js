const express = require("express");
const Comment1 = require("../models/comment1.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let NewComment1 = await Comment1.find(
      {},
      { _id: 1, day: 1, time: 1, email: 1, message: 1 }
    );
    res.send(NewComment1);
  } catch (e) {
    console.log(e);
    res.status(401).send("server Error!");
  }
});

//==============Post=========>
app.post("/", async (req, res) => {
  let u = req.body;
  try {
    let newComment1 = await Comment1.create(u);
    res.send(newComment1);
  } catch (e) {
    res.status(505).send(e.message);
  }
});

app.get("/:q", async (req, res) => {
  const { q } = req.params;
  try {
    let u = await Comment1.find({ message: q });
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
    let u = await Comment1.deleteOne({ _id: id });
    //res.send(u)
    res.send(`Comment1 Deleted!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = app;
