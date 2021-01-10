'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accountprofiles', [{
      id: 11,
      customer_number: 1
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accountprofiles')
  }
};
