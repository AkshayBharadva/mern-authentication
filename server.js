const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')


const connect = require('./config/mongodb.config');

const app = express();

// ! Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


// ! access.log
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
});

// ! logging
app.use(morgan('tiny'));
app.use(morgan('combined', { stream: accessLogStream }));



// ! connect to db
connect();

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use("/api/v1/users", require('./routes/users.route'));

// process.env.port is Heroku's port if you choose to deploy the app there
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));