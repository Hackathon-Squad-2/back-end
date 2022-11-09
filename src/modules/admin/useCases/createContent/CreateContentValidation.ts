import { celebrate, Joi, Segments } from 'celebrate';

export const createContentValidation = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    type: Joi.string().required(),
    creator: Joi.string().required(),
    duration: Joi.number().required(),
    url: Joi.string().required(),
  },
});
