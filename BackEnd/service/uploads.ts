import multer from 'multer'
import express from 'express'


const uploads = express()

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (_req, file, cb) {
        const uniqueSuffix = Date.now() 
        cb(null,  uniqueSuffix +'-' + file.originalname )
      }
})

const upload = multer({ storage: storage })

uploads.post('/', upload.single('avatar'), function (_req, _res, _next) {
    _res.status(201).send("File created");
  })

  
export default uploads
