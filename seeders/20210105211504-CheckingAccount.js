'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('checkings', [{
      customer_number: 4,
      account_type: 'checking',
      balance: 3408.88,
      account_number: 654321987
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('checkings', null, {})
  }
};
