const Driver = require('./Driver')
const Address = require('./Address')
const Truck = require('./Truck')
const Trailer = require('./Trailer')
const Order = require('./Order')

Driver.hasMany(Order, {
    foreignKey: 'driver'
}); 

module.exports = { Driver, Address, Order, Trailer, Truck };