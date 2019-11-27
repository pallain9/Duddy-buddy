const Sequelize = require('sequelize')
const SayingsModel = require('./sayings')

const connection = new Sequelize('DuddyBuddy', 'pallain', 'Brayden9!', {
    host: 'mysql.chf9h2xzhwel.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})

const Sayings = SayingsModel(connection, Sequelize)

module.exports = {
    Sayings
}