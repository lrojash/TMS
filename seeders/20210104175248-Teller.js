'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tellers', [
      {
        user_id: 'u2223',
        password: 'password1',
        admin: true,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        user_id: 'u3332',
        password: '123',
        admin: false,
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tellers', null, {})
  }
};
