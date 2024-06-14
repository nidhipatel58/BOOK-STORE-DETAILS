let Joi = require("joi");
let user = {

    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(7).required().strict(),
    }),
};
module.exports = { user }