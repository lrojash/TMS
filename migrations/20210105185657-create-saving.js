'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('savings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      customerNumber: {
        type: Sequelize.INTEGER,
        field: 'customer_number',
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      balance: {
        type: Sequelize.DECIMAL(10, 2),
      },
      accountType: {
        type: Sequelize.STRING,
        field: 'account_type',
      },
      limit: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      accountNumber: {
        type: Sequelize.INTEGER,
        field: 'account_number',
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('savings');
  }
};