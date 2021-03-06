'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tellers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tellers.init({
    userId: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    question_one: DataTypes.STRING,
    question_two: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    drawer: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Tellers',
    tableName: 'tellers'
  });
  return Tellers;
};