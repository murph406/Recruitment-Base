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
  personalInfo: [
    { type: String, value: String },
  ],
  bio: [
    { headline: String, text: String },
  ],
  links: [
    { type: String, value: String, name: String },
  ],
  photoRefs: [
    { url: String, info: String, date: Date },
  ],
  highlightRefs: [
    { url: String, info: String, date: Date, videoId: String },
  ],
  fullGameRefs: [
    { url: String, info: String, date: Date, videoId: String },
  ],
})

var ClientSchema = mongoose.model('ClientModel', ClientSchema);
module.exports = ClientSchema;