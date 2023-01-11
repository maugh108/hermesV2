const { Driver, Order, Trailer, Truck } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    Order.findAll({
      attributes: [
        'id'
      ],
      include: [
        {
          model: Driver,
          attributes: ['id', 'name', 'birthday', 'license', 'city', 'phone']
        },
        {
          model: Truck,
          attributes: ['id', 'make', 'model', 'year', 'vin', 'plate']
        },
        {
          model: Trailer,
          attributes:['id', 'make', 'year', 'vin', 'plate']
        }
      ]
    })
    .then(dbPostData => {
      console.log(dbPostData)
      const orders = dbPostData.map(order => order.get({ plain: true }));
      res.render('dashboard', { orders, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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