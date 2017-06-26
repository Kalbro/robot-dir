const express = require('express');
const mustacheExpress = require('mustache-express');
const dataFile = require('./models/data.js');
const homeController = require('./controllers/home');
const usersController = require('./controllers/users');
const application = express();


application.use(express.static(__dirname + '/public'));

application.engine('mustache', mustacheExpress());
application.set('/views', './views')
application.set('view engine', 'mustache')

application.use(usersController);
application.use(homeController);

application.listen(4000);