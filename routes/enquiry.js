const express = require("express")
const router = express.Router();
const Enquiry = require("../models/enquiry")

//get api
router.get('/', async (req, res) => {
    debugger
    try {
        const enquiry = await Enquiry.find()
        res.status(200).send({
            message: "get all enquiry successfully ",
            Data: enquiry,
            recordCount: enquiry.length
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


// get details by id

router.get('/:id', async (req, res) => {
    try {
        const enq = await Enquiry.findById(req.params.id);
        if (!enq) {
            res.status(300).send({ message: "Enquiry Id is not present" })
            return
        } else {
            res.status(200).send({
                message: "Enquiry find Successfully",
                Data: [enq]
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

// delete by id
router.delete('/:id', async (req, res) => {
    try {
        const enq = await Enquiry.findByIdAndDelete(req.params.id);
        if (!enq) {
            res.status(300).send({ message: "Enquiry Id is not present" })
            return
        } else {
            res.status(200).send({
                message: "Enquiry Deleted Successfully",
                Data: [enq]
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
//patch by id
// router.put('/:id', async (req, res) => {
//     try {
//         const emp = await Employee.findByIdAndUpdate(req.params.id,
//             {
//                 $set: req.body,
//             },
//             { new: true });
//         res.status(200).send({ message: "Employee Updated Successfully", Data: emp })
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

//post api
router.post('/postenquiry', async (req, res) => {
    try {
        // let emp=  new Employee({
        //     name:req.body.name,
        //     position:req.body.position,
        //     dept:req.body.dept
        // })
        const enq = new Enquiry(req.body);
        const save = await enq.save();
        res.status(201).send({
            message: 'Enquiry created successfully',
            Data: save
        });
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = router

