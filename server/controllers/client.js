// var User = require('./../models/user');
// var bcrypt = require('bcryptjs');


const client = {
  firstName: 'Patrick',
  lastName: 'Murphy',
  email: 'test@gmail.com',
  password: '406',
  phone: '4062416585',
  heroPhoto:"https://dl.dropboxusercontent.com/s/qi4bfw2b57yo111/hero-image.png?dl=0",
  stats: [
      {type: '', info: ''}
  ],
  isntaCredentials: ''
}

module.exports = {

  login: function (req, res, next) {
    let { password } = req.body
    console.log(password)

    if (password == client.password) {
      // ^^^ Obviously do not keep this 
      return res.status(200).send({ success: true });
    } else {
      return res.status(401).send({ error: "Hint 406" });
    }
  },

  get: function(req, res, next) {
    return res.status(200).send(client);
  }
}

