const mongoose = require('mongoose')
const consola=require('consola')

// mongoose.connect('mongodb://localhost:27017/uxDbcrud').then(()=>{
//     consola.success('database connected successfully 😂',new Date().toDateString())
// }).catch((err)=>{
//     consola.error('error occurs in db'+err)
// })



mongoose.connect('mongodb+srv://luckypandeyji2:G7liLUYEKwHBhJzl@cluster0.hklkz4y.mongodb.net/?retryWrites=true&w=majority/uxDbcrud').then(()=>{
    consola.success('database connected successfully 😂')
}).catch((err)=>{
    consola.error('error occurs in db'+err)
})
            
 module.exports=mongoose