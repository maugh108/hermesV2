const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ruta extends Model {}

Ruta.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'conductor',
            key: 'id'
            }
    },

    truck_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'unidad',
        key: 'id'
        }
    },

    source: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len:[4]
      }
    },
  
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len:[4]
      }
  }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'ruta'
  }
);

module.exports = Ruta;