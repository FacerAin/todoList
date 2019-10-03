const express = require('express')
const router = express.Router()


const savedata = require('./savedata')
const importdata = require('./importdata')

router.post('/savedata',savedata)
router.post('/importdata',importdata)

module.exports=router;