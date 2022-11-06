import { celebrate, Joi, Segments } from 'celebrate';

export const unsigCourseValidation = celebrate({
  [Segments.PARAMS]: {
    trailId: Joi.string().required(),
  },
});
