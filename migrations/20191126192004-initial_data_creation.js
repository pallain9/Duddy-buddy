'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('teams', [
      { saying: "Ooooh baby, rub my chest with the buttah" },
      { saying: "ooh Sara, my love, my pet, my paramore, my nemesis" },
      { saying: "I forgot to put the beef stew away!  I am PORKED" },
      { saying: "Ooooh baby, rub my chest with the buttah" },
      { saying: "Ooooh baby, rub my chest with the buttah" },
      { saying: "Ooooh baby, rub my chest with the buttah" },
      { saying: "Ooooh baby, rub my chest with the buttah" },
      { saying: "Ooooh baby, rub my chest with the buttah" },
      { saying: "Ooooh baby, rub my chest with the buttah" },
      { saying: "Ooooh baby, rub my chest with the buttah" },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.dropTable('users');
    */
  }
};
