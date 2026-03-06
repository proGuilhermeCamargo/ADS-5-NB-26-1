const express = require("express")
const cors = require("cors")

const application = express()
const port = 3000

application.use(cors())

application.get('/pitu', (req, res) => {
    res.send("pitu")
})

application.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})