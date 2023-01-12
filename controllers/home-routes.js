const { Driver, Order, Trailer, Truck } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    const orders = await Order.findAll({})
    .then(dbPostData => {
      const orders = dbPostData.map(order => order.get({ plain: true }));
      return orders 
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    for(let i =0; i< orders.length; i++){
      const driverId = orders[i].driver_id
      const truckId = orders[i].truck_id
      const trailerId = orders[i].trailer_id
      const driver = await Driver.findOne({where: {id:driverId}})
      const truck = await Truck.findOne({where: {id:truckId}})
      const trailer = await Trailer.findOne({where: {id:trailerId}})
      orders[i].driver = driver.get({plain:true})
      orders[i].truck = truck.get({plain:true})
      orders[i].trailer = trailer.get({plain:true})
    }
    res.render('dashboard', { orders, loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return; 
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/crear-orden', async(req, res) => {
  const drivers = await Driver.findAll({})
    .then(dbPostData => {
      const drivers = dbPostData.map(driver => driver.get({ plain: true }));
      return drivers 
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

  const trucks = await Truck.findAll({})
  .then(res=>{
    return res.map(truck => truck.get({plain:true}))
  })  
  const trailer = await Trailer.findAll({})
  .then(res=>{
    return res.map(trailer => trailer.get({plain:true}))
  })  
    res.render('createorder', { drivers, trucks, trailer, loggedIn: req.session.loggedIn });  
  });

module.exports = router;