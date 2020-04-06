const router = require('express').Router();
let Movie = require('../models/movies.mod');

//GET REQUEST
router.route('/').get((req, res) =>{
    Movie.find()
    .then(movies => res.json(movies)) // Return 
    .catch(err => res.status(400).json('Error: ' + err));
});
//POST REQUEST
router.route('/add').post((req, res) =>{

    var title = req.body.title;
    var year = req.body.year;
    var genre = req.body.genre;
    var actor = req.body.actor.actor;
    var character = req.body.character;
    
    var newMovie = new Movie({
        title, 
        year, 
        genre, 
        actor,
        character
    });

    newMovie.save(function (err){
       
        if (err){
            //duplicate
            if(err.code === 11000)
                return res.status(400).json({
                    success: false,
                    message: 'That movie already exists'});
            else
                return res.status(500).send(err);
        }
        res.status(200).json({success: true, message: 'Movie added'});
    });
});

//QUERY
router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id)
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

//UPDATE
router.route('/update/:id').post((req, res) => {
    Movie.findById(req.params.id)
    .then(movies => {
        movies.title = req.body.title;
        movies.year = req.body.year;
        movies.genre = req.body.genre;
        movies.actor = req.body.actor; 
        movies.character = req.body.character;

        movies.save()
        .then(() => res.json('Movie updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
});

//INSERT
router.route('/:id').post((req, res) => {
    Movie.findById(req.params.id)
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

//DELETE
router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(movies => res.json('Movie deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;