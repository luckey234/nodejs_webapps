const router = require('express').Router();
const multer = require('multer')
const ProfileImageSchema = require("../models/image");

//get api
router.get('/', async (req, res) => {
    try {
        const images = await ProfileImageSchema.find()
        res.status(200).send({
            message: "get all pictures successfully ",
            Data: images,
            recordCount: images.length
        })
    } catch (error) {
        res.status(500).send(error);
    }
})



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject file details
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})
router.post('/uploads', upload.single('images'), async (req, res) => {
    let data = `${req.file.path}`;
debugger
    const image = new ProfileImageSchema({
        images: `${"localhost:3000/"}${req.file.path.slice(0, 7)}/${req.file.filename
            }`,
            altImage:req.body.alt
    });
    try {
        const images = await image.save();
        res.status(201).send({
            message: "Images Uploaded Successfully",
            imagesUrl: images["images"],
            altImage:req.body.alt
        });
    } catch (error) {
        res.status(404).json("Not Found");
    }
})
module.exports = router