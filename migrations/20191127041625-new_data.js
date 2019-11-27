'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('sayings', [
      { saying: "I've never blown my nose!" },
      { saying: "I ignore it because I dont like it." },
      { saying: "You guys see bangbros trying to buy naming rights for the Miami heat's arena?" },
      { saying: "They are shorts.... They look better from a distance!" },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('sayings', [
      { saying: "I've never blown my nose!" },
      { saying: "I ignore it because I dont like it." },
      { saying: "You guys see bangbros trying to buy naming rights for the Miami heat's arena?" },
      { saying: "They are shorts.... They look better from a distance!" },
    ])
  }
};
