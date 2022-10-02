const express=require("express")
// const fs = require("fs")
const app=express.Router()

let Task=require("./task.schema")




app.get("/",async(req,res)=>{
    try{
            const taskList=await Task.find()
            res.send( taskList)
    }catch(err){
            res.status(401).send(err.message)
    }
})

app.get("/:id", async (req, res) => {

    try {
        const u = await Task.findById(req.params.id)
        res.send(u)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

app.post("/",async(req,res)=>{
    let a=req.body
    try{
       let   newtasks=await Task.create(a)
        res.send({
            token:`${newtasks.id}:${newtasks.title}:${newtasks.members}`
        })
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

app.delete("/:id",async(req,res)=>{
    console.log(req.params)
    
    const afterDel=await Task.findByIdAndDelete(req.params.id)
   
    res.status(200).send(afterDel)
   
})
app.patch("/:id", async (req, res) => {
    console.log(req.body.isActive)
    try{
        let a = await Task.findByIdAndUpdate(req.params.id, {isActive:req.body.isActive});
        console.log(a)
        res.send(a)
          }catch(e){
              res.status(500).send(e.message)
          }
});


module.exports=app