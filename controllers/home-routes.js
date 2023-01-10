const { Driver, Address, Order, Trailer, Truck } = require('../models');
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

router.get('/crear-orden', (req, res) => {
  res.render('createorder');
});
router.get('/trailer', (req, res) => {
  res.render('trailer');
});


module.exports = router;