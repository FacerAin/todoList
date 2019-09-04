const fs = require('fs')
console.log('savedata')
let testdataset = [{
        num: 1,
        title: 'test1',
        date: new Date(),
        description: 'test Description'
    },
    {
        num: 2,
        title: 'test1',
        date: new Date(),
        description: 'test Description'
    }]
const savedata = (res,req)=>{
    let data = []
    const gettodo = () => {
        return new Promise((resolve, reject) => {
            let todos;
            fs.readFile('../model/todo.json', (err, data) => {
                if (err) {
                    throw err;
                } else {
                    todos = JSON.parse(data)
                    resolve(todos)
                    console.log(todos)
                }
            })

        })
    }

    const appenddata = () =>{
        return new Promise((resolve,reject) =>{
            fs.appendFile('../model/todo.json',JSON.stringify(data,null),(err)=>{
                if(err){
                    throw err;
                }
                resolve(data)
                console.log(data)
            })
        })
    }

    const savetodo = (todos) => {
        return new Promise((resolve, reject) => {
            fs.writeFile('../model/todo.json', JSON.stringify(todos, null), (err) => {
                if (err) {
                    throw err;
                }
                resolve(todos)
            })
        })
    }
}