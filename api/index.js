const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.port || 3002

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.post('/mensaje', (req, res) => {
//     const { msg } = req.body;
//     console.log(msg)
//     res.send({ respuesta: msg });
// })

app.get('/mensaje/', (req, res) => {
    console.log(data)
    let data = req.query;
    res.json(data)
})


app.listen(port, () => {
    console.log(`Server en el puerto: ${ port }`)
})