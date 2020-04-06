import { Schema, mongo, Mongoose } from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({

    username:   { type: String, required: true},
    title:      { type: String, required: true},
    year:       { type: Number, required: true},
    genre:      { type: String, required: true},
    actor1:     { type: String, required: true},
    actor2:     { type: String, required: true},
    actor3:     { type: String, required: true},
}, {
    timestamps: true,
});

var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;