var mongoose = require('mongoose');


var ClientSchema = new mongoose.Schema({
  firstName: 'String',
  lastName: String,
  email: String,
  password: String,
  phone: String,
  heroPhoto: String,
  aboutHero: String,
  aboutHeroLong: String,
  stats: [
    { headline: String, value: String, },
  ],
  clientStats: [
    { headline: String, value: String },
  ],
  clientInfo: [
    { headline: String, value: String },
  ],
  headlineStats: [
    { headline: String, value: String },
  ],
  clientLinks: [
    { iconType: String, url: String, headline: String },
  ],
  photoRefs: [
    { url: String, value: String, },
  ],
  highlightRefs: [
    // Youtube Videos Supported Only 
    { url: String, value: String, videoId: String },
  ],
  fullGameRefs: [
    // Youtube Videos Supported Only 
    { url: String, value: String, videoId: String },
  ],
})


var ClientSchema = mongoose.model('ClientModel', ClientSchema);
module.exports = ClientSchema;