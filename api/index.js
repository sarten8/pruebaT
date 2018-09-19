const express = require('express')

const app = express()
const port = process.env.port || 3002

app.use(express.json())


app.post('/mensaje', (req, res) => {
    const { msg } = req.body;
    console.log(req.body)
    res.json({ respuesta: msg });
})


app.listen(port, () => {
    console.log(`Server en el puerto: ${ port }`)
})