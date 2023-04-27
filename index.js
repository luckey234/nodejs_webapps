const expree =require("express")
const bodyparse=require("body-parser")
const cors=require("cors")
const mongoose = require('./db')
const Employeeeroutes=require("./routes/employee")
const AdminRoute=require("./routes/admin")
const consola=require("consola")
const imageRoute=require("./routes/image")
const sendMail = require("./routes/nodemailer");
const CountryRoutes=require("./routes/country")
const enquiryRoutes=require("./routes/enquiry")
const chatRoutes=require("./routes/chat")
const app=expree()

app.use(bodyparse.json())
app.use(cors());
app.listen(3000,()=>consola.success('server started at port 3000 😂'))

app.use('/employees',Employeeeroutes)
app.use('/countries',CountryRoutes)
app.use('/enquiry',enquiryRoutes)
app.use('/admin',AdminRoute)
app.use("/file", imageRoute);
app.use("/uploads", expree.static("uploads"));
app.use('/chat',chatRoutes)
app.get("/mail", sendMail);
app.get("", (req, res) => {
    res.status(200).json("API running successfully");
  });