const express = require('express');
const mustacheExpress = require('mustache-express');
const dataFile = require("./data.js");
const application = express();

application.use(express.static(__dirname + '/public'));

application.engine('mustache', mustacheExpress());
application.set('/views', './views')
application.set('view engine', 'mustache')

let dataFileInfo = {
    users: dataFile.users.slice(0,100)
}


application.get('/', (request, response) => {
    response.render("index", dataFileInfo);
});

application.get('/:userId', (request, response) => {
    var user = dataFile.users[request.params.userId - 1]
    response.render("index2", user);
});

application.post('/index2', (request, response) =>{
    response.redirect('index2', dataFile);
})

application.listen(4000);