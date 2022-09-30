const express = require("express")

const app = express()
app.use(express.json());


app.get("/", (req, res) => {
    res.send("<h2>Hello world!</h2>");
  });
  

app.listen(8080, ()=>{
    console.log("Stared at: http://localhost:8080");
})