'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactions', [{
      account_number: 654321987,
      location: 'Mushroom Kingdom',
      amount: 25.13,
      interaction: 'purchase'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {})
  }
};
