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
      Checking.belongsTo(models.AccountProfile, {
        foreignKey: 'profile_number',
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  };
  Checking.init({
    profileNumber: { 
      type: DataTypes.INTEGER,
      field: 'profile_number',
      references: {
        model: 'accountprofiles',
        key: 'id'
      }
    },
    checkingNumber: {
      type: DataTypes.INTEGER,
      field: 'checking_number',
      primaryKey: true,
    },
    balance: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Checking',
    tableName: 'checkings'
  });
  return Checking;
};