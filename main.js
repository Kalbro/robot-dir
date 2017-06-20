const express = require('express');
const mustacheExpress = require('mustache-express');
const dataFile = require("./data.js");
const application = express();

application.use(express.static(__dirname + '/public'));

application.engine('mustache', mustacheExpress());
application.set('/views', './views')
application.set('view engine', 'mustache')

let dataFileInfo = {
    users: dataFile.users.slice(0, 8)
}


application.get('/', function (req, res) {
    res.render("index", dataFileInfo);
});

application.listen(4000);