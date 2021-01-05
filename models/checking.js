'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Checking.belongsTo(models.Customer, {
        foreignKey: 'customer_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // Checking.hasMany(models.Transactions, {
      //   foreignKey: 'account_number',
      //   as: 'transaction',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // })
    }
  };
  Checking.init({
    customerNumber: {
      type: DataTypes.INTEGER,
      field: 'customer_number',
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    accountType: DataTypes.DECIMAL(10,2),
    balance: DataTypes.INTEGER,
    accountNumber: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Checking',
    tableName: 'checkings'
  });
  return Checking;
};