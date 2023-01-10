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

// rendering sign up page 
router.get('/form', (req, res) => {
    res.render('truckForm');
  });


module.exports = router