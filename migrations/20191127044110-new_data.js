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
      { saying: "Looked great until he realized he had some witch legs" },
      { saying: "Nah, he has some demon black eyes.  He is luring you." },
      { saying: "You all know how much i believe in A.P." },
      { saying: "You guys see this Terrell Roberta story?" },
      { saying: "I'm so much better than all of you at seeing talent." },
      { saying: "Kalen Ballage." },
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
      { saying: "Looked great until he realized he had some witch legs" },
      { saying: "Nah, he has some demon black eyes.  He is luring you." },
      { saying: "You all know how much i believe in A.P." },
      { saying: "You guys see this Terrell Roberta story?" },
      { saying: "I'm so much better than all of you at seeing talent." },
      { saying: "Kalen Ballage." },
    ])
  }
};
