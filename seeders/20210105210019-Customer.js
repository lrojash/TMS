'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      first_name: 'Mario',
      last_name: 'No-Last',
      date_of_birth: '04-25-1990',
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {})
  }
};
