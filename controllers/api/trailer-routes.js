const router = require('express').Router();
const { Trailer } = require('../../models');

router.post('/', (req,res)=>{
    Trailer.create({
        make: req.body.make,
        year: req.body.year,
        vin: req.body.vin,
        plate: req.body.plate,
        number: req.body.number
    })
    .then(dbTrailerData=> {
        res.json(dbTrailerData);
    })
    .catch(e=> console.log(e))
})

router.get('/', (req, res) => {
    Trailer.findAll({
    })
    .then(dbPostData => {
      console.log(dbPostData)
      const orders = dbPostData.map(order => order.get({ plain: true }));
      res.render('trailerform', { orders, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/trailer', (req, res) => {
    res.render('trailerform');
  });


module.exports = router