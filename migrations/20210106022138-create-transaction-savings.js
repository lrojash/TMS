'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactionSavings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountNumber: {
        type: Sequelize.INTEGER,
        field: 'account_number',
        references: {
          model: 'savings',
          key: 'account_number'
        }
      },
      location: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue: 0.00
      },
      interaction: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactionSavings');
  }
};