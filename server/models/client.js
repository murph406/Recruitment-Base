var mongoose = require('mongoose');
 

var ClientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    heroPhoto: String,
    aboutHero: String,
    aboutHeroLong: String,
    stats: [
        { type: String, value: Number, date: Date },
      ],

})

var ClientSchema = mongoose.model('ClientModel', ClientSchema);
module.exports = ClientSchema;