'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AccountProfile.belongsTo(models.Customer, {
        foreignKey: 'customer_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      AccountProfile.hasMany(models.Checking, {
        foreignKey: 'profile_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  AccountProfile.init({
    customerNumber: {
      type: DataTypes.INTEGER,
      field: 'customer_number',
      references: {
        model: 'customers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AccountProfile',
    tableName: 'accountprofiles'
  });
  return AccountProfile;
};