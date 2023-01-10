const router = require('express').Router();
const { Trailer} = require('../../models');

router.post('/', (req,res)=>{
    Truck.create({
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

router.get('/trailer', (req, res) => {
    res.render('trailerForm');
  });


module.exports = router