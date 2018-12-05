const db = require('./connection');
const Joi = require('joi');

const urls = db.get('urls');

const schema = Joi.object().keys({
    name: Joi.string().token().min(1).max(100).required(),
    url:  Joi.string().uri({
        scheme: [
          /https?/
        ]
      })
    
}).with('name', 'url');

/*
 {
     url: 'http://example.com',
     name: 'super-catchy'
 }
*/

function create(shrinkIt){
    const result = Joi.validate(shrinkIt, schema);
    if(result.error==null){
        return urls.insert(shrinkIt);
    }else{
        return Promise.reject(result.error);
    }
}

module.exports = {
    create
};