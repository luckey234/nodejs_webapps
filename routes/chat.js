const express = require("express")
const router = express.Router();
const http=require('http')
//get api
router.get('/', async (req, res) => {
    try {
        res.status(200).send({
            message: "Chat active ...............",
        })
    } catch (error) {
        res.status(500).send(error);
    }
})
// const server=http.createServer(router)
// const io=require('socket.io')
// io.on('connection',(socket)=>{
//     console.log('new conection made...')
// })

module.exports = router

