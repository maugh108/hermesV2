const express = require('express');
const router = express.Router();

const driverRoutes = require('./driver-routes.js');
const truckRoutes = require('./truck-routes.js')
const trailerRoutes = require('./trailer-routes.js')
const orderRoutes = require('./order-routes.js')
router.use('/drivers', driverRoutes);
router.use('/trucks', truckRoutes);
router.use('/trailers', trailerRoutes);
router.use('/orders', orderRoutes);
module.exports = router;