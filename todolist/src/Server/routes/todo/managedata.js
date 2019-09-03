const fs = require('fs')
console.log('managedata')
let todos = [{num:1,title: 'test1',date: new Date(),description:'test Description'},
{num:2,title: 'test1',date: new Date(),description:'test Description'}]
const gettodo = () => {
    return new Promise((resolve,reject) => {
        let todos;
        fs.readFile('../model/todo.json',(err,data)=>{
            if(err){
                throw err;
            }
            else{
                todos = JSON.parse(data)
                resolve(todos)
                console.log(todos)
            }
        })
        
    })
}

const savetodo = (todos) =>{
    return new Promise((resolve,reject)=>{
        fs.writeFile('../model/todo.json',JSON.stringify(todos,null),(err)=>{
            if(err){
                throw err;
            }
            resolve(todos)
        })
    })
}
