const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport')
const cookieParser = require('cookie-parser')
const csrf = require("csurf")

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
var app = express();
const port = process.env.PORT || 3000;
const csrfMiddleware = csrf({ cookie: true })


//uncomment if passport is needed
//require('./config/passport')(passport);
//app.use(passport.initialize());

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Allows our Angular application to make HTTP requests to Express application
app.use(cors());
app.use(cookieParser());
app.use(csrfMiddleware)

app.all("*", (req, res, next) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    next();
})

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(require('./routes'));


/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:3000
app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});
