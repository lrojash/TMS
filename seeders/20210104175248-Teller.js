'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tellers', [
      {
        user_id: 'u2223',
        password_digest: 'password1',
        admin: true,

      }, {
        user_id: 'u3332',
        password_digest: '123',
        admin: false,
      }
    ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tellers', null, {})
  }
};
