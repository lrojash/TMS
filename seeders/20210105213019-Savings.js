'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('savings', [{
      customer_number: 4,
      balance: 43234.01,
      account_number: 123456,
      account_type: "savings"
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('savings', null,  {})
  }
};
