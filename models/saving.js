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

      Saving.belongsTo(models.AccountProfile, {
        foreignKey: 'profile_number',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

    }
  };
  Saving.init({
    profileNumber: {
      type: DataTypes.INTEGER,
      field: 'profile_number',
      references: {
        model: 'accountprofiles',
        key: 'id'
      }
    },
    savingNumber: {
      type: DataTypes.INTEGER,
      field: 'saving_number',
      primaryKey: true
    },
    balance: DataTypes.DECIMAL(10, 2),
    limit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saving',
    tableName: 'savings'
  });
  return Saving;
};