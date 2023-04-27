const express = require("express")
const router = express.Router();
const Employee = require("../models/employee")

//get api
router.get('/', async (req, res) => {
    debugger
    try {
        const employee = await Employee.find()
        res.status(200).send({
            message: "get all teacher successfully ",
            Data: employee,
            recordCount: employee.length
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


// get details by id

router.get('/:id', async (req, res) => {
    try {
        const emp = await Employee.findById(req.params.id);
        if (!emp) {
            res.status(300).send({ message: "employee Id is not present" })
            return
        } else {
            res.status(200).send({
                message: "employee find Successfully",
                Data: [emp]
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

// delete by id
router.delete('/:id', async (req, res) => {
    try {
        const emp = await Employee.findByIdAndDelete(req.params.id);
        if (!emp) {
            res.status(300).send({ message: "employee Id is not present" })
            return
        } else {
            res.status(200).send({
                message: "employee Deleted Successfully",
                Data: [emp]
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
//patch by id
router.put('/:id', async (req, res) => {
    try {
        const emp = await Employee.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            { new: true });
        res.status(200).send({ message: "Employee Updated Successfully", Data: emp })
    } catch (error) {
        res.status(500).send(error);
    }
})

//post api
router.post('/postemployee', async (req, res) => {
    try {
        // let emp=  new Employee({
        //     name:req.body.name,
        //     position:req.body.position,
        //     dept:req.body.dept
        // })
        const emp = new Employee(req.body);
        const save = await emp.save();
        res.status(201).send({
            message: 'Employee created successfully',
            Data: save
        });
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = router

