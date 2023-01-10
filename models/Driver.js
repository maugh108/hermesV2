const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Driver extends Model {}

Driver.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        birthday:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        license:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        expiration:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        phone:{
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
        modelName:'driver'
    }
);

module.exports = Driver;