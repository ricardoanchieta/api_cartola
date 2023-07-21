const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

app.listen(3333)

app.use(cors())

app.get('/stats', (req, res) => {
    axios.get('https://api.cartola.globo.com/atletas/mercado')
        .then(function (response) {
            console.log(response.data)
            console.log(response.headers)
            console.log(response.status)

            return res.json(response.data)
        })
        .catch(function (error) {
            console.error(error)
            return res.status(500).json({ error: 'Something went wrong' })
        })
})
