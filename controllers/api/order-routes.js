const router = require('express').Router();
const { Order } = require('../../models');

router.post('/', (req, res) => {
    Order.create({
        driver_id: req.body.name,
        truck_id: req.body.truck,
        trailer_id: req.body.trailer,
    })
    .then(dbUserData => {
    req.session.save(() => {

        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
        });
    })
    .catch(e=> console.log(e))
    
});

router.get('/orders', (req, res) => {
    res.render('ordersForm');
  });

module.exports = router;