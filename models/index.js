const Sequelize = require('sequelize')
const SayingsModel = require('.')

const connection = new Sequelize('DuddyBuddy', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})

const Sayings = SayingsModel(connection, Sequelize)

module.exports = {
    Sayings
}