const Driver = require('./Driver')
const Address = require('./Address')
const Truck = require('./Truck')
const Trailer = require('./Trailer')
const Order = require('./Order')

Order.hasOne(Driver, { 
    foreignKey: 'id',
})

Order.hasOne(Truck, { 
    foreignKey: 'id',
})

Order.hasOne(Trailer, { 
    foreignKey: 'id',
})





module.exports = { Driver, Address, Order, Trailer, Truck };