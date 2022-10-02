const express = require("express");
const Message = require("./feeds.schema");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let NewMessage = await Message.find();
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

module.exports = app;