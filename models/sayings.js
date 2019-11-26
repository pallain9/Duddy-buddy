const Sayings = (connection, Sequelize) => {
    return connection.define('sayings', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        saying: { type: Sequelize.STRING },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
        deletedAt: { type: Sequelize.DATE },
    }, { paranoid: true })
}

module.exports = Sayings