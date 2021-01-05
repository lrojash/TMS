'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        field: 'user_id',
        unique:  true
      },
      password_digest: {
        type: Sequelize.STRING
      },
      question_one: {
        type: Sequelize.STRING
      },
      question_two: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN,
        required: true
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
    await queryInterface.dropTable('tellers');
  }
};