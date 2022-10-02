const mongoose = require("mongoose");

const messageSchema  = new mongoose.Schema({
    id: {type:Number},
    day: {type:String},
    time:{type:String},
    email: {type:String},
    message: {type:String},
})

const Message = mongoose.model("message",messageSchema)
module.exports = Message;