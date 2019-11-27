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
      { saying: "With friends like me who needs enemies?" },
      { saying: "WHY DO I HAVE A MAN CHILD?! LIAM YOU CONSUME MY SALARY!!" },
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
      { saying: "With friends like me who needs enemies?" },
      { saying: "WHY DO I HAVE A MAN CHILD?! LIAM YOU CONSUME MY SALARY!!" },
    ])
  }
}
