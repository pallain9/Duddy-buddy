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
      { saying: "Looks like Liam likes falling on his face or eating mulch.  Might be the reason he is a giant?" },
      { saying: "I knew before anybody outside the franchise did." },
      { saying: "Put Henderson in and trade gurley for a pack of Pall Mall non-filters." },
      { saying: "baby" },
      { saying: "baby, I am pressed against my zippah" },
      { saying: "You see, there are athletes, then there is Dustin.  If My parents did not leave me at Canobie I would have been the starting guard on the basketball team" },
      { saying: "I hate my mom twice as much as she loves me." }
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
      { saying: "Looks like Liam likes falling on his face or eating mulch.  Might be the reason he is a giant?" },
      { saying: "I knew before anybody outside the franchise did." },
      { saying: "Put Henderson in and trade gurley for a pack of Pall Mall non-filters." },
      { saying: "baby" },
      { saying: "baby, I am pressed against my zippah" },
      { saying: "You see, there are athletes, then there is Dustin.  If My parents did not leave me at Canobie I would have been the starting guard on the basketball team" },
      { saying: "I hate my mom twice as much as she loves me." }
    ])
  }
};
