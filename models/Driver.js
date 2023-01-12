const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')
class Driver extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}
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
            type:DataTypes.STRING,
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
        hooks:{
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData
            },
            async beforeUpdate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
                return newUserData
            }
        },
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'driver'
    }
);

module.exports = Driver;