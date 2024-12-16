const Joi = require("joi");

module.exports.itemSchema = Joi.object({
  item: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    image: Joi.string().allow("", null),
  }).required(),
});

module.exports.reviewschema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5),
  }).required(),
});
