let Joi=require("joi");


let product={

    body:Joi.object().keys({
        title: Joi.string().required(),
        author: Joi.string().required(),
        pages: Joi.number().integer().positive().required(),
        published_date: Joi.date().iso(),
        availability: Joi.string().valid('Available', 'Checked Out', 'Reserved').default('Available'),
        language: Joi.string()
    }),
};

module.exports={product}