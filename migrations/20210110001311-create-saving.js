'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('savings', {
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
      savingNumber: {
        type: Sequelize.INTEGER,
        field: 'saving_number',
        primaryKey: true
      },
      balance: {
        type: Sequelize.DECIMAL(10,2)
      },
      limit: {
        type: Sequelize.INTEGER
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