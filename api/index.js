const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.port || 3002

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.options('/mensaje/', cors()) 

app.post('/mensaje/', cors(), (req, res) => {
    const { msg } = req.body;
    console.log(msg)
    res.json( msg );
})

app.get('/mensaje/', cors(), (req, res) => {
    let data = req.query;
    console.log(data)
    res.json(data)
})


app.listen(port, () => {
    console.log(`Server en el puerto: ${ port }`)
})