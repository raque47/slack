
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
const uriString = process.env.DB || 'localhost:27017/Slack';

try {
    mongoose.connect('mongodb://localhost:27017/Slack'); //- starting a db connection
}catch(err) {
    mongoose.createConnection('mongodb://localhost:27017/Slack'); //- starting another db connection
}

//set our app
const app = require('./app');
app.listen(8080, () => {
  console.log(`Express Server running on port 8080`);
});