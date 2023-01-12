const router = require('express').Router();
const { Trailer } = require('../../models');

router.post('/', (req,res)=>{
    console.log(req.body.id)
    if(req.body.id){
      Trailer.update(req.body, {
        where:{
          id: req.body.id
        }
      })
      .then(dbTrailerData=> {
        res.json(dbTrailerData);
      })
      .catch(e=> console.log(e))
    }else{
      Trailer.create(req.body)
      .then(dbTrailerData=> {
          res.json(dbTrailerData);
      })
      .catch(e=> console.log(e))
    }
    
})
router.delete('/delete/:id', (req,res)=>{
  Trailer.destroy({
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
router.get('/create-trailer', (req, res) => {
  res.render('trailerForm');
});
router.get('/:id', (req, res) => {
  Trailer.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(dbPostData => {
    const trailer = dbPostData.get({ plain: true });
    res.render('trailerForm', { trailer, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/', (req, res) => {
  Trailer.findAll({
  })
  .then(dbPostData => {
    const trailers = dbPostData.map(trailer => trailer.get({ plain: true }));
    res.render('trailersView', { trailers, loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



module.exports = router