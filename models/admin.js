const mongoose=require("mongoose")
const Admin= new mongoose.Schema({
    metaTitle:{type:String},
    pageUrl:{type:String},
    metaDescription:{type:String},
    metaKeyword:{type:String},
    textcontent:{type:String},
    imageUrl:{type:String},
    altImage:{type:String},
    titleImage:{type:String}
},
{ timestamps: true }
);
module.exports = mongoose.model("Admin", Admin);