'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('transactionSavings', [{
      account_number: 123456,
      location: 'Bowser Castle',
      amount: 15000,
      interaction: 'deposit'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactionSavings', null, {})
  }
};
