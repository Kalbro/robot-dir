const express = require('express');
const router = express.Router();
const dataFile = require('../models/data.js');

router.get('/:userId', (request, response) => {
    var user = dataFile.users[request.params.userId - 1]
    response.render("index2", user);
});

router.post('/views/index2', (request, response) =>{
    response.redirect('index2', dataFile);
});

module.exports = router;