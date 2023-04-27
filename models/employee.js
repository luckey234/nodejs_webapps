const mongoose=require("mongoose")
const Employee= new mongoose.Schema({
    name:{type:String,required:true},
    position:{type:String},
    dept:{type:String}
},
{ timestamps: true }
);
module.exports = mongoose.model("Employee", Employee);