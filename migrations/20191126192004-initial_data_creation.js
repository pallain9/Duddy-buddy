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
      { saying: "" },
      { saying: "" },
      { saying: "" },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.deleteInsert('sayings', [
      { saying: "." },
      { saying: "ooh Sara, my love, my pet, my paramore, my nemesis." },
      { saying: "I forgot to put the beef stew away!  I am PORKED." },
      { saying: "Goff is a child, Laugh out Loud." },
      { saying: "No beers for me, i prefer a crisp cider" },
      { saying: "The greatest show on turf? Marshall Faulk? Kurt Warner? isaac brruce? ORLANDO PACE! " },
    ])
  },
};
