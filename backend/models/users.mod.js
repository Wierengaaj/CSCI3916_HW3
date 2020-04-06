import { Schema, mongo } from "mongoose";


/*
Username only has one field: username along with some validations (string, required, unique, 
trim: cuts white space off the end, minlength, and includes timestamps )

Alot of this going to look pretty similar for any mongoose schema

*/
const userSchema = new Schema({
    username: {
        type:       String,
        required:   true,
        unique:     true, 
        trim:       true, 
        minlength:  2
    }
}, {
    timestamps: true,
});

var User = mongoose.model('User', userSchema);
module.exports = User;