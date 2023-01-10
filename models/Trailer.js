const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trailer extends Model {}

Trailer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        make:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        year:{
            type:DataTypes.DATEONLY,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        vin:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        plate:{
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
        modelName:'trailer'
    }
);

module.exports = Trailer;