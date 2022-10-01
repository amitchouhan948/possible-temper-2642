const express = require("express");
const Message = require("../models/message.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let NewMessage = await Message.find(
      {},
      { _id: 1, day: 1, time: 1, email: 1, message: 1 }
    );
    res.send(NewMessage);
  } catch (e) {
    console.log(e);
    res.status(401).send("server Error!");
  }
});

//==============Post=========>
app.post("/", async (req, res) => {
  let u = req.body;
  try {
    let newMessage = await Message.create(u);
    res.send(newMessage);
  } catch (e) {
    res.status(505).send(e.message);
  }
});

app.get("/:q", async (req, res) => {
  const { q } = req.params;
  try {
    let u = await Message.find({ message: q });
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
    let u = await Message.deleteOne({ _id: id });
    //res.send(u)
    res.send(`Movie Deleted!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Message Error");
  }
});
module.exports = app;
