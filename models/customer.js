'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.Checking, {
        foreignKey: 'customer_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Customer.hasMany(models.Saving, {
        foreignKey: 'customer_number',
        as: 'customer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  Customer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return Customer;
};