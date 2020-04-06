const router = require('express').Router();
let Movie = require('../models/movies.mod');

router.route('/').get((req, res) =>{
    Movie.find()
    .then(movies => res.json(users)) // Return 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{

    var username = req.body.username;
    var title = req.body.title;
    var year = req.body.year;
    var genre = req.body.genre;
    var actor1 = req.body.actor1;
    var actor2 = req.body.actor2;
    var actor3 = req.body.actor3;

    var newMovie = new Movie({
        username,
        title, 
        year, 
        genre, 
        actor1,
        actor2, 
        actor3,
    });

    newMovie.save()
        .then(() => res.json('Movie added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;