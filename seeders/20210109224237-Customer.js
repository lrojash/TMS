'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      id: 1,
      first_name: 'Mario',
      last_name: 'Bros',
      date_of_birth: '04-25-1990'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers')
  }
};
