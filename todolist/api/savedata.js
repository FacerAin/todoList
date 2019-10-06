//[{"num":1,"title":"test1","date":"10/06/2019","description":"test Description","complete":false},{"num":2,"title":"test2","date":"10/06/2019","description":"test Description","complete":false}]

const fs = require('fs')
const path = require('path')

const savedata = (req,res)=>{
    console.log("SAVE S")
    console.log(req.body.todos)
    let data = req.body.todos
    fs.writeFile(path.join(__dirname,'model/todo.json'),data,'utf-8',(err,data) => {
        if(err) {
            throw err;
        }
        else{
            console.log("Success Save")
        }
    })
    
}

module.exports = savedata