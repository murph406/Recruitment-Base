const express = require('express');
const router = express.Router();

var ClientController = require('../controllers/client');

//Get
router.route('/get:client_id')
    .get(ClientController.get)




router.route('/test')
    .get(ClientController.create)


// POST 
router.route('/create')
    .post(ClientController.create)

router.route('/login')
    .post(ClientController.login)


module.exports = router;