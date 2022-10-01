const express = require("express");
const messageRouter = require("../router/message.router");
const Dbconnect = require("../config/db");

const app = express();
app.use(express.json());
app.use("/message", messageRouter);

app.get("/", (req, res) => {
  res.send("<h2>Hello world!</h2>");
});

app.listen(8080, async () => {
  await Dbconnect();
  console.log("Stared at: http://localhost:8000");
});
