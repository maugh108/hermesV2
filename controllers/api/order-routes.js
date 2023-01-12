const router = require('express').Router();
const { Order,Driver,Truck,Trailer } = require('../../models');

router.post('/', (req, res) => {
    if(req.body.id){
        Order.update(req.body,{where:{id:req.body.id}})
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
        Order.create({
            driver_id: req.body.driver_id,
            truck_id: req.body.truck_id,
            trailer_id: req.body.trailer_id,
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
    }
    
    
});

router.delete('/delete/:id', (req,res)=>{
    Order.destroy({
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

router.get('/:id', async(req, res) => {
    const order = await Order.findOne({where:{id: req.params.id}})
    .then(dbPostData => {
      return dbPostData.get({ plain: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    
    const driverId = order.driver_id
    const truckId =order.truck_id
    const trailerId = order.trailer_id
    const driver = await Driver.findOne({where: {id:driverId}})
    const truck = await Truck.findOne({where: {id:truckId}})
    const trailerResults = await Trailer.findOne({where: {id:trailerId}})
    order.driver = driver.get({plain:true})
    order.truck = truck.get({plain:true})
    order.trailer = trailerResults.get({plain:true})
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
    res.render('createorder', { order,trucks, trailer , drivers, loggedIn: req.session.loggedIn });
  });
router.get('/orders', (req, res) => {
    res.render('ordersForm');
  });

module.exports = router;