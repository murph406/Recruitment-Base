const express = require('express');
const router = express.Router();

var ClientController = require('../controllers/client');


router.route('')
    // .post(OrderController.create)
    .get(ClientController.get)

router.route('/login')
    .get(ClientController.login)


module.exports = router;