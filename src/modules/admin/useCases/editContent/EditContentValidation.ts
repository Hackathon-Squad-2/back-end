import { celebrate, Joi, Segments } from 'celebrate';

export const editContentValidation = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    type: Joi.string().required(),
    creator: Joi.string().required(),
    duration: Joi.number().required(),
    url: Joi.string().required(),
  },
});
