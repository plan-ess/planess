// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


// session configuration

const session = require('express-session');
const MongoStore = require('connect-mongo');
const DB_URL = 'mongodb://localhost/projector';

//just added

const path = require('path');

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
		saveUninitialized: false,
		resave: true,
		store: MongoStore.create({
			mongoUrl: DB_URL
		})
	})
)



// end of session configuration





// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js


const auth = require("./routes/auth");
app.use("/api/auth", auth);

const items = require('./routes/items');
app.use('/api/items', items);

const household = require('./routes/household');
app.use('/api/household', household)

//now added

app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res) => {
	// If no routes match, send them the React HTML.
	res.sendFile(__dirname + "/client/build/index.html");
  });


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);




module.exports = app;