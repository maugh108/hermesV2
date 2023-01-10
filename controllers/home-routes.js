const { Driver, Address, Order, Trailer, Truck } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    Driver.findAll({
        attributes: [
          'id',
          'name',
          'birthday',
          'license',
          'city',
          'expiration',
          'usermame',
          'password',
          'phone'
        ],
        include: [
          {
            model: Order,
            attributes: ['id', 'driver', 'pickup', 'delivery', 'truck', '',],
            include: {
              model: Driver,
              attributes: ['name']
            }
          },
          {
            model: Driver,
            attributes: ['name']
          }
        ]
      })
        .then(dbPostData => {
        
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
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

router.get('/trailer', (req, res) => {
  res.render('trailer');
});


module.exports = router;