import { celebrate, Joi, Segments } from 'celebrate';

export const createTrailValidation = celebrate({
  [Segments.BODY]: {
    banner: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    creator: Joi.string().required(),
    duration: Joi.number().required(),
  },
});
