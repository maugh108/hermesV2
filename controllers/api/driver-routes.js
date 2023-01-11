const router = require('express').Router();
const { Driver } = require('../../models');

router.post('/', (req, res) => {
    Driver.create({
        name: req.body.name,
        birthday: req.body.birthday,
        license: req.body.license,
        city: req.body.city,
        expiration: req.body.expiration,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone
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
        console.log(dbUserData)
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
    const drivers = await Driver.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
      const drivers = dbPostData.get({plain: true})
      res.render('signup') 
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
   
    //res.render('signup', { drivers, loggedIn: req.session.loggedIn });  
});

module.exports = router;