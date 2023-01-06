const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Conductor extends Model {}

Conductor.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    full_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    
    birth_date: {
        type: DataTypes.DATE,

    },
    license: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    location: {
        type: DataTypes.STRING,
    },
    
    phone: {
        type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'conductor'
  }
);

module.exports = Conductor;