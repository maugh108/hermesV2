const router = require('express').Router();
const { Truck } = require('../../models');


router.get('/create-truck', (req, res) => {
  res.render('truckForm');
  });

router.post('/', (req,res)=>{
  if(req.body.id){
    Truck.update(req.body, {
        where: {
            id: req.body.id
        }
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
}else{ 
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
  }
})
router.get('/:id', (req, res) => {
  Truck.findOne({
    where:{ id: req.params.id}
  })
  .then(dbPostData => {
    const truck = dbPostData.get({ plain: true });
    res.render('truckForm', { truck, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
router.delete('/delete/:id', (req,res)=>{
  Truck.destroy({
    where: {
        id: req.params.id 
    }
  }).then(dbPostData => {
      if (!dbPostData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
      }
      res.status(200).json(dbPostData);
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})
router.get('/', (req, res) => {
    Truck.findAll({
    })
    .then(dbPostData => {
      const trucks = dbPostData.map(truck => truck.get({ plain: true }));
      res.render('trucksView', { trucks, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




module.exports = router