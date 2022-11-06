import { celebrate, Joi, Segments } from 'celebrate';

export const editTrailValidation = celebrate({
  [Segments.BODY]: {
    banner: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    creator: Joi.string().required(),
    duration: Joi.number().required(),
  },
});
