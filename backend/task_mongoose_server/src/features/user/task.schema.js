const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
    "title":{type:String,required:true},
    "isActive":{type:Boolean,default:true,required:true},
    // "members":{type:Number,min:2,max:10,required:true},
    "deadline":{type:String, default:"2022-10-10", required:true}
})
const Task=mongoose.model("task",taskSchema)
module.exports=Task