import { celebrate, Joi, Segments } from 'celebrate';

export const updateProgressValidation = celebrate({
  [Segments.BODY]: {
    status: Joi.string().valid('available', 'going', 'finished').required(),
  },
});
