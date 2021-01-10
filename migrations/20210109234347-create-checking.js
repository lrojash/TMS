'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('checkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      profileNumber: {
        type: Sequelize.INTEGER,
        field: 'profile_number',
        references: {
          model: 'accountprofiles',
          key: 'id'
        }
      },
      checkingNumber: {
        type: Sequelize.INTEGER,
        field: 'checking_number',
        primaryKey: true,
      },
      balance: {
        type: Sequelize.DECIMAL(10, 2)
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