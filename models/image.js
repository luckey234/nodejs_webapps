const mongoose =require('mongoose')

const ProfileImageSchema=mongoose.Schema(
   {
      images:{type:String,default:"uploads/default.png"},
      alt:{type:String,default:"default"},
   },
   { timestamps: true })


module.exports=mongoose.model('ProfileImg',ProfileImageSchema)