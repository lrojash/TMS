'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('checkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      accountType: {
        type: Sequelize.STRING,
        field: 'account_type'
      },
      balance: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue: 0.00   
      },
      accountNumber: {
        type: Sequelize.INTEGER,
        field: 'account_number'
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
    await queryInterface.dropTable('checkings');
  }
};