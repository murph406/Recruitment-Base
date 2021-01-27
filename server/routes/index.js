const express = require('express');
var router = express.Router();

var ClientRouter = require('./client');

router.use('/client', ClientRouter);

module.exports = router;