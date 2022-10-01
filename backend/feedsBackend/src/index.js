const express = require("express");
const messageRouter = require("../router/message.router");
const comment1Router = require("../router/comment1.router");
const comment2Router = require("../router/comment2.router");
const Dbconnect = require("../config/db");
const cors = require("cors")
const compression = require("compression")


const app = express();
app.use(cors())
app.use(compression())
app.use(express.json());
app.use("/message", messageRouter);
app.use("/comments1", comment1Router);
app.use("/comments2", comment2Router);


app.get("/", (req, res) => {
  res.send("<h2>Hello world!</h2>");
});

app.listen(8080, async () => {
  await Dbconnect();
  console.log("Stared at: http://localhost:8080");
});
