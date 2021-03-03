var { ClientService } = require('../services')
// var bcrypt = require('bcryptjs');

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

  get: async function (req, res, next) {
    try {
      const client_id = { _id: req.params.client_id }

      const client = await ClientService.find(client_id);

      if (!client) {
        throw 'No user found';
      }

      res.status(201).send(client);
    } catch (e) {
      throw e
    }
  },

  test: function (req, res, next) {
    return res.status(200).send('client');
  },

  create: async function (req, res, next) {

    try {
      const client = await ClientService.create();

      if (!client) {
        throw 'No user created';
      }

      res.status(201).send(client);
    } catch (err) {
      next(err);
    }
  }
}

