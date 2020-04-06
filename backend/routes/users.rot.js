const router = require('express').Router();
let User = require('../models/users.mod');

router.route('/').get((req, res) =>{
    User.find()
    .then(users => res.json(users)) // Return 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{

    var username = req.body.username;
    var newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;