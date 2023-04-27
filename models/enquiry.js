const mongoose=require("mongoose")
const Enquiry= new mongoose.Schema({
    fullName:{type:String,required:true},
    whatsappNumber:{type:String,required:true},
    emaiId:{type:String},
    neetStatus:{type:String},
    educationStatus:{type:String}
},
{ timestamps: true }
);
module.exports = mongoose.model("Enquiry", Enquiry);