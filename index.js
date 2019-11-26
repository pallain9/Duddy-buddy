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

app.get('/sayings/:id', async (request, response) => {
    const Op = Sequelize.Op
    const matchingTeam = await models.Sayings.findAll({
        where: {
            [Op.or]: [{ id: request.params.id }, { abbreviation: request.params.id }]
        }
    })
    if (matchingTeam.length) {
        response.send(matchingTeam)
    } else {
        response.sendStatus(404)
    }
})

app.use(bodyParser.json())

app.post('/sayings', async (request, response) => {
    const { location, mascot, abbreviation, conference, division } = request.body
    if (!location || !mascot || !abbreviation || !conference || !division) {
        response.status(400).send('The following fields are required: location, mascot, abbreviation, conference, division')
    }


    const newTeam = await models.Sayings.create({ location, mascot, abbreviation, conference, division })

    response.sendStatus(201).send(newTeam)
})


module.exports = app