const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Truck extends Model {}

Truck.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
      },
      VINnumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      plates: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'truck'
    }
  );

  module.exports = Truck;