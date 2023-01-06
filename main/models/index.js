const Driver = require('./Conductor');
const Truck = require('./Unidad');
const Route = require('./Ruta');

Driver.hasOne(Route, {
    foreignKey: 'driver_id'
}); 

Route.belongsTo(Driver, {
    foreignKey: 'driver_id'
})

Route.belongsTo(Truck, {
    foreignKey: 'truck_id'
});

module.exports = { Driver, Truck, Route };