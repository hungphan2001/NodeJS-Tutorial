const express = require('express');
const app = express();
const session = require("express-session");
const config = require('config');

//Session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.get("app.session_key"),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


//Middleware
app.use(require("../middlewares/share"));

//Router
app.use(require(config.get('app.router')));

//Satic 
app.use('/public',express.static(config.get("app.public_folder")));

app.set('views',config.get('app.view_folder'));
app.set('view engine',config.get('app.view_engine'));
module.exports = app;
