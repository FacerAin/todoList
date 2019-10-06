//비어있는 파일일때 예외처리
const fs = require('fs')
const path = require('path')
const importdata = (req, res) => {
    data = []
    fs.readFile(path.join( __dirname, 'model/todo.json'), (err, data) => {
        if (err) {
            throw err;
        } else {
            data = JSON.parse(data)
            res.json(data)
            console.log(data)
        }
    })
}
module.exports = importdata