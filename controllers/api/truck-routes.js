const router = require('express').Router();
const { Truck } = require('../../models');

router.post('/', (req,res)=>{
    Truck.create({
        make: req.body.make,
        model :req.body.model,
        year: req.body.year,
        vin: req.body.vin,
        plate: req.body.plate,
        number: req.body.number
    })
    .then(dbTruckData=> {
        res.json(dbTruckData);
    })
    .catch(e=> console.log(e))
})

router.get('/', (req, res) => {
    Truck.findAll({
    })
    .then(dbPostData => {
      console.log(dbPostData)
      const orders = dbPostData.map(order => order.get({ plain: true }));
      res.render('truckForm', { orders, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/form', (req, res) => {
    res.render('truckForm');
  });


module.exports = router