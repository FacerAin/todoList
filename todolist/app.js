const fs=require('fs')
const express=require('express')
const bodyParser=require('body-parser');
const app=express()

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    next()
  })

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log(req.headers["user-agent"]);
    next();
});
app.use('/api',require('./api'))
app.listen(3001,()=>{
    console.log('Server is running on port 3001!');
});