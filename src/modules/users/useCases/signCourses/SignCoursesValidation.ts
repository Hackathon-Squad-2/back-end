import { celebrate, Joi, Segments } from 'celebrate';

export const signCoursesValidation = celebrate({
  [Segments.BODY]: {
    trailsIdList: Joi.array().items(Joi.string()),
  },
});
