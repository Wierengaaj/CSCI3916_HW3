var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const actorSchema = new Schema({
    actorName:{
        type: String,
        required: true
    },
    characterName:{
        type:String,
        required: true
    }
});

const movieSchema = new Schema({

    title:      { type: String, required: true},
    year:       { type: Number, required: true},
    genre:      { type: String, required: true},
    actor:      { type: [actorSchema], required: true}
}, {
   // timestamps: true,
});

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;