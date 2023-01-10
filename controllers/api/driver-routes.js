const router = require('express').Router();
const { Driver, Post, Comment } = require('../../models');


// CREATE new driver 
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
    // store user data during session 
    .then(dbUserData => {
    req.session.save(() => {
        // Make user login
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
        });
    })
    .catch(e=> console.log(e))
    
});


module.exports = router;