const bodyParser = require('body-parser')
const express = require('express')
const Sequelize = require('sequelize')
const models = require('./models')
var app = express()

app.listen(1337, () => { console.log('listening on 1337') })

app.get('/sayings', async (request, response) => {
    const saying = await models.Sayings.findAll()
    response.send(saying)
})


app.use(bodyParser.json())

app.post('/sayings', async (request, response) => {
    const saying = request.body
    if (!saying) {
        response.status(400).send('The following fields is required: saying')
    }


    const newSaying = await models.Sayings.create(saying)

    response.sendStatus(201).send(newSaying)
})


module.exports = app