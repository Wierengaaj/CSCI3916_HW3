var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose'); // Allows us to connect to our MongoDB database

// Allows us to use the .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// Our server is sending and receiving JSON
app.use(express.json()); 

var uri = process.env.DB;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
var connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connected')
})

var movieRouter = require('./routes/movies.rot');
var userRouter = require('./routes/users.rot');

app.use('/movies', movieRouter);
app.use('/users', userRouter);

// Starts the server - starts listening on a certain port.
app.listen(port, () =>{ 
    console.log(('server is running on port:'), port);
})