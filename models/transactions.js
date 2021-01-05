'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Checking, {
        foreignKey: 'account_number',
        as: 'account',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Transactions.belongsTo(models.Saving, {
        foreignKey: 'account_number',
        as: 'account',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  Transactions.init({
    accountNumber: {
      type:DataTypes.INTEGER,
      field: 'account_number',
      references: {
        model:'customers',
        key: 'id'
      },
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    location: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    interaction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transactions',
    tableName: 'transactions'
  });
  return Transactions;
};