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
    driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'driver',
            key: 'id'
        }
    },
    truck_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'truck',
            key: 'id'
        }
    },
    trailer_id: {
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
