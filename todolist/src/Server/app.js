const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./api')

app.use(bodyParser.json())
app.use('/api',api)

app.listen(3001,()=>{
    console.log('Server is running on port 3001!')
})