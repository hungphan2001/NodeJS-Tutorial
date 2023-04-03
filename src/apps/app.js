const express = require('express');
const app = express();
const config = require('config');
//Router
app.use(require(config.get('app.router')));
app.use('/static',express.static(config.get("app.public_folder")));
app.set('views',config.get('app.view_folder'));
app.set('view engine',config.get('app.view_engine'));
module.exports = app;
