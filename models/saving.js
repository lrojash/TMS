'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Saving.belongsTo(models.Customer, {
        foreignKey: 'customer_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Saving.hasMany(models.Transactions, {
        foreignKey: 'account_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

    }
  };
  Saving.init({
    customerNumber: {
      type: DataTypes.INTEGER,
      field: 'customer_number',
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    balance: DataTypes.DECIMAL(10, 2),
    accountType: DataTypes.STRING,
    limit: DataTypes.INTEGER,
    accountNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saving',
    tableName: 'savings'
  });
  return Saving;
};