const router = require('express').Router();
const { Driver } = require('../../models');

router.post('/', (req, res) => {
    if(req.body.id){
        Driver.update(req.body, {
            where: {
                id: req.body.id
            }
        }
        )
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
        Driver.create(req.body)
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
    Driver.destroy({
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
router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    Driver.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!'});
            return;
        }
        // res.json({ user: dbUserData});
        // verify user
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
      
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/driver', async(req, res) => {
    const drivers = await Driver.findAll({})
    .then(dbPostData => {
      const drivers = dbPostData.map(driver => driver.get({ plain: true }));
      return drivers 
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    res.render('drivers', { drivers, loggedIn: req.session.loggedIn });  
});

router.get('/:id', async(req, res) => {
    const driver = await Driver.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        return dbPostData.get({plain: true})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
   
    res.render('signup', { driver, loggedIn: req.session.loggedIn });  
});

module.exports = router;