'use strict';
const fs = require('fs')
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let journals = JSON.parse(fs.readFileSync('./data/journals.json','utf-8'))
     journals = journals.map((el) => {
      return {
        ...el, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
     })
     return queryInterface.bulkInsert('Journals', journals)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Journals')
  }
};
