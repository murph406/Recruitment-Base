"use strict";

// var User = require('./../models/user');
// var bcrypt = require('bcryptjs');
var client = {
  firstName: 'Patrick',
  lastName: 'Murphy',
  email: 'test@gmail.com',
  password: '406',
  phone: '4062416585',
  heroPhoto: "https://dl.dropboxusercontent.com/s/qi4bfw2b57yo111/hero-image.png?dl=0",
  stats: [{
    type: 'Points',
    value: '12',
    date: new Date()
  }, {
    type: 'Ave Minutes',
    value: '26',
    date: new Date()
  }, {
    type: 'Field Goal Attempts',
    value: '32',
    date: new Date()
  }, {
    type: '3-Point Field Goals Made',
    value: '2',
    date: new Date()
  }, {
    type: 'Free Throw Percent',
    value: '84',
    date: new Date()
  }, {
    type: 'Rebounds',
    value: '4',
    date: new Date()
  }, {
    type: 'Assists',
    value: '2',
    date: new Date()
  }, {
    type: 'Blocks',
    value: '3',
    date: new Date()
  }, {
    type: 'Steals',
    value: '1',
    date: new Date()
  }],
  bio: [{
    type: 'Position',
    value: 'Guard'
  }, {
    type: 'Class',
    value: 'Junior'
  }, {
    type: 'Height',
    value: '6 6" '
  }, {
    type: 'Weight',
    value: '180'
  }, {
    type: 'Hometown',
    value: 'Spokane'
  }, {
    type: 'Highschool',
    value: 'Gonzaga Prep'
  }, {
    type: 'Club',
    value: 'AAU Spo'
  }, {
    type: 'GPA',
    value: '3.3'
  }],
  photoRefs: [{
    url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0',
    info: '',
    date: new Date()
  }, {
    url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0',
    info: '',
    date: new Date()
  }],
  highlightRefs: [{
    url: '',
    info: '',
    date: new Date()
  }],
  fullGameRefs: [{
    url: '',
    info: '',
    date: new Date()
  }]
};
module.exports = {
  login: function login(req, res, next) {
    var password = req.body.password;
    console.log(password);

    if (password == client.password) {
      // ^^^ Obviously do not keep this 
      return res.status(200).send({
        success: true
      });
    } else {
      return res.status(401).send({
        error: "Hint 406"
      });
    }
  },
  get: function get(req, res, next) {
    return res.status(200).send(client);
  }
};