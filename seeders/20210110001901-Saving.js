'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('savings', [
      {
        id: 20,
        profile_number: 11,
        saving_number: 11111,
        balance: 8464.52,
        type: 'SAVING'
      },
      {
        id: 21,
        profile_number: 11,
        saving_number: 2222,
        balance: 100.00,
        type: 'SAVING'
      },
      {
        id: 22,
        profile_number: 11,
        saving_number: 3333,
        balance: 1500.00,
        type: 'SAVING'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('savings')
  }
};
