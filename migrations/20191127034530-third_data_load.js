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
      { saying: "Greatest Athlete of all Time?  WRONG ITS MICHAEL PHELPS!!!!" },
      { saying: "I learned what I know selling Dysons." },
      { saying: "I was the best mighty-mite kicker this side of Canobie Lake!" },
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
      { saying: "Greatest Athlete of all Time?  WRONG ITS MICHAEL PHELPS!!!!" },
      { saying: "I learned what I know selling Dysons." },
      { saying: "I was the best mighty-mite kicker this side of Canobie Lake!" },
      { saying: "Why do I waste my time.  You obviously know nothing." },
    ])
  }
}