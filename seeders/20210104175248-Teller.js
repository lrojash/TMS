'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tellers', [
      {
        userId: 'u2223',
        password: 'password1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tellers', null, {})
  }
};
