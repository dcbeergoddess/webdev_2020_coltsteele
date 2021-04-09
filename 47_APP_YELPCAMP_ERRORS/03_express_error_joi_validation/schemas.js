const Joi = require('joi');

module.exports.campgroundSchema = Joi.object({
  //campground is our `key` (everything is campground[title], etc)
  //it should be an object and it needs to be required
  campground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required()
  }).required()
});

