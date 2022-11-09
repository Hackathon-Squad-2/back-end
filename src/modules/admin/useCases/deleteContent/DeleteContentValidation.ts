import { celebrate, Joi, Segments } from 'celebrate';

export const deleteContentValidation = celebrate({
  [Segments.PARAMS]: {
    trailId: Joi.string().required(),
    contentId: Joi.string().required(),
  },
});
