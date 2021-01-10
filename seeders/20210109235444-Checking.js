'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('checkings', [
      {
        id:10,
        profile_number: 11,
        checking_number: 718293,
        balance: 8464.52
      },
      {
        id:11,
        profile_number:11,
        checking_number:987654,
        balance: 100.00
      },
      {
        id: 12,
        profile_number: 11,
        checking_number: 321654,
        balance: 1500.00
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('checkings')
  }
};
