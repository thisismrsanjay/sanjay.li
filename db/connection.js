const monk = require('monk');
const url = "mongodb://sanjay:sanjay123@ds027771.mlab.com:27771/url-shortner";

const db = monk(url);

module.exports =db;