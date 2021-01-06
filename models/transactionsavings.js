'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionSavings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransactionSavings.belongsTo(models.Saving, {
        foreignKey: 'account_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  TransactionSavings.init({
    accountNumber: {
      type:DataTypes.INTEGER,
      field: 'account_number',
      references:{
        model: 'savings',
        key: 'account_number'
      }
    },
    location: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10,2),
    interaction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TransactionSavings',
    tableName: 'transactionSavings'
  });
  return TransactionSavings;
};