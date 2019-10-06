const express = require('express')
const router = express.Router();

router.post('/save',require('./savedata'))
router.post('/import',require('./importdata'))
module.exports = router;