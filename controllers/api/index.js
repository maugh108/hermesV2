const express = require('express');
const router = express.Router();

const driverRoutes = require('./driver-routes.js');
const truckRoutes = require('./truck-routes.js')
const trailerRoutes = require('./trailer-routes.js')
router.use('/drivers', driverRoutes);
router.use('/trucks', truckRoutes);
router.use('/trailer', trailerRoutes);
module.exports = router ;