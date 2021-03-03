const express = require('express');
const router = express.Router();

var ClientController = require('../controllers/client');

//Get
router.route('/get:client_id')
    .get(ClientController.get)

router.route('/login')
    .get(ClientController.login)


router.route('/test')
    .get(ClientController.create)

    
// POST 
router.route('/create')
    .post(ClientController.create)


module.exports = router;