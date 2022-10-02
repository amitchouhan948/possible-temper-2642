const express=require("express")
const cors = require('cors')
const connect= require("./config/db")
const taskRoutes=require("./features/user/task.route")
const messageRouter=require("./features/feeds/feeds.route")


const PORT= process.env.PORT || 8080;    //PORT should be dynamic

const app=express()
app.use(express.json())
app.use(cors())
app.use("/tasks",taskRoutes)


app.use("/messages", messageRouter);

app.get("/",(req,res)=>{
    res.send("Server is online")
})

app.listen(PORT,async()=>{

await connect()
    console.log(`server started at http://localhost:${PORT}`);
})