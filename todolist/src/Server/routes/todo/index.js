const express = require('express')
const router = express.Router()


const managedata = require('./savedata')

router.post('/managedata',managedata)

module.exports=router;