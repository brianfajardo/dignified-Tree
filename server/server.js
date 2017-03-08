const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res
        .status(404)
        .send({
            error: 'Page not found',
            name: 'Todo App v1.0'
        })
})

app.get('/users', (req, res) => {
    const users = [{
        name: 'Brian',
        age: 23
    }, {
        name: 'Adrian',
        age: 28
    }, {
        name: 'Anna',
        age: 26
    }];
    res.send(users)
})

app.listen(3000, () => console.log(`Server is running on localhost:3000`))

module.exports = {
    app
}