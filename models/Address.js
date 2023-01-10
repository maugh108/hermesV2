const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Address extends Model {}

Address.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        street:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        zipcode:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        col:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        number:{
            type:DataTypes.BIGINT,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
    },
    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'address'
    }
);

module.exports = Address;