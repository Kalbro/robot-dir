const express = require('express');
const router = express.Router();
const dataFile = require('../models/data.js');

let dataFileInfo = {
    users: dataFile.users.slice(0,100)
}

router.get('/', (request, response) => {
    response.render("index", dataFileInfo);
});

module.exports = router;