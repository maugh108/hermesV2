const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    driver: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'driver',
            key: 'id'
        }
    },
    pickup: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'address',
            key: 'id'
        }
    },
    delivery: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'address',
            key: 'id'
        }
    },
    truck: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'truck',
            key: 'id'
        }
    },
    trailer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'trailer',
            key: 'id'
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'order'
  }
);

module.exports = Order;
