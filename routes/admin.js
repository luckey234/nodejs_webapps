const express = require("express")
const router = express.Router();
const Admin = require("../models/admin")

//get api
router.get('/', async (req, res) => {
    debugger
    try {
        const admin = await Admin.find()
        res.status(200).send({
            message: "get all Succesfully ",
            Data: admin,
            recordCount: admin.length
        })
    } catch (error) {
        res.status(500).send(error);
    }
})
//post api
router.post('/postDetail', async (req, res) => {
    try {
       
        const admin = new Admin(req.body);
        const save = await admin.save();
        res.status(201).send({
            message: 'Description Created successfully',
            Data: save
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

//update api
router.put('/updateadmin/:id',async (req,res)=>{
    try {
        const admin=await Admin.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {new:true});
            res.status(200).send({ message: "Admin Description Updated Successfully", Data: admin })
    } catch (error) {
        res.status(500).send(error);
    
    }
})
//getById
router.get('/:id',async (req,res)=>{
    try {
        const admin=await Admin.findById(req.params.id)
          if(!admin){
            res.status(300).send({ message: " Id is not present" })
          }else{
            res.status(200).send({
                message: "pacthed data Successfully",
                Data: [admin]
            });
          }
    } catch (error) {
        res.status(500).send(error);
    
    }
})
module.exports = router
