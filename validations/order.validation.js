let Joi = require("joi");


let order = {
    body: Joi.object().keys({
        date: Joi.date().default(Date.now).required()
    }),
};

module.exports = { order }