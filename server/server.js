const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


var routes = require('./routes');


const app = express();
const port = process.env.PORT || 8888;
const uri = 'mongodb+srv://murphyr6:Qq1009343@cluster0.bmfkv.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





mongoose.connect(uri, {  useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => {
    console.log('DB Connected : - ) ')
  }).catch(e => console.log('could not connect', e))


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}



app.listen(port, () => console.log(`Listening on port ${port}`));


app.use('/api', routes);

