const fs = require('fs')
console.log('importdata')
const importdata = (req, res) => {
    let data = []
    const getfiledata = () => {
        return new Promise((resolve, reject) => {
            fs.readFile('../model/todo.json', (err, data) => {
                if (err) {
                    throw err;
                } else {
                    data = JSON.parse(data)
                    resolve(data)
                    console.log(data)
                }
            })
        })
    }
}
